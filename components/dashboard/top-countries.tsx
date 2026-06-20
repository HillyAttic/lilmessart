import { TrendingUp, TrendingDown } from "lucide-react"

const countries = [
  { name: "France", flag: "🇫🇷", sales: "5,932", up: true },
  { name: "Spain", flag: "🇪🇸", sales: "5,383", up: false },
  { name: "Argentina", flag: "🇦🇷", sales: "4,825", up: true },
  { name: "UAE", flag: "🇦🇪", sales: "4,527", up: true },
  { name: "Germany", flag: "🇩🇪", sales: "4,501", up: false },
]

export default function TopCountries() {
  return (
    <div className="bg-card rounded-xl border border-border p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary border-l-2 border-primary pl-2">
          Top Countries By Sales
        </p>
        <button className="size-6 rounded bg-muted flex items-center justify-center text-muted-foreground text-xs">
          &#x2B1B;
        </button>
      </div>

      <div className="mb-4">
        <p className="text-2xl font-bold text-foreground">38,256</p>
        <div className="flex items-center gap-1 mt-0.5">
          <span className="text-emerald-400 text-[11px] font-semibold">12.34%</span>
          <span className="text-muted-foreground text-[11px]">Since last week</span>
        </div>
      </div>

      <ul className="flex flex-col gap-2.5">
        {countries.map((c) => (
          <li key={c.name} className="flex items-center gap-3">
            <span className="text-base leading-none">{c.flag}</span>
            <span className="flex-1 text-xs text-foreground">{c.name}</span>
            {c.up
              ? <TrendingUp className="size-3.5 text-emerald-400" />
              : <TrendingDown className="size-3.5 text-red-400" />
            }
            <span className="text-xs font-semibold text-foreground w-10 text-right">{c.sales}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
