import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { handleApiRoute } from '@/lib/api-middleware'
import { ApiError } from '@/types/api'

export async function POST(request: NextRequest) {
  return handleApiRoute(async () => {
    const body = await request.json()
    const { targetId, targetType, reactionType } = body

    if (!targetId || !targetType || !reactionType) {
      throw new ApiError('INVALID_INPUT', 'Missing required fields', 400)
    }

    // TODO: Get userId from auth session
    // Keep userId declaration as it will be used when implementing reactions table
    const userId = 'temp-user-id' // eslint-disable-line @typescript-eslint/no-unused-vars

    // Validate target exists based on type
    switch (targetType) {
      case 'post': {
        const post = await prisma.post.findUnique({
          where: { id: targetId }
        })
        if (!post) {
          throw new ApiError('TARGET_NOT_FOUND', 'Post not found', 404)
        }
        break
      }
      case 'comment': {
        const comment = await prisma.comment.findUnique({
          where: { id: targetId }
        })
        if (!comment) {
          throw new ApiError('TARGET_NOT_FOUND', 'Comment not found', 404)
        }
        break
      }
      default:
        throw new ApiError('INVALID_TARGET_TYPE', 'Invalid target type', 400)
    }

    // TODO: Implement reaction logic once we have the reactions table
    // For now just return success
    return { success: true }
  })
} 