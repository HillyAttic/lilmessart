"use client"

import {
  Menu,
  Search,
  Bell,
  ShoppingCart,
  Settings,
  Sun,
  Globe,
  Grid3x3,
  Maximize2,
} from "lucide-react"

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="flex items-center justify-between h-14 px-4 border-b border-border bg-card shrink-0">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Menu className="size-5" />
        </button>
        <div className="relative hidden md:flex items-center">
          <Search className="absolute left-3 size-3.5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="h-8 pl-9 pr-4 text-sm bg-muted rounded-md border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary w-52"
          />
        </div>
      </div>

      <div className="flex items-center gap-1">
        {/* Language */}
        <button className="flex items-center gap-1.5 px-2 py-1.5 rounded-md hover:bg-muted text-muted-foreground text-xs">
          <Globe className="size-4" />
          <span className="hidden sm:block font-medium text-foreground">EN</span>
        </button>

        {/* Theme */}
        <button className="p-2 rounded-md hover:bg-muted text-muted-foreground">
          <Sun className="size-4" />
        </button>

        {/* Cart */}
        <button className="relative p-2 rounded-md hover:bg-muted text-muted-foreground">
          <ShoppingCart className="size-4" />
          <span className="absolute top-1 right-1 size-3.5 rounded-full bg-primary text-[9px] text-white flex items-center justify-center font-bold">3</span>
        </button>

        {/* Notifications */}
        <button className="relative p-2 rounded-md hover:bg-muted text-muted-foreground">
          <Bell className="size-4" />
          <span className="absolute top-1 right-1 size-3.5 rounded-full bg-destructive text-[9px] text-white flex items-center justify-center font-bold">1</span>
        </button>

        {/* Grid */}
        <button className="p-2 rounded-md hover:bg-muted text-muted-foreground hidden sm:block">
          <Grid3x3 className="size-4" />
        </button>

        {/* Fullscreen */}
        <button className="p-2 rounded-md hover:bg-muted text-muted-foreground hidden sm:block">
          <Maximize2 className="size-4" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 ml-1 pl-2 border-l border-border">
          <div className="size-8 rounded-full bg-primary flex items-center justify-center text-xs text-white font-bold">
            JT
          </div>
          <div className="hidden md:block">
            <p className="text-xs font-semibold text-foreground leading-tight">Jason Taylor</p>
            <p className="text-[10px] text-muted-foreground leading-tight">Web Designer</p>
          </div>
          <button className="p-1 text-muted-foreground hover:text-foreground">
            <Settings className="size-4" />
          </button>
        </div>
      </div>
    </header>
  )
}
