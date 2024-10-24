import { NextResponse } from 'next/server'
import { resetPassword } from '@/lib/auth'

export async function POST(req: Request) {
  try {
    const { token, newPassword } = await req.json()

    await resetPassword(token, newPassword)

    return NextResponse.json({ message: 'Password reset successfully' })
  } catch (error) {
    console.error('Reset password error:', error)
    return NextResponse.json(
      { error: 'Invalid or expired reset token' },
      { status: 400 }
    )
  }
}