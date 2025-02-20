// GET /api/posts (list with filters)
// POST /api/posts (create) 

import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { handleApiRoute } from '@/lib/api-middleware'
import { ApiError } from '@/types/api'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const page = Number(searchParams.get('page')) || 1
  const limit = Number(searchParams.get('limit')) || 10
  const communityId = searchParams.get('community_id')
  const visibility = searchParams.get('visibility')
  let total = 0

  return handleApiRoute(async () => {
    const [posts, count] = await Promise.all([
      prisma.post.findMany({
        skip: (page - 1) * limit,
        take: limit,
        where: {
          ...(communityId && { communityId }),
          ...(visibility && { visibility }),
        },
        select: {
          id: true,
          title: true,
          content: true,
          visibility: true,
          createdAt: true,
          author: {
            select: { id: true, username: true }
          },
          community: {
            select: { id: true, name: true }
          }
        },
      }),
      prisma.post.count({
        where: {
          ...(communityId && { communityId }),
          ...(visibility && { visibility }),
        },
      })
    ])
    total = count

    return { posts, total }
  }, {
    pagination: { page, limit, total }
  })
}

export async function POST(request: NextRequest) {
  return handleApiRoute(async () => {
    const body = await request.json()
    const { title, content, communityId, visibility = 'public' } = body

    if (!title || !content || !communityId) {
      throw new ApiError('INVALID_INPUT', 'Missing required fields', 400)
    }

    // TODO: Get authorId from auth session
    const authorId = 'temp-author-id'

    const post = await prisma.post.create({
      data: {
        title,
        content,
        communityId,
        authorId,
        visibility,
      },
      select: {
        id: true,
        title: true,
        content: true,
        visibility: true,
        createdAt: true,
        author: {
          select: { id: true, username: true }
        },
        community: {
          select: { id: true, name: true }
        }
      },
    })

    return post
  })
} 