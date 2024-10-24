import { prisma } from './prisma'
import { hash, compare } from 'bcryptjs'

export async function createUser(email: string, password: string, name: string) {
  const hashedPassword = await hash(password, 10)
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  })
  return user
}

export async function authenticateUser(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (!user) {
    return null
  }

  const isValid = await compare(password, user.password)
  if (!isValid) {
    return null
  }

  return user
}