"use client"

import Link from "next/link"
import { formatDistanceToNow } from 'date-fns'

interface Post {
  id: string
  title: string
  content: string
  author: {
    username: string
  }
  community: {
    name: string
  }
  createdAt: Date
  _count?: {
    comments: number
  }
}

export function PostCard({ post }: { post: Post }) {
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })
  const userInitial = post.author.username.charAt(0).toUpperCase()
  const commentCount = post._count?.comments ?? 0

  return (
    <Link href={`/post/${post.id}`}>
      <div className="flex min-w-[85px] p-3.5 items-start gap-4 rounded-md border border-[#E4E4E7] bg-white hover:bg-[#F4F4F5] transition-colors w-full">
        <div className="flex flex-col gap-2.5 w-full">
          {/* Title Section */}
          <div className="flex flex-col items-start gap-1.5 self-stretch">
            <h3 className="self-stretch text-[18px] font-semibold leading-[28px] text-[#09090B] font-sans">
              {post.title}
            </h3>
          </div>

          {/* Author Section */}
          <div className="flex items-center gap-1 self-stretch">
            <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center text-[12px] text-white">
              {userInitial}
            </div>
            <span className="text-sm">{post.author.username}</span>
            <span className="text-sm text-[#71717A]">·</span>
            <Link 
              href={`/communities/${post.community.name.toLowerCase()}`}
              className="text-sm text-[#71717A] hover:underline cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              {post.community.name}
            </Link>
            <span className="text-sm text-[#71717A]">·</span>
            <span className="text-sm text-[#71717A]">{timeAgo}</span>
            {commentCount > 0 && (
              <div className="ml-auto px-2 py-1 rounded-md bg-[#FAFAFA] text-sm">
                {commentCount}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
} 