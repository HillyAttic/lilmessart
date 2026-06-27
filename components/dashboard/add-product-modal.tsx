"use client"

import { useState } from "react"
import { X, ChevronDown } from "lucide-react"
import ImageUpload from "@/components/dashboard/image-upload"
import type { Product } from "@/lib/data-types"

const categories = ["Illustration", "Abstract", "Landscape", "Still Life"]
const statuses = ["Available", "Not Available", "Limited Deal", "In Offer"]

interface Props {
  onClose: () => void
  onAdd: (product: Product) => void
}

export default function AddProductModal({ onClose, onAdd }: Props) {
  const [form, setForm] = useState({
    name: "",
    category: categories[0],
    price: "",
    stock: "",
    status: statuses[0],
    image: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const id = `#${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`
    onAdd({
      id,
      name: form.name,
      category: form.category,
      price: form.price.startsWith("₹") ? form.price : `₹${form.price}`,
      stock: parseInt(form.stock) || 0,
      status: form.status,
      image: form.image || undefined,
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative bg-card rounded-2xl border border-border w-full max-w-md p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-base font-bold text-foreground">Add New Product</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="size-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block">Product Name</label>
            <input
              required
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Enter product name"
              className="w-full h-9 px-3 text-sm bg-muted rounded-lg border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Category</label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full h-9 px-3 text-sm bg-muted rounded-lg border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {categories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Status</label>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className="w-full h-9 px-3 text-sm bg-muted rounded-lg border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Price (₹)</label>
              <input
                required
                type="text"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                placeholder="₹0.00"
                className="w-full h-9 px-3 text-sm bg-muted rounded-lg border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Stock</label>
              <input
                required
                type="number"
                min="0"
                value={form.stock}
                onChange={(e) => setForm({ ...form, stock: e.target.value })}
                placeholder="0"
                className="w-full h-9 px-3 text-sm bg-muted rounded-lg border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <ImageUpload
            currentImage={form.image || undefined}
            onImageUploaded={(url) => setForm({ ...form, image: url })}
            onImageRemove={() => setForm({ ...form, image: "" })}
          />

          {/* Collapsible Image URL fallback */}
          <details className="group">
            <summary className="flex items-center gap-1.5 text-xs text-muted-foreground cursor-pointer hover:text-foreground transition-colors list-none">
              <ChevronDown className="size-3 transition-transform group-open:rotate-180" />
              Or enter a URL manually
            </summary>
            <div className="mt-2">
              <label className="text-xs text-muted-foreground mb-1.5 block">Image URL</label>
              <input
                type="text"
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
                placeholder="/images/product.png"
                className="w-full h-9 px-3 text-sm bg-muted rounded-lg border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </details>

          <div className="flex gap-3 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 h-9 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 h-9 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
