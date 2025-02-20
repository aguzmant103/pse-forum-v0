"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface PostCardProps {
  post: {
    id: number
    title: string
    author: {
      name: string
      initial: string
      avatarColor: string
    }
    community: {
      name: string
      href: string
    }
    timeAgo: string
    commentCount?: number
    tags: string[]
  }
}

export function PostCard({ post }: PostCardProps) {
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
            <div className={`w-5 h-5 rounded-full ${post.author.avatarColor} flex items-center justify-center text-[12px] text-white`}>
              {post.author.initial}
            </div>
            <span className="text-sm">{post.author.name}</span>
            <span className="text-sm text-[#71717A]">·</span>
            <span 
              onClick={(e) => {
                e.preventDefault()
                window.location.href = post.community.href
              }}
              className="text-sm text-[#71717A] hover:underline cursor-pointer"
            >
              {post.community.name}
            </span>
            <span className="text-sm text-[#71717A]">·</span>
            <span className="text-sm text-[#71717A]">{post.timeAgo}</span>
            {post.commentCount && (
              <div className="ml-auto px-2 py-1 rounded-md bg-[#FAFAFA] text-sm">
                {post.commentCount}
              </div>
            )}
          </div>

          {/* Credentials Section */}
          <div className="flex items-center gap-1.5 self-stretch">
            {post.tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary"
                className="px-2 py-1 bg-[#FAFAFA] text-xs border-[#E4E4E7] text-[#18181B]"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
} 