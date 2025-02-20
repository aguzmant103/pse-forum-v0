"use client"

import { formatDistanceToNow } from 'date-fns'

interface Comment {
  id: string
  content: string
  createdAt: Date
  author: {
    username: string
  }
}

interface CommentsProps {
  comments: Comment[]
}

export function Comments({ comments }: CommentsProps) {
  return (
    <div className="flex flex-col items-start gap-6 self-stretch p-3.5">
      {comments.map((comment) => (
        <div 
          key={comment.id}
          className="flex flex-col items-start self-stretch gap-2 p-4 border border-[#E4E4E7] rounded-md w-full"
        >
          {/* Top line: Avatar + Author + Date */}
          <div className="flex items-center gap-2 w-full">
            <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-white text-sm">
              {comment.author.username.charAt(0).toUpperCase()}
            </div>
            <span className="text-sm font-medium">{comment.author.username}</span>
            <span className="text-sm text-[#71717A]">·</span>
            <span className="text-sm text-[#71717A]">
              {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
            </span>
          </div>

          {/* Content */}
          <div className="text-[#18181B] text-sm">
            {comment.content}
          </div>

          {/* Bottom line: Reactions */}
          <div className="flex items-center gap-2 pt-2">
            <button className="text-sm text-[#71717A] hover:text-[#18181B] transition-colors">
              👍 Like
            </button>
            <button className="text-sm text-[#71717A] hover:text-[#18181B] transition-colors">
              💬 Reply
            </button>
          </div>
        </div>
      ))}
    </div>
  )
} 