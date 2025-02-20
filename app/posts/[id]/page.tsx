import { prisma } from "@/lib/prisma"
import { PostCard } from "@/components/post-card"
import { Comments } from "@/components/comments"

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: { id: params.id },
    include: {
      author: true,
      community: true,
      comments: {
        include: { author: true }
      }
    }
  })

  if (!post) return <div>Post not found</div>

  return (
    <div>
      <PostCard post={post} />
      <Comments comments={post.comments} />
    </div>
  )
} 