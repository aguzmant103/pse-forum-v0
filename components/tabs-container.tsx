"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

interface TabsContainerProps {
  activeTab: 'all' | 'community' | 'following'
  onTabChange: (tab: 'all' | 'community' | 'following') => void
}

export function TabsContainer({ activeTab, onTabChange }: TabsContainerProps) {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-[#E4E4E7]">
      <div className="flex h-8 max-h-8 p-1 items-center rounded-lg bg-[#F4F4F5] backdrop-blur-[4px]">
        <Button 
          variant="ghost" 
          className={`flex justify-center items-center gap-2 h-auto
            ${activeTab === 'all' 
              ? 'bg-white text-[#18181B] px-3 py-1 rounded-md shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10),0px_1px_2px_0px_rgba(0,0,0,0.06)]' 
              : 'text-[#71717A]'}`}
          onClick={() => onTabChange('all')}
        >
          All
        </Button>
        <Button 
          variant="ghost" 
          className={`flex justify-center items-center gap-2 h-auto
            ${activeTab === 'community' 
              ? 'bg-white text-[#18181B] px-3 py-1 rounded-md shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10),0px_1px_2px_0px_rgba(0,0,0,0.06)]' 
              : 'text-[#71717A]'}`}
          onClick={() => onTabChange('community')}
        >
          My Community Posts
        </Button>
        <Button 
          variant="ghost" 
          className={`flex justify-center items-center gap-2 h-auto
            ${activeTab === 'following' 
              ? 'bg-white text-[#18181B] px-3 py-1 rounded-md shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10),0px_1px_2px_0px_rgba(0,0,0,0.06)]' 
              : 'text-[#71717A]'}`}
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