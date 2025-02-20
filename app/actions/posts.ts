'use server'

import { prisma } from '@/lib/prisma'

export async function getPosts(activeTab: string) {
  const posts = await prisma.post.findMany({
    where: {
      ...(activeTab === 'community' && { communityId: 'pse-community-id' }),
    },
    include: {
      author: true,
      community: true,
      _count: {
        select: { comments: true }
      }
    },
    orderBy: { createdAt: 'desc' }
  })
  return posts
} 