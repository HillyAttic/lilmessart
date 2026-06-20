"use client"

import { useState } from "react"
import { ChevronRight, Package } from "lucide-react"
import { cn } from "@/lib/utils"

const tabs = ["Active Orders", "Completed", "Cancelled"] as const
type Tab = typeof tabs[number]

const orders = [
  { name: "Amanda Nanes", price: "$229.99", date: "24 May 2022", avatar: "AN" },
  { name: "Peter Parkour", price: "$135.29", date: "18 May 2022", avatar: "PP" },
  { name: "Jackie Chen", price: "$1,299.99", date: "29 May 2022", avatar: "JC" },
  { name: "Ryan Garcia", price: "$249.29", date: "05 Jun 2022", avatar: "RG" },
  { name: "Hugh Jackma", price: "$499.99", date: "15 May 2022", avatar: "HJ" },
]

const avatarColors = [
  "bg-violet-500",
  "bg-cyan-500",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-rose-500",
]

export default function OrdersSection() {
  const [active, setActive] = useState<Tab>("Active Orders")

  return (
    <div className="bg-card rounded-xl border border-border p-4">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary border-l-2 border-primary pl-2">
          Orders
        </p>
        <div className="flex items-center gap-1">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={cn(
                "px-3 py-1 text-[11px] rounded-md font-medium transition-colors",
                active === t
                  ? "bg-primary text-white"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <ul className="flex flex-col divide-y divide-border">
        {orders.map((o, i) => (
          <li key={o.name} className="flex items-center gap-3 py-3">
            <div className={cn("size-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0", avatarColors[i])}>
              {o.avatar}
            </div>
            <div className="flex-1 min-w-0 grid grid-cols-2 sm:grid-cols-3 gap-1">
              <div>
                <p className="text-[10px] text-muted-foreground">Name</p>
                <p className="text-xs font-medium text-foreground">{o.name}</p>
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground">Price</p>
                <p className="text-xs font-semibold text-foreground">{o.price}</p>
              </div>
              <div className="hidden sm:block">
                <p className="text-[10px] text-muted-foreground">Delivery Date</p>
                <p className="text-xs text-foreground">{o.date}</p>
              </div>
            </div>
            <div className="size-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
              <Package className="size-4 text-muted-foreground" />
            </div>
            <button className="size-6 rounded-md bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground">
              <ChevronRight className="size-3.5" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
