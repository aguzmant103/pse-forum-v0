"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ThumbsUp, MessageSquare, MoreVertical } from "lucide-react"

interface Comment {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string
  likes: number
  replies: number
  timestamp: string
}

interface CommentThreadProps {
  comments: Comment[]
}

export function CommentThread({ comments }: CommentThreadProps) {
  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <Card key={comment.id}>
          <CardHeader className="flex flex-row items-center space-x-4 p-4">
            <Avatar>
              <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
              <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h4 className="font-semibold">{comment.author.name}</h4>
              <p className="text-sm text-muted-foreground">{comment.timestamp}</p>
            </div>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-sm">{comment.content}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <ThumbsUp className="mr-2 h-4 w-4" />
                {comment.likes}
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <MessageSquare className="mr-2 h-4 w-4" />
                {comment.replies}
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

