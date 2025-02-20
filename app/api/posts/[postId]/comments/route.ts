// GET /api/posts/:postId/comments
// POST /api/posts/:postId/comments 

import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { handleApiRoute } from '@/lib/api-middleware'
import { ApiError } from '@/types/api'

export async function GET(
  request: NextRequest,
  { params }: { params: { postId: string } }
) {
  const searchParams = request.nextUrl.searchParams
  const page = Number(searchParams.get('page')) || 1
  const limit = Number(searchParams.get('limit')) || 10
  let total = 0

  return handleApiRoute(async () => {
    const [comments, count] = await Promise.all([
      prisma.comment.findMany({
        where: { postId: params.postId },
        skip: (page - 1) * limit,
        take: limit,
        select: {
          id: true,
          content: true,
          createdAt: true,
          parentCommentId: true,
          author: {
            select: { id: true, username: true }
          }
        },
        orderBy: { createdAt: 'desc' }
      }),
      prisma.comment.count({
        where: { postId: params.postId }
      })
    ])
    total = count

    return { comments, total }
  }, {
    pagination: { page, limit, total }
  })
}

export async function POST(
  request: NextRequest,
  { params }: { params: { postId: string } }
) {
  return handleApiRoute(async () => {
    const body = await request.json()
    const { content, parentCommentId } = body

    if (!content) {
      throw new ApiError('INVALID_INPUT', 'Content is required', 400)
    }

    // TODO: Get authorId from auth session
    const authorId = 'temp-author-id'

    // Verify post exists
    const post = await prisma.post.findUnique({
      where: { id: params.postId }
    })

    if (!post) {
      throw new ApiError('POST_NOT_FOUND', 'Post not found', 404)
    }

    // If parent comment provided, verify it exists and belongs to same post
    if (parentCommentId) {
      const parentComment = await prisma.comment.findUnique({
        where: { id: parentCommentId }
      })

      if (!parentComment || parentComment.postId !== params.postId) {
        throw new ApiError('INVALID_PARENT_COMMENT', 'Invalid parent comment', 400)
      }
    }

    const comment = await prisma.comment.create({
      data: {
        content,
        authorId,
        postId: params.postId,
        ...(parentCommentId && { parentCommentId })
      },
      select: {
        id: true,
        content: true,
        createdAt: true,
        parentCommentId: true,
        author: {
          select: { id: true, username: true }
        }
      }
    })

    return comment
  })
} 