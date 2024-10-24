"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Search } from "lucide-react"

export default function InventoryPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">License Inventory</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add License Keys
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search licenses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>License Key</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Assigned To</TableHead>
            <TableHead>Purchase Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Windows 11 Pro</TableCell>
            <TableCell>XXXXX-XXXXX-XXXXX-XXXXX</TableCell>
            <TableCell>
              <Badge>Available</Badge>
            </TableCell>
            <TableCell>-</TableCell>
            <TableCell>-</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="sm">Assign</Button>
              <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Office 365</TableCell>
            <TableCell>XXXXX-XXXXX-XXXXX-XXXXX</TableCell>
            <TableCell>
              <Badge variant="secondary">Used</Badge>
            </TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell>2024-01-15</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="sm">View</Button>
              <Button variant="ghost" size="sm" className="text-destructive">Revoke</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}