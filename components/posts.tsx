import { PostCard } from "@/components/post-card"
import { prisma } from "@/lib/prisma"

export async function Posts({ activeTab }: { activeTab: string }) {
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

  return (
    <div className="flex flex-col gap-2 px-6 py-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
} 