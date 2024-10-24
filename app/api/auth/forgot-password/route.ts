import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { generateResetToken } from '@/lib/auth'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      // Return success even if user doesn't exist for security
      return NextResponse.json({ message: 'If an account exists, a reset link has been sent' })
    }

    const token = await generateResetToken(email)

    // TODO: Send email with reset link
    // For now, just return the token
    return NextResponse.json({ token })
  } catch (error) {
    console.error('Forgot password error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}