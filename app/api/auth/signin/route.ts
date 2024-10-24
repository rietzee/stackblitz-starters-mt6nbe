import { NextResponse } from 'next/server'
import { sign } from 'jsonwebtoken'
import { authenticateUser } from '@/lib/auth' // Adjust the import path as necessary

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    // Validate and sanitize input
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }

    // Authenticate user (example)
    const user = await authenticateUser(email, password)
    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // Generate token
    const token = sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' })

    // Set token in HttpOnly cookie
    const response = NextResponse.json({ message: 'Sign in successful' }, { status: 200 })
    response.headers.set('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=3600`)
    return response
  } catch (error) {
    console.error('Sign in error:', error)
    return NextResponse.json({ error: 'Internal server error', details: error.message }, { status: 500 })
  }
}