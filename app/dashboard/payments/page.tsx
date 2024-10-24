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

export default function PaymentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Payment History</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>TRX-001</TableCell>
            <TableCell>2024-01-15</TableCell>
            <TableCell>$199.99</TableCell>
            <TableCell>
              <Badge variant="default">Completed</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>TRX-002</TableCell>
            <TableCell>2024-01-10</TableCell>
            <TableCell>$99.99</TableCell>
            <TableCell>
              <Badge variant="default">Completed</Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}