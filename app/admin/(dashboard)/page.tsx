import StatsCards from "@/components/dashboard/stats-cards"
import EarningsChart from "@/components/dashboard/earnings-chart"
import RecentOrders from "@/components/dashboard/recent-orders"
import TopSellingProducts from "@/components/dashboard/top-selling-products"
import PromoBanner from "@/components/dashboard/promo-banner"
import OrdersSection from "@/components/dashboard/orders-section"
import TopCountries from "@/components/dashboard/top-countries"
import TopCustomers from "@/components/dashboard/top-customers"
import ProductsOverview from "@/components/dashboard/products-overview"
import { ChevronRight } from "lucide-react"

export default function EcommercePage() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-foreground">Ecommerce</h1>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="text-primary font-medium">Dashboards</span>
          <ChevronRight className="size-3" />
          <span className="text-foreground font-medium">Ecommerce</span>
        </div>
      </div>

      {/* Row 1: Stats + Earnings */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-2">
          <StatsCards />
        </div>
        <div className="lg:col-span-3">
          <EarningsChart />
        </div>
      </div>

      {/* Row 2: Promo + Recent Orders + Top Selling */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="md:col-span-1 lg:col-span-2">
          <PromoBanner />
        </div>
        <div className="md:col-span-1 lg:col-span-1">
          <RecentOrders />
        </div>
        <div className="md:col-span-2 lg:col-span-2">
          <TopSellingProducts />
        </div>
      </div>

      {/* Row 3: Orders + Top Countries + Top Customers */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-2">
          <OrdersSection />
        </div>
        <div className="lg:col-span-2">
          <TopCountries />
        </div>
        <div className="lg:col-span-1">
          <TopCustomers />
        </div>
      </div>

      {/* Row 4: Products Overview */}
      <ProductsOverview />

      {/* Footer */}
      <footer className="text-center text-[11px] text-muted-foreground py-2">
        Copyright &copy; 2026 <span className="text-primary font-semibold">Ynex</span>. Designed with ♥ by{" "}
        <a href="#" className="text-primary hover:underline">Spruko</a> All rights reserved
      </footer>
    </div>
  )
}
