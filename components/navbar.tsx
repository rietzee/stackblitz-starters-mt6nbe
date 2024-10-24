"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ShoppingCart, User } from 'lucide-react'
import { ModeToggle } from './mode-toggle'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'

export function Navbar() {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Digital Store
          </Link>

          <div className="flex items-center space-x-4">
            <ModeToggle />
            
            <Button variant="ghost" size="icon" asChild>
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground w-5 h-5 rounded-full text-xs flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild>
              <Link href="/auth/signin">
                <User className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}