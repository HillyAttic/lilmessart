import { Smartphone, Headphones, Watch, Camera, Frame, Footprints } from "lucide-react"

const orders = [
  { name: "Smart Phone", category: "Mobiles", price: "$199.99", icon: Smartphone, color: "bg-blue-500/20 text-blue-400" },
  { name: "White Headphones", category: "Music", price: "$79.49", icon: Headphones, color: "bg-emerald-500/20 text-emerald-400" },
  { name: "Stop Watch", category: "Electronics", price: "$49.29", icon: Watch, color: "bg-amber-500/20 text-amber-400" },
  { name: "Kikon Camera", category: "Electronics", price: "$1,699.00", icon: Camera, color: "bg-rose-500/20 text-rose-400", highlight: true },
  { name: "Photo Frame", category: "Furniture", price: "$29.99", icon: Frame, color: "bg-cyan-500/20 text-cyan-400" },
  { name: "Canvas Shoes", category: "Footwear", price: "$89.99", icon: Footprints, color: "bg-violet-500/20 text-violet-400" },
]

export default function RecentOrders() {
  return (
    <div className="bg-card rounded-xl border border-border p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary border-l-2 border-primary pl-2">
          Recent Orders
        </p>
        <button className="size-6 rounded bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground text-xs">
          &#x2B1B;
        </button>
      </div>
      <ul className="flex flex-col divide-y divide-border">
        {orders.map((o) => (
          <li key={o.name} className="flex items-center gap-3 py-2.5">
            <div className={`size-9 rounded-lg flex items-center justify-center shrink-0 ${o.color}`}>
              <o.icon className="size-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{o.name}</p>
              <p className="text-[11px] text-muted-foreground">{o.category}</p>
            </div>
            <span className={`text-sm font-semibold ${o.highlight ? "text-rose-400" : "text-emerald-400"}`}>
              {o.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
