import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Shirt, Gift, Watch } from "lucide-react"

const products = [
  { name: "Ethnic School bag for children (24L)", category: "Bags", stock: "In Stock", sales: "5,093", icon: ShoppingBag, stockUp: true },
  { name: "Leather jacket for men (S,M,L,XL)", category: "Clothing", stock: "In Stock", sales: "6,890", icon: Shirt, stockUp: true },
  { name: "Childrens Teddy toy of high quality", category: "Toys", stock: "Out Of Stock", sales: "5,423", icon: Gift, stockUp: false },
  { name: "Orange smart watch with square dial (24mm)", category: "Fashion", stock: "Out Of Stock", sales: "10,234", icon: Watch, stockUp: false },
]

export default function TopSellingProducts() {
  return (
    <div className="bg-card rounded-xl border border-border p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-primary border-l-2 border-primary pl-2 mb-3">
        Top Selling Products
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-2 text-left text-xs text-muted-foreground font-medium w-8">S.no</th>
              <th className="pb-2 text-left text-xs text-muted-foreground font-medium">Product Name</th>
              <th className="pb-2 text-left text-xs text-muted-foreground font-medium">Category</th>
              <th className="pb-2 text-left text-xs text-muted-foreground font-medium">Stock</th>
              <th className="pb-2 text-right text-xs text-muted-foreground font-medium">Total Sales</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={p.name} className="border-b border-border/50 last:border-0">
                <td className="py-3 text-muted-foreground text-xs">{i + 1}</td>
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <div className="size-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
                      <p.icon className="size-4 text-muted-foreground" />
                    </div>
                    <span className="text-xs font-medium text-foreground">{p.name}</span>
                  </div>
                </td>
                <td className="py-3 text-xs text-muted-foreground">{p.category}</td>
                <td className="py-3">
                  <Badge
                    variant="secondary"
                    className={`text-[10px] px-2 py-0.5 ${
                      p.stockUp
                        ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/20"
                        : "bg-red-500/15 text-red-400 border-red-500/20"
                    }`}
                  >
                    {p.stock}
                  </Badge>
                </td>
                <td className="py-3 text-right text-xs font-semibold text-foreground">{p.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
