"use client"

import { LeftSidebar } from "@/components/left-sidebar"
import { RightSidebar } from "@/components/right-sidebar"
import { TabsContainer } from "@/components/tabs-container"
import { Navbar } from "@/components/navbar"
import { useState } from "react"
import { PostCard } from "@/components/post-card"

export default function ForumPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'community' | 'following'>('all')

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="flex">
        <LeftSidebar />
        
        <div className="flex-1 container">
          <div className="grid grid-cols-[1fr_280px] gap-6">
            {/* Main Content */}
            <main className="flex flex-col">
              <TabsContainer 
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />

              {/* Forum Posts */}
              <div className="flex flex-col gap-2 px-6 py-4">
                {posts.map((post) => (
                  <PostCard
                    key={post.id}
                    post={{
                      id: post.id,
                      title: post.title,
                      author: {
                        name: post.author,
                        initial: post.userInitial,
                        avatarColor: 'bg-purple-600'
                      },
                      community: {
                        name: 'PSE',
                        href: '/pse'
                      },
                      timeAgo: post.time,
                      commentCount: post.commentCount,
                      tags: ['Scalability', 'Postquantum']
                    }}
                  />
                ))}
              </div>
            </main>

            <RightSidebar communities={communities} />
          </div>
        </div>
      </div>
    </div>
  )
}

const posts = [
  {
    id: 1,
    title: "Forum feature requests?",
    author: "Sam",
    userInitial: "S",
    time: "3 days ago",
    commentCount: 19,
  },
  {
    id: 2,
    title: "Password Manager doesn't track SignUp credentials",
    author: "CPerez2",
    userInitial: "C",
    time: "3 days ago",
    commentCount: 3,
  },
  {
    id: 3,
    title: "Upi Payment Exploration",
    author: "vikasrushi",
    userInitial: "V",
    time: "3 days ago",
    commentCount: 4,
  },
  // Add more posts as needed
]

const communities = [
  { name: "Rust", color: "orange" },
  { name: "PSE", color: "green" },
  { name: "Javascript", color: "yellow" },
]

