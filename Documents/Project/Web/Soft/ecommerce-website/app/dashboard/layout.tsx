import { DashboardSidebar } from "@/components/dashboard/layout/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <div className="hidden md:flex w-64 flex-col fixed inset-y-0">
        <DashboardSidebar />
      </div>
      <div className="md:pl-64 flex-1">
        <main>{children}</main>
      </div>
    </div>
  )
}