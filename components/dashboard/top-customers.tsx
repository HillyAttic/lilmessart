const customers = [
  { name: "Emma Wilson", purchases: 15, amount: "$1,835", avatar: "EW", color: "bg-violet-500" },
  { name: "Robert Lewis", purchases: 18, amount: "$2,415", avatar: "RL", color: "bg-cyan-500" },
  { name: "Angelina Hose", purchases: 21, amount: "$2,341", avatar: "AH", color: "bg-emerald-500" },
  { name: "Samantha Sam", purchases: 24, amount: "2,624", avatar: "SS", color: "bg-amber-500" },
]

export default function TopCustomers() {
  return (
    <div className="bg-card rounded-xl border border-border p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary border-l-2 border-primary pl-2">
          Top Customers
        </p>
        <button className="text-[11px] text-primary hover:underline">View All ›</button>
      </div>

      <ul className="flex flex-col gap-3">
        {customers.map((c) => (
          <li key={c.name} className="flex items-center gap-3">
            <div className={`size-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 ${c.color}`}>
              {c.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-foreground truncate">{c.name}</p>
              <p className="text-[10px] text-muted-foreground">{c.purchases} Purchases</p>
            </div>
            <span className="text-xs font-bold text-foreground">{c.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
