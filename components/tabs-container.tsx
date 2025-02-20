"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

interface TabsContainerProps {
  activeTab: 'all' | 'community' | 'following'
  onTabChange: (tab: 'all' | 'community' | 'following') => void
}

export function TabsContainer({ activeTab, onTabChange }: TabsContainerProps) {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b">
      <div className="flex items-center gap-6">
        <Button 
          variant="ghost" 
          className={`text-sm font-medium ${activeTab === 'all' ? 'text-primary' : 'text-muted-foreground'}`}
          onClick={() => onTabChange('all')}
        >
          All
        </Button>
        <Button 
          variant="ghost" 
          className={`text-sm font-medium ${activeTab === 'community' ? 'text-primary' : 'text-muted-foreground'}`}
          onClick={() => onTabChange('community')}
        >
          My Community Posts
        </Button>
        <Button 
          variant="ghost" 
          className={`text-sm font-medium ${activeTab === 'following' ? 'text-primary' : 'text-muted-foreground'}`}
          onClick={() => onTabChange('following')}
        >
          Following
        </Button>
      </div>
      <Link href="/new">
        <Button 
          className="h-8 px-3 flex items-center justify-center gap-2 rounded-md bg-[#18181B] text-white hover:bg-[#18181B]/90"
        >
          <span>+</span>
          <span>New Post</span>
        </Button>
      </Link>
    </div>
  )
} 