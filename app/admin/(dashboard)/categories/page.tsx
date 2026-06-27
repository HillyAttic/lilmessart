"use client"

import { useState } from "react"
import { Plus, Edit2, Trash2, ChevronRight, ImageIcon } from "lucide-react"
import { useStore } from "@/lib/store-context"
import type { Category } from "@/lib/data-types"

export default function CategoriesPage() {
  const { categories, loading, addCategory, updateCategory, deleteCategory } = useStore()
  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [form, setForm] = useState({ name: "", description: "", image: "" })

  const handleAdd = () => {
    if (!form.name.trim()) return
    const newCat: Category = {
      id: Date.now(),
      name: form.name,
      image: form.image || undefined,
      products: 0,
      description: form.description,
    }
    addCategory(newCat)
    setForm({ name: "", description: "", image: "" })
    setShowModal(false)
  }

  const handleEdit = (id: number) => {
    const cat = categories.find((c) => c.id === id)
    if (!cat) return
    setEditingId(id)
    setForm({ name: cat.name, description: cat.description, image: cat.image ?? "" })
    setShowModal(true)
  }

  const handleSaveEdit = () => {
    if (editingId === null) return
    const cat = categories.find((c) => c.id === editingId)
    if (!cat) return
    updateCategory({ ...cat, name: form.name, description: form.description, image: form.image || undefined })
    setEditingId(null)
    setForm({ name: "", description: "", image: "" })
    setShowModal(false)
  }

  const handleDelete = (id: number) => {
    deleteCategory(id)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 text-muted-foreground text-sm">
        Loading categories…
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-foreground">Categories</h1>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="text-primary font-medium">Dashboards</span>
          <ChevronRight className="size-3" />
          <span className="text-foreground font-medium">Categories</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Total Categories", value: categories.length, color: "text-violet-400" },
          { label: "Total Products", value: categories.reduce((a, c) => a + c.products, 0), color: "text-cyan-400" },
          { label: "Most Products", value: categories.length ? Math.max(...categories.map(c => c.products)) : 0, color: "text-emerald-400" },
          { label: "Least Products", value: categories.length ? Math.min(...categories.map(c => c.products)) : 0, color: "text-amber-400" },
        ].map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-3">
            <p className="text-xs text-muted-foreground">{s.label}</p>
            <p className={`text-2xl font-bold mt-1 ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex justify-end">
        <button
          onClick={() => { setEditingId(null); setForm({ name: "", description: "", image: "" }); setShowModal(true) }}
          className="flex items-center gap-2 h-9 px-4 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          <Plus className="size-4" />
          Add Category
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div key={cat.id} className="bg-card border border-border rounded-xl p-4 flex flex-col gap-3 hover:border-primary/40 transition-colors group">
            <div className="flex items-start justify-between">
              <div className="size-11 rounded-xl bg-muted flex items-center justify-center overflow-hidden">
                {cat.image ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                ) : (
                  <ImageIcon className="size-5 text-muted-foreground" />
                )}
              </div>
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => handleEdit(cat.id)}
                  className="p-1.5 rounded-md bg-blue-500/10 text-blue-400 hover:bg-blue-500/20"
                >
                  <Edit2 className="size-3" />
                </button>
                <button
                  onClick={() => handleDelete(cat.id)}
                  className="p-1.5 rounded-md bg-red-500/10 text-red-400 hover:bg-red-500/20"
                >
                  <Trash2 className="size-3" />
                </button>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">{cat.name}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">{cat.description}</p>
            </div>
            <div className="pt-2 border-t border-border">
              <p className="text-xs text-muted-foreground">
                <span className="text-foreground font-semibold">{cat.products}</span> Products
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowModal(false)} />
          <div className="relative bg-card rounded-2xl border border-border w-full max-w-sm p-6 shadow-2xl">
            <h2 className="text-base font-bold text-foreground mb-4">
              {editingId ? "Edit Category" : "Add New Category"}
            </h2>
            <div className="flex flex-col gap-3">
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Category Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Illustration"
                  className="w-full h-9 px-3 text-sm bg-muted rounded-lg border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Image URL</label>
                <input
                  type="text"
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  placeholder="/images/category-name.png"
                  className="w-full h-9 px-3 text-sm bg-muted rounded-lg border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Description</label>
                <input
                  type="text"
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="Short description"
                  className="w-full h-9 px-3 text-sm bg-muted rounded-lg border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="flex gap-3 mt-1">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 h-9 rounded-lg border border-border text-foreground text-sm hover:bg-muted"
                >
                  Cancel
                </button>
                <button
                  onClick={editingId ? handleSaveEdit : handleAdd}
                  className="flex-1 h-9 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90"
                >
                  {editingId ? "Save" : "Add"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
