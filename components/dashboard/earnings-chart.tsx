"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"
import { MoreHorizontal } from "lucide-react"

const data = [
  { month: "Jan", firstHalf: 40, topGross: 30, secondHalf: 20 },
  { month: "Feb", firstHalf: 60, topGross: 45, secondHalf: 35 },
  { month: "Mar", firstHalf: 55, topGross: 40, secondHalf: 30 },
  { month: "Apr", firstHalf: 70, topGross: 55, secondHalf: 45 },
  { month: "May", firstHalf: 110, topGross: 90, secondHalf: 60 },
  { month: "Jun", firstHalf: 75, topGross: 55, secondHalf: 40 },
  { month: "Jul", firstHalf: 30, topGross: 20, secondHalf: 15 },
  { month: "Aug", firstHalf: 25, topGross: 18, secondHalf: 12 },
  { month: "Sep", firstHalf: 28, topGross: 20, secondHalf: 14 },
  { month: "Oct", firstHalf: 22, topGross: 16, secondHalf: 10 },
  { month: "Nov", firstHalf: 18, topGross: 12, secondHalf: 8 },
  { month: "Dec", firstHalf: 20, topGross: 14, secondHalf: 10 },
]

export default function EarningsChart() {
  return (
    <div className="bg-card rounded-xl border border-border p-4 h-full">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary border-l-2 border-primary pl-2">
            Earnings
          </p>
        </div>
        <button className="text-xs text-primary hover:underline text-[11px]">View All ›</button>
      </div>

      {/* Metrics row */}
      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="size-2 rounded-full bg-violet-500 inline-block" />
            <span className="text-[11px] text-muted-foreground">First Half</span>
          </div>
          <p className="text-base font-bold text-foreground">$51.94k</p>
          <span className="text-[10px] text-emerald-400 font-semibold">+0.9%</span>
        </div>
        <div>
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="size-2 rounded-full bg-cyan-400 inline-block" />
            <span className="text-[11px] text-muted-foreground">Top Gross</span>
          </div>
          <p className="text-base font-bold text-foreground">$18.32k</p>
          <span className="text-[10px] text-emerald-400 font-semibold">+0.39%</span>
        </div>
        <div>
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="size-2 rounded-full bg-slate-400 inline-block" />
            <span className="text-[11px] text-muted-foreground">Second Half</span>
          </div>
          <p className="text-base font-bold text-foreground">$38k</p>
          <span className="text-[10px] text-red-400 font-semibold">-0.15%</span>
        </div>
        <button className="ml-auto self-start text-muted-foreground hover:text-foreground">
          <MoreHorizontal className="size-4" />
        </button>
      </div>

      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={data} barSize={6} barGap={2}>
          <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.05)" />
          <XAxis
            dataKey="month"
            tick={{ fill: "#8a93b0", fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#8a93b0", fontSize: 10 }}
            axisLine={false}
            tickLine={false}
            width={28}
          />
          <Tooltip
            contentStyle={{ background: "#2a2d45", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 11 }}
            labelStyle={{ color: "#e2e8f0" }}
            cursor={{ fill: "rgba(255,255,255,0.03)" }}
          />
          <Bar dataKey="firstHalf" fill="#845adf" radius={[3, 3, 0, 0]} />
          <Bar dataKey="topGross" fill="#845adf" radius={[3, 3, 0, 0]} opacity={0.5} />
          <Bar dataKey="secondHalf" fill="#8a93b0" radius={[3, 3, 0, 0]} opacity={0.4} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
