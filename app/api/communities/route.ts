// GET /api/communities (list) 
import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { handleApiRoute } from '@/lib/api-middleware'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const page = Number(searchParams.get('page')) || 1
  const limit = Number(searchParams.get('limit')) || 10
  let total = 0

  return handleApiRoute(async () => {
    const [communities, count] = await Promise.all([
      prisma.community.findMany({
        skip: (page - 1) * limit,
        take: limit,
        select: {
          id: true,
          name: true,
          description: true,
          isGated: true,
          createdAt: true,
        },
      }),
      prisma.community.count(),
    ])
    total = count

    return { communities, total }
  }, {
    pagination: { page, limit, total }
  })
} 