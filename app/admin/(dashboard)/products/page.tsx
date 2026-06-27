"use client"

import { useState } from "react"
import { Plus, Search, Edit2, Trash2, ChevronRight } from "lucide-react"
import AddProductModal from "@/components/dashboard/add-product-modal"
import EditProductModal from "@/components/dashboard/edit-product-modal"
import { useStore } from "@/lib/store-context"
import type { Product } from "@/lib/data-types"

const statusStyle: Record<string, string> = {
  "Available": "text-emerald-400 bg-emerald-400/10",
  "Not Available": "text-red-400 bg-red-400/10",
  "Limited Deal": "text-amber-400 bg-amber-400/10",
  "In Offer": "text-cyan-400 bg-cyan-400/10",
}

export default function ProductsPage() {
  const { products, loading, addProduct, updateProduct, deleteProduct } = useStore()
  const [search, setSearch] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  )

  const handleAdd = (product: Product) => {
    addProduct(product)
    setShowModal(false)
  }

  const handleDelete = (id: string) => {
    deleteProduct(id)
  }

  const handleEdit = (product: Product) => {
    updateProduct(product)
    setEditingProduct(null)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 text-muted-foreground text-sm">
        Loading products…
      </div>
    )
  }

  return (
    <div className="space-y-5">
      {/* Breadcrumb */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-foreground">Products</h1>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="text-primary font-medium">Dashboards</span>
          <ChevronRight className="size-3" />
          <span className="text-foreground font-medium">Products</span>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div className="relative flex items-center">
          <Search className="absolute left-3 size-3.5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-9 pl-9 pr-4 text-sm bg-card rounded-lg border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary w-64"
          />
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 h-9 px-4 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          <Plus className="size-4" />
          Add Product
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Total Products", value: products.length, color: "text-violet-400" },
          { label: "Available", value: products.filter(p => p.status === "Available").length, color: "text-emerald-400" },
          { label: "Out of Stock", value: products.filter(p => p.stock === 0).length, color: "text-red-400" },
          { label: "Limited / Offer", value: products.filter(p => ["Limited Deal","In Offer"].includes(p.status)).length, color: "text-amber-400" },
        ].map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-3">
            <p className="text-xs text-muted-foreground">{s.label}</p>
            <p className={`text-2xl font-bold mt-1 ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                {["Product", "Category", "Price", "Stock", "Status", "Actions"].map((h) => (
                  <th key={h} className="py-3 px-4 text-left text-xs text-muted-foreground font-medium whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="size-9 rounded-lg bg-muted flex items-center justify-center text-xs font-bold text-primary shrink-0 overflow-hidden">
                        {p.image ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                        ) : (
                          p.name[0]
                        )}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground">{p.name}</p>
                        <p className="text-[10px] text-muted-foreground">{p.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-xs text-muted-foreground">{p.category}</td>
                  <td className="py-3 px-4 text-xs font-semibold text-foreground">{p.price}</td>
                  <td className="py-3 px-4 text-xs text-foreground">{p.stock}</td>
                  <td className="py-3 px-4">
                    <span className={`text-[10px] font-semibold px-2 py-1 rounded-sm whitespace-nowrap ${statusStyle[p.status] ?? ""}`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setEditingProduct(p)}
                        className="p-1.5 rounded-md bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
                      >
                        <Edit2 className="size-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(p.id)}
                        className="p-1.5 rounded-md bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                      >
                        <Trash2 className="size-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-10 text-center text-muted-foreground text-sm">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <AddProductModal onClose={() => setShowModal(false)} onAdd={handleAdd} />
      )}

      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onSave={handleEdit}
        />
      )}
    </div>
  )
}
