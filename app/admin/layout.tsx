import { AdminSidebar } from "@/components/admin/layout/sidebar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <div className="hidden md:flex w-64 flex-col fixed inset-y-0">
        <AdminSidebar />
      </div>
      <div className="md:pl-64 flex-1">
        <main>{children}</main>
      </div>
    </div>
  )
}