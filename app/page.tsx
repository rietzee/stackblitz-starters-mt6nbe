import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Star, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Premium Software Licenses at Your Fingertips
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Get instant access to genuine software licenses from top providers
          </p>
          <Button asChild size="lg">
            <Link href="/products">
              Browse Products <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <Zap className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Instant Delivery</h3>
              <p className="text-muted-foreground">
                Get your license keys immediately after purchase
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Shield className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">100% Genuine</h3>
              <p className="text-muted-foreground">
                All licenses are authentic and verified
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Star className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                Expert assistance whenever you need it
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}