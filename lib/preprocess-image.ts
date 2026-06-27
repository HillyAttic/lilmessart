/**
 * Preprocess an uploaded image to remove excess whitespace and scale
 * the content so it fills the frame nicely in the product card.
 *
 * This fixes the "zoomed-out" look when art images have large white/
 * transparent padding around the actual artwork.
 */

/** Detect non-transparent / non-near-white pixels in ImageData. */
function isContentPixel(r: number, g: number, b: number, a: number): boolean {
  if (a < 10) return false // transparent
  // Near-white: all channels > 240
  if (r > 240 && g > 240 && b > 240) return false
  return true
}

/**
 * Crop whitespace from an image and scale the content so it fills
 * ~90 % of the output frame while preserving the original aspect ratio.
 *
 * Returns a PNG Blob. If the image has little or no excess whitespace
 * it is returned as-is (still converted to a Blob) to avoid unnecessary work.
 */
export async function preprocessImage(file: File): Promise<Blob> {
  const img = await loadImage(file)

  const canvas = document.createElement("canvas")
  canvas.width = img.naturalWidth
  canvas.height = img.naturalHeight
  const ctx = canvas.getContext("2d")
  if (!ctx) return file

  ctx.drawImage(img, 0, 0)
  const { data, width, height } = ctx.getImageData(0, 0, canvas.width, canvas.height)

  // --- Find content bounding box ---
  let top = height,
    bottom = 0,
    left = width,
    right = 0
  let hasContent = false

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4
      if (isContentPixel(data[i], data[i + 1], data[i + 2], data[i + 3])) {
        if (x < left) left = x
        if (x > right) right = x
        if (y < top) top = y
        if (y > bottom) bottom = y
        hasContent = true
      }
    }
  }

  if (!hasContent) return file // entirely blank — return original

  const contentW = right - left + 1
  const contentH = bottom - top + 1
  const contentRatio = (contentW * contentH) / (width * height)

  // If the content already fills ≥ 75 % of the image, no preprocessing needed.
  if (contentRatio >= 0.75) {
    // Still return as a fresh blob (normalised format)
    return new Promise<Blob>((resolve) => {
      canvas.toBlob((b) => resolve(b ?? file), "image/png", 0.92)
    })
  }

  // --- Build output image: scale content to fill ~90 % of frame ---
  const outW = width
  const outH = height
  const targetFill = 0.9

  // Scale content so it fills targetFill of the smaller dimension
  const scale = (Math.min(outW, outH) * targetFill) / Math.max(contentW, contentH)
  const drawW = Math.round(contentW * scale)
  const drawH = Math.round(contentH * scale)
  const drawX = Math.round((outW - drawW) / 2)
  const drawY = Math.round((outH - drawH) / 2)

  // Create output canvas with white background
  const outCanvas = document.createElement("canvas")
  outCanvas.width = outW
  outCanvas.height = outH
  const outCtx = outCanvas.getContext("2d")!
  outCtx.fillStyle = "#ffffff"
  outCtx.fillRect(0, 0, outW, outH)

  // Draw cropped + scaled content
  outCtx.imageSmoothingEnabled = true
  outCtx.imageSmoothingQuality = "high"
  outCtx.drawImage(canvas, left, top, contentW, contentH, drawX, drawY, drawW, drawH)

  return (
    new Promise<Blob>((resolve) => {
      outCanvas.toBlob(
        (b) => resolve(b ?? file),
        "image/png",
        0.92,
      )
    })
  )
}

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = URL.createObjectURL(file)
  })
}
