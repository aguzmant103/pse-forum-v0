"use client"

import Link from "next/link"
import { LeftSidebar } from "@/components/left-sidebar"
import { RightSidebar } from "@/components/right-sidebar"
import { TabsContainer } from "@/components/tabs-container"
import { Navbar } from "@/components/navbar"
import { useState } from "react"

export default function ForumPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'community' | 'following'>('all')

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container grid grid-cols-[280px_1fr_280px] gap-6">
        <LeftSidebar />
        
        {/* Main Content */}
        <main className="flex flex-col">
          <TabsContainer 
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          {/* Forum Posts */}
          <div className="space-y-2 px-6 py-4">
            {posts.map((post) => (
              <div key={post.id} className="p-4 rounded-lg border bg-card">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center text-[12px] text-white">
                      {post.userInitial}
                    </div>
                    <span className="text-sm">{post.author}</span>
                    <span className="text-sm text-muted-foreground">·</span>
                    <Link href="/pse" className="text-sm text-muted-foreground hover:underline">PSE</Link>
                    <span className="text-sm text-muted-foreground">·</span>
                    <span className="text-sm text-muted-foreground">{post.time}</span>
                  </div>
                  {post.commentCount && (
                    <div className="px-2 py-1 rounded-md bg-muted text-sm">
                      {post.commentCount}
                    </div>
                  )}
                </div>
                <h3 className="mt-2 text-base font-medium">
                  <Link href={`/post/${post.id}`}>{post.title}</Link>
                </h3>
                <div className="mt-2 flex gap-2">
                  <div className="px-2 py-1 rounded-md bg-muted text-xs">Scalability</div>
                  <div className="px-2 py-1 rounded-md bg-muted text-xs">Postquantum</div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <RightSidebar communities={communities} />
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

