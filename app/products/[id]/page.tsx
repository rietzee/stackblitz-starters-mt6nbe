import { Button } from '@/components/ui/button'
import { ProductDetails } from '@/components/products/product-details'
import { AddToCartButton } from '@/components/products/add-to-cart-button'

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetails id={params.id} />
    </div>
  )
}