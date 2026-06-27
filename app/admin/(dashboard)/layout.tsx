"use client"

import Sidebar from "@/components/dashboard/sidebar"
import Header from "@/components/dashboard/header"
import { useState } from "react"
import { StoreProvider } from "@/lib/store-context"

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <StoreProvider>
      <div className="dark flex h-screen overflow-hidden bg-background">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            {children}
          </main>
        </div>
      </div>
    </StoreProvider>
  )
}
