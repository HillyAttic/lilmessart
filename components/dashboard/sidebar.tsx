"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Tag,
  ClipboardList,
  LogIn,
  LogOut,
  Zap,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navMain = [
  { label: "Ecommerce", href: "/admin", icon: ShoppingCart },
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Categories", href: "/admin/categories", icon: Tag },
  { label: "Orders", href: "/admin/orders", icon: ClipboardList },
]

const navAccount = [
  { label: "Login", href: "/admin/login", icon: LogIn },
  { label: "Logout", href: "/admin/logout", icon: LogOut },
]

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed lg:static z-30 flex flex-col w-56 min-h-screen shrink-0 bg-sidebar border-r border-sidebar-border transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-0 lg:overflow-hidden"
        )}
      >
        {/* Logo */}
        <div className="flex items-center justify-between h-14 px-5 border-b border-sidebar-border">
          <Link href="/admin" className="flex items-center gap-2">
            <span className="flex items-center justify-center size-7 rounded-md bg-primary">
              <Zap className="size-4 text-white fill-white" />
            </span>
            <span className="text-lg font-bold tracking-wide text-foreground">
              <span className="text-primary">y</span>nex
            </span>
          </Link>
          <button
            className="lg:hidden text-muted-foreground hover:text-foreground"
            onClick={onClose}
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-5">
          <div>
            <p className="px-2 mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Main
            </p>
            <ul className="flex flex-col gap-0.5">
              {navMain.map(({ label, href, icon: Icon }) => {
                const active = pathname === href || (href !== "/admin" && pathname.startsWith(href))
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        active
                          ? "bg-primary/15 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <Icon className="size-4 shrink-0" />
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <p className="px-2 mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Account
            </p>
            <ul className="flex flex-col gap-0.5">
              {navAccount.map(({ label, href, icon: Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                  >
                    <Icon className="size-4 shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>
    </>
  )
}
