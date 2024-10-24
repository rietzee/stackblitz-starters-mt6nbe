"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function LicensesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Licenses</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>License Key</TableHead>
            <TableHead>Purchase Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Windows 11 Pro</TableCell>
            <TableCell>XXXXX-XXXXX-XXXXX-XXXXX</TableCell>
            <TableCell>2024-01-15</TableCell>
            <TableCell>
              <Badge>Active</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Office 365</TableCell>
            <TableCell>XXXXX-XXXXX-XXXXX-XXXXX</TableCell>
            <TableCell>2024-01-10</TableCell>
            <TableCell>
              <Badge>Active</Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}