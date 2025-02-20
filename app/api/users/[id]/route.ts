// GET /api/users/:id 
import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { handleApiRoute } from '@/lib/api-middleware'
import { ApiError } from '@/types/api'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return handleApiRoute(async () => {
    const user = await prisma.user.findUnique({
      where: { id: params.id },
      select: {
        id: true,
        username: true,
        publicKey: true,
        createdAt: true,
      },
    })

    if (!user) {
      throw new ApiError('USER_NOT_FOUND', 'User not found', 404)
    }

    return user
  })
} 