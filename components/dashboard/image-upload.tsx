"use client"

import { useState, useRef, useCallback } from "react"
import { Upload, X, ImageIcon, Loader2 } from "lucide-react"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { storage } from "@/lib/firebase"

interface Props {
  /** Currently set image URL (for previewing existing images) */
  currentImage?: string
  /** Called when an image finishes uploading — receives the download URL */
  onImageUploaded: (url: string) => void
  /** Called when the user removes the current image */
  onImageRemove?: () => void
}

export default function ImageUpload({ currentImage, onImageUploaded, onImageRemove }: Props) {
  const [preview, setPreview] = useState<string | null>(currentImage ?? null)
  const [isDragOver, setIsDragOver] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const uploadFile = useCallback(async (file: File) => {
    // Validate type
    if (!file.type.startsWith("image/")) {
      setError("Please select an image file.")
      return
    }
    // Validate size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("Image must be under 5MB.")
      return
    }

    setError(null)
    setUploading(true)
    setProgress(0)

    // Show local preview immediately
    const localUrl = URL.createObjectURL(file)
    setPreview(localUrl)

    try {
      // Create a unique path — products/{sanitized-name}-{timestamp}
      const ext = file.name.split(".").pop() ?? "jpg"
      const sanitizedName = file.name
        .replace(/[^a-zA-Z0-9_-]/g, "")
        .slice(0, 40) || "product"
      const fileName = `${sanitizedName}-${Date.now()}.${ext}`
      const storageRef = ref(storage, `products/${fileName}`)

      const uploadTask = uploadBytesResumable(storageRef, file)

      // Track progress
      const downloadUrl = await new Promise<string>((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const pct = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            )
            setProgress(pct)
          },
          (err) => {
            setUploading(false)
            reject(err)
          },
          async () => {
            try {
              const url = await getDownloadURL(uploadTask.snapshot.ref)
              resolve(url)
            } catch (err) {
              reject(err)
            }
          }
        )
      })

      // Clean up the local object URL
      URL.revokeObjectURL(localUrl)

      setPreview(downloadUrl)
      setUploading(false)
      setProgress(100)
      onImageUploaded(downloadUrl)
    } catch (err) {
      console.error("Upload failed:", err)
      setError("Upload failed. Please try again.")
      setPreview(null)
      setUploading(false)
    }
  }, [onImageUploaded])

  const handleFile = useCallback(
    (file: File | undefined) => {
      if (file) uploadFile(file)
    },
    [uploadFile]
  )

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragOver(false)
      const file = e.dataTransfer.files[0]
      handleFile(file)
    },
    [handleFile]
  )

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleRemove = () => {
    setPreview(null)
    setProgress(0)
    setError(null)
    if (inputRef.current) inputRef.current.value = ""
    onImageRemove?.()
  }

  return (
    <div className="space-y-2">
      <label className="text-xs text-muted-foreground mb-1.5 block">
        Product Image
      </label>

      {/* Drop zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => inputRef.current?.click()}
        className={`
          relative flex flex-col items-center justify-center gap-2
          w-full h-32 rounded-lg border-2 border-dashed
          cursor-pointer transition-colors
          ${
            isDragOver
              ? "border-primary bg-primary/5"
              : "border-border bg-muted/30 hover:bg-muted/50"
          }
          ${uploading ? "pointer-events-none" : ""}
        `}
      >
        {uploading ? (
          <>
            <Loader2 className="size-6 text-primary animate-spin" />
            <span className="text-xs text-muted-foreground">
              Uploading… {progress}%
            </span>
            {/* Progress bar */}
            <div className="absolute bottom-3 left-3 right-3 h-1.5 rounded-full bg-border overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </>
        ) : (
          <>
            <Upload className="size-5 text-muted-foreground" />
            <div className="text-xs text-muted-foreground text-center px-2">
              <span className="text-primary font-medium">Click to upload</span>{" "}
              or drag and drop
            </div>
            <span className="text-[10px] text-muted-foreground">
              PNG, JPG, WebP (max 5MB)
            </span>
          </>
        )}
      </div>

      {/* Hidden file input */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />

      {/* Preview */}
      {preview && !uploading && (
        <div className="relative size-20 rounded-lg border border-border overflow-hidden bg-muted group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={preview}
            alt="Product preview"
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              handleRemove()
            }}
            className="absolute top-0.5 right-0.5 size-5 flex items-center justify-center rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X className="size-3" />
          </button>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="flex items-center gap-1.5 text-xs text-red-400">
          <ImageIcon className="size-3" />
          {error}
        </div>
      )}
    </div>
  )
}
