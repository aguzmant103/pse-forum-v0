"use client"

import { LeftSidebar } from "@/components/left-sidebar"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      user: "Mari",
      avatar: "https://example.com/avatar.jpg",
      postTitle: "Improving Zero-Knowledge Protocols",
      comment: "Great insights! Have you considered how this could integrate with rollups?",
      time: "2 minutes ago",
      unread: true,
    },
    {
      id: 2,
      user: "Mari",
      avatar: "https://example.com/avatar.jpg",
      postTitle: "Improving Zero-Knowledge Protocols",
      comment: "Great insights! Have you considered how this could integrate with rollups?",
      time: "3 days ago",
      unread: false,
    },
    // Add more notifications as needed
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="flex">
        <LeftSidebar />

        <div className="flex-1 container mx-6 py-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Notifications</h1>
            <Button variant="outline">Mark all as read</Button>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Unread (1)</h2>
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex items-start gap-4 p-4 rounded-md border ${notification.unread ? 'bg-gray-100' : 'bg-white'}`}
              >
                <Avatar>
                  <AvatarImage src={notification.avatar} alt={`${notification.user}'s avatar`} />
                  <AvatarFallback>{notification.user.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm">
                    <strong>{notification.user}</strong> commented on your post{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                      {notification.postTitle}
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground">{notification.comment}</p>
                  <p className="text-xs text-muted-foreground">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 