"use client"

import { useState } from "react"
import { Search, ChevronRight, Eye, RefreshCw, X } from "lucide-react"
import { cn } from "@/lib/utils"

type OrderStatus = "Active" | "Completed" | "Cancelled" | "Pending"

interface Order {
  id: string
  customer: string
  avatar: string
  product: string
  date: string
  delivery: string
  amount: string
  status: OrderStatus
}

const initialOrders: Order[] = [
  { id: "#ORD-0001", customer: "Amanda Nanes", avatar: "AN", product: "Canvas Shoes", date: "15 May 2022", delivery: "24 May 2022", amount: "$229.99", status: "Active" },
  { id: "#ORD-0002", customer: "Peter Parkour", avatar: "PP", product: "Smart Watch", date: "10 May 2022", delivery: "18 May 2022", amount: "$135.29", status: "Completed" },
  { id: "#ORD-0003", customer: "Jackie Chen", avatar: "JC", product: "Dslr Camera", date: "21 May 2022", delivery: "29 May 2022", amount: "$1,299.99", status: "Active" },
  { id: "#ORD-0004", customer: "Ryan Garcia", avatar: "RG", product: "Bomber Jacket", date: "28 May 2022", delivery: "05 Jun 2022", amount: "$249.29", status: "Pending" },
  { id: "#ORD-0005", customer: "Hugh Jackma", avatar: "HJ", product: "College Bag", date: "08 May 2022", delivery: "15 May 2022", amount: "$499.99", status: "Cancelled" },
  { id: "#ORD-0006", customer: "Emma Wilson", avatar: "EW", product: "White Headphones", date: "12 May 2022", delivery: "20 May 2022", amount: "$79.49", status: "Completed" },
  { id: "#ORD-0007", customer: "Robert Lewis", avatar: "RL", product: "Photo Frame", date: "14 May 2022", delivery: "22 May 2022", amount: "$29.99", status: "Active" },
  { id: "#ORD-0008", customer: "Samantha Sam", avatar: "SS", product: "Light Blue Teddy", date: "17 May 2022", delivery: "25 May 2022", amount: "$79.00", status: "Pending" },
  { id: "#ORD-0009", customer: "Angelina Hose", avatar: "AH", product: "Smart Phone", date: "19 May 2022", delivery: "27 May 2022", amount: "$199.99", status: "Cancelled" },
  { id: "#ORD-0010", customer: "David Brown", avatar: "DB", product: "Orange Smart Watch", date: "02 Jun 2022", delivery: "10 Jun 2022", amount: "$199.99", status: "Active" },
]

const statusConfig: Record<OrderStatus, { label: string; cls: string }> = {
  Active:    { label: "Active",    cls: "text-emerald-400 bg-emerald-400/10" },
  Completed: { label: "Completed", cls: "text-blue-400 bg-blue-400/10" },
  Cancelled: { label: "Cancelled", cls: "text-red-400 bg-red-400/10" },
  Pending:   { label: "Pending",   cls: "text-amber-400 bg-amber-400/10" },
}

const avatarColors = [
  "bg-violet-500", "bg-cyan-500", "bg-emerald-500", "bg-amber-500",
  "bg-rose-500", "bg-blue-500", "bg-teal-500", "bg-orange-500", "bg-pink-500", "bg-indigo-500",
]

const filterTabs: Array<"All" | OrderStatus> = ["All", "Active", "Completed", "Pending", "Cancelled"]

export default function OrdersPage() {
  const [orders, setOrders] = useState(initialOrders)
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState<"All" | OrderStatus>("All")
  const [selected, setSelected] = useState<Order | null>(null)

  const filtered = orders.filter((o) => {
    const matchSearch = o.customer.toLowerCase().includes(search.toLowerCase()) ||
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.product.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter === "All" || o.status === filter
    return matchSearch && matchFilter
  })

  const updateStatus = (id: string, status: OrderStatus) => {
    setOrders((prev) => prev.map((o) => o.id === id ? { ...o, status } : o))
    setSelected(null)
  }

  const countByStatus = (s: OrderStatus) => orders.filter(o => o.status === s).length

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-foreground">Orders</h1>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="text-primary font-medium">Dashboards</span>
          <ChevronRight className="size-3" />
          <span className="text-foreground font-medium">Orders</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Total Orders", value: orders.length, color: "text-violet-400" },
          { label: "Active", value: countByStatus("Active"), color: "text-emerald-400" },
          { label: "Completed", value: countByStatus("Completed"), color: "text-blue-400" },
          { label: "Cancelled", value: countByStatus("Cancelled"), color: "text-red-400" },
        ].map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-3">
            <p className="text-xs text-muted-foreground">{s.label}</p>
            <p className={`text-2xl font-bold mt-1 ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div className="relative flex items-center">
          <Search className="absolute left-3 size-3.5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search orders..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-9 pl-9 pr-4 text-sm bg-card rounded-lg border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary w-64"
          />
        </div>
        <div className="flex items-center gap-1 bg-card border border-border rounded-lg p-1">
          {filterTabs.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={cn(
                "px-3 py-1 text-[11px] rounded-md font-medium transition-colors",
                filter === t ? "bg-primary text-white" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                {["Order ID", "Customer", "Product", "Order Date", "Delivery Date", "Amount", "Status", "Actions"].map((h) => (
                  <th key={h} className="py-3 px-4 text-left text-xs text-muted-foreground font-medium whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((o, i) => (
                <tr key={o.id} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
                  <td className="py-3 px-4 text-xs font-mono text-muted-foreground">{o.id}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className={cn("size-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0", avatarColors[i % avatarColors.length])}>
                        {o.avatar}
                      </div>
                      <span className="text-xs font-medium text-foreground whitespace-nowrap">{o.customer}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-xs text-muted-foreground whitespace-nowrap">{o.product}</td>
                  <td className="py-3 px-4 text-xs text-muted-foreground whitespace-nowrap">{o.date}</td>
                  <td className="py-3 px-4 text-xs text-muted-foreground whitespace-nowrap">{o.delivery}</td>
                  <td className="py-3 px-4 text-xs font-semibold text-foreground">{o.amount}</td>
                  <td className="py-3 px-4">
                    <span className={`text-[10px] font-semibold px-2 py-1 rounded-sm whitespace-nowrap ${statusConfig[o.status].cls}`}>
                      {o.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setSelected(o)}
                        className="p-1.5 rounded-md bg-violet-500/10 text-violet-400 hover:bg-violet-500/20"
                        title="View"
                      >
                        <Eye className="size-3.5" />
                      </button>
                      <button
                        onClick={() => updateStatus(o.id, "Completed")}
                        className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
                        title="Mark Completed"
                      >
                        <RefreshCw className="size-3.5" />
                      </button>
                      <button
                        onClick={() => updateStatus(o.id, "Cancelled")}
                        className="p-1.5 rounded-md bg-red-500/10 text-red-400 hover:bg-red-500/20"
                        title="Cancel"
                      >
                        <X className="size-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="py-10 text-center text-muted-foreground text-sm">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Detail Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setSelected(null)} />
          <div className="relative bg-card rounded-2xl border border-border w-full max-w-sm p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-foreground">Order Details</h2>
              <button onClick={() => setSelected(null)} className="text-muted-foreground hover:text-foreground">
                <X className="size-5" />
              </button>
            </div>
            <div className="flex flex-col gap-2.5 text-sm">
              {[
                ["Order ID", selected.id],
                ["Customer", selected.customer],
                ["Product", selected.product],
                ["Order Date", selected.date],
                ["Delivery Date", selected.delivery],
                ["Amount", selected.amount],
              ].map(([label, val]) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="text-muted-foreground text-xs">{label}</span>
                  <span className="text-xs font-semibold text-foreground">{val}</span>
                </div>
              ))}
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-xs">Status</span>
                <span className={`text-[10px] font-semibold px-2 py-1 rounded-sm ${statusConfig[selected.status].cls}`}>
                  {selected.status}
                </span>
              </div>
            </div>
            <div className="flex gap-2 mt-5">
              <button onClick={() => updateStatus(selected.id, "Completed")} className="flex-1 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 text-xs font-semibold hover:bg-emerald-500/30">
                Complete
              </button>
              <button onClick={() => updateStatus(selected.id, "Cancelled")} className="flex-1 h-8 rounded-lg bg-red-500/20 text-red-400 text-xs font-semibold hover:bg-red-500/30">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
