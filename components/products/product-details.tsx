"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { useDispatch } from 'react-redux'
import { addItem } from '@/lib/features/cart/cartSlice'
import { Product } from '@/types/product'

export function ProductDetails({ id }: { id: string }) {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`/api/products/${id}`)
        const data = await response.json()
        setProduct(data)
      } catch (error) {
        console.error('Error fetching product:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!product) {
    return <div>Product not found</div>
  }

  const handleAddToCart = () => {
    dispatch(addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    }))
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`
    })
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-muted-foreground mb-4">{product.description}</p>
        <div className="text-3xl font-bold mb-6">${product.price}</div>
        <Button onClick={handleAddToCart} size="lg">Add to Cart</Button>
      </div>
      <div className="bg-muted p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">License Details</h2>
        <ul className="space-y-2">
          <li>✓ Instant delivery</li>
          <li>✓ Official license key</li>
          <li>✓ Lifetime validity</li>
          <li>✓ 24/7 support</li>
        </ul>
      </div>
    </div>
  )
}