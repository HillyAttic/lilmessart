import { ShoppingBag, CreditCard, Users, ClipboardList } from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  {
    label: "Total Sales",
    value: "14,732",
    change: "+4.2%",
    up: true,
    icon: ShoppingBag,
    iconBg: "bg-violet-500/20",
    iconColor: "text-violet-400",
  },
  {
    label: "Total Expenses",
    value: "$28,346.00",
    change: "+12.0%",
    up: true,
    icon: CreditCard,
    iconBg: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
  },
  {
    label: "Total Visitors",
    value: "1,29,368",
    change: "-7.8%",
    up: false,
    icon: Users,
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    label: "Total Orders",
    value: "35,367",
    change: "+2.5%",
    up: true,
    icon: ClipboardList,
    iconBg: "bg-amber-500/20",
    iconColor: "text-amber-400",
  },
]

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-card rounded-xl p-4 border border-border flex items-start gap-4">
          <div className={cn("size-10 rounded-xl flex items-center justify-center shrink-0", s.iconBg)}>
            <s.icon className={cn("size-5", s.iconColor)} />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground mb-0.5">{s.label}</p>
            <p className="text-xl font-bold text-foreground leading-tight">{s.value}</p>
            <p className="text-[11px] text-muted-foreground mt-1">
              Increase by{" "}
              <span className={cn("font-semibold", s.up ? "text-emerald-400" : "text-red-400")}>
                {s.change}
              </span>{" "}
              this month
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
