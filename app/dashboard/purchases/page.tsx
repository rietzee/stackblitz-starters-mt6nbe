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

export default function PurchasesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Purchase History</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>ORD-001</TableCell>
            <TableCell>Windows 11 Pro</TableCell>
            <TableCell>2024-01-15</TableCell>
            <TableCell>$199.99</TableCell>
            <TableCell>
              <Badge>Completed</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>ORD-002</TableCell>
            <TableCell>Office 365</TableCell>
            <TableCell>2024-01-10</TableCell>
            <TableCell>$99.99</TableCell>
            <TableCell>
              <Badge>Completed</Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}