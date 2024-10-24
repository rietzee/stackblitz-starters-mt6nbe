import { Metadata } from "next"
import { StatsCards } from "@/components/admin/dashboard/stats-cards"
import { SalesChart } from "@/components/admin/dashboard/sales-chart"

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard for managing the digital store",
}

export default function AdminDashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="space-y-4">
        <StatsCards />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <SalesChart />
        </div>
      </div>
    </div>
  )
}