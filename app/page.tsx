"use client"

import { LeftSidebar } from "@/components/left-sidebar"
import { RightSidebar } from "@/components/right-sidebar"
import { TabsContainer } from "@/components/tabs-container"
import { Navbar } from "@/components/navbar"
import { useState } from "react"
import { Posts } from "@/components/posts-list"

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
                onTabChange={(tab) => setActiveTab(tab)}
              />
              <Posts activeTab={activeTab} />
            </main>

            <RightSidebar communities={communities} />
          </div>
        </div>
      </div>
    </div>
  )
}

const communities = [
  { name: "Rust", color: "orange" },
  { name: "PSE", color: "green" },
  { name: "Javascript", color: "yellow" },
]

