import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default async function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample blog posts - replace with actual data from your database */}
        <Link href="/blog/getting-started">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started with Software Licenses</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Learn everything you need to know about software licensing and how to make the most of your purchases.
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}