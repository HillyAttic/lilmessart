import { ChevronRight } from "lucide-react"
import StatsCards from "@/components/dashboard/stats-cards"
import EarningsChart from "@/components/dashboard/earnings-chart"
import OrdersSection from "@/components/dashboard/orders-section"
import TopCustomers from "@/components/dashboard/top-customers"
import TopCountries from "@/components/dashboard/top-countries"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-foreground">Dashboard</h1>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="text-primary font-medium">Dashboards</span>
          <ChevronRight className="size-3" />
          <span className="text-foreground font-medium">Dashboard</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-2">
          <StatsCards />
        </div>
        <div className="lg:col-span-3">
          <EarningsChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <OrdersSection />
        </div>
        <div className="flex flex-col gap-4">
          <TopCountries />
          <TopCustomers />
        </div>
      </div>
    </div>
  )
}
