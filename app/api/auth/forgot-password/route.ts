import { NextApiRequest, NextApiResponse } from 'next'
import { sign } from 'jsonwebtoken'
import { authenticateUser } from '@/lib/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body

  // Validate and sanitize input
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' })
  }

  // Authenticate user
  const user = await authenticateUser(email, password)
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' })
  }

  // Generate token
  const token = sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' })

  // Set token in HttpOnly cookie
  res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=3600`)
  res.status(200).json({ message: 'Sign in successful' })
}