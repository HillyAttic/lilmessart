"use client"

import { useState } from "react"
import { Search, SlidersHorizontal } from "lucide-react"

const products = [
  { name: "Niker College Bag", id: "#1734-9743", price: "$199.99", status: "Available", statusColor: "text-emerald-400 bg-emerald-400/10", sales: "3,903", revenue: "$67,899.24" },
  { name: "Dslr Camera (50mm f/1.9 HRM Lens)", id: "#1234-4567", price: "$1,299.99", status: "Available", statusColor: "text-emerald-400 bg-emerald-400/10", sales: "12,435", revenue: "$3,24,781.92" },
  { name: "Outdoor Bomber Jacket", id: "#1902-9883", price: "$99.99", status: "Not Available", statusColor: "text-red-400 bg-red-400/10", sales: "5,143", revenue: "$76,102.76" },
  { name: "Light Blue Teddy", id: "#8745-1232", price: "$79.00", status: "Limited Deal", statusColor: "text-amber-400 bg-amber-400/10", sales: "7,183", revenue: "$78,211.83" },
  { name: "Orange Smart Watch (24mm)", id: "#1962-9033", price: "$199.99", status: "In Offer", statusColor: "text-cyan-400 bg-cyan-400/10", sales: "10,287", revenue: "$2,32,982.99" },
]

export default function ProductsOverview() {
  const [search, setSearch] = useState("")

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="bg-card rounded-xl border border-border p-4">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary border-l-2 border-primary pl-2">
          Products Overview
        </p>
        <div className="flex items-center gap-2">
          <div className="relative hidden sm:flex items-center">
            <Search className="absolute left-2.5 size-3 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-7 pl-8 pr-3 text-[11px] bg-muted rounded-md border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary w-40"
            />
          </div>
          <button className="flex items-center gap-1.5 h-7 px-3 rounded-md bg-primary text-white text-[11px] font-medium">
            <SlidersHorizontal className="size-3" />
            Sort By
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              {["Name", "Product Id", "Price", "Status", "Sales", "Revenue"].map((h) => (
                <th key={h} className="pb-2 text-left text-xs text-muted-foreground font-medium whitespace-nowrap pr-4">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id} className="border-b border-border/50 last:border-0 hover:bg-muted/30 transition-colors">
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-2">
                    <div className="size-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
                      <span className="text-[10px] font-bold text-muted-foreground">{p.name[0]}</span>
                    </div>
                    <span className="text-xs font-medium text-foreground whitespace-nowrap">{p.name}</span>
                  </div>
                </td>
                <td className="py-3 pr-4 text-xs text-muted-foreground whitespace-nowrap">{p.id}</td>
                <td className="py-3 pr-4 text-xs font-medium text-foreground whitespace-nowrap">{p.price}</td>
                <td className="py-3 pr-4">
                  <span className={`text-[10px] font-semibold px-2 py-1 rounded-sm whitespace-nowrap ${p.statusColor}`}>
                    {p.status}
                  </span>
                </td>
                <td className="py-3 pr-4 text-xs text-foreground">{p.sales}</td>
                <td className="py-3 text-xs font-semibold text-foreground whitespace-nowrap">{p.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
        <p className="text-[11px] text-muted-foreground flex items-center gap-1.5">
          Showing 5 Entries
          <span className="inline-block size-3 border border-muted-foreground rounded-sm" />
        </p>
        <div className="flex items-center gap-1">
          <button className="h-6 px-2 text-[11px] text-muted-foreground hover:text-foreground">Prev</button>
          <button className="size-6 rounded-md bg-primary text-white text-[11px] font-bold flex items-center justify-center">1</button>
          <button className="size-6 rounded-md bg-muted text-muted-foreground text-[11px] hover:bg-muted/80 flex items-center justify-center">2</button>
          <button className="h-6 px-2 text-[11px] text-muted-foreground hover:text-foreground">next</button>
        </div>
      </div>
    </div>
  )
}
