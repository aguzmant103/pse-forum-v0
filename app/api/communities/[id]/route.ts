// GET /api/communities/:id (single) 
import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { handleApiRoute } from '@/lib/api-middleware'
import { ApiError } from '@/types/api'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return handleApiRoute(async () => {
    const community = await prisma.community.findUnique({
      where: { id: params.id },
      select: {
        id: true,
        name: true,
        description: true,
        isGated: true,
        createdAt: true,
      },
    })

    if (!community) {
      throw new ApiError('COMMUNITY_NOT_FOUND', 'Community not found', 404)
    }

    return community
  })
} 