'use client'

import { PostCard } from "@/components/post-card"
import { useEffect, useState } from "react"
import { getPosts } from "@/app/actions/posts"

export function Posts({ activeTab }: { activeTab: string }) {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    getPosts(activeTab).then(setPosts)
  }, [activeTab])

  return (
    <div className="flex flex-col gap-2 px-6 py-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
} 