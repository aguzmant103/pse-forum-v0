"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Community {
  name: string
  color: string
}

interface ExploreGroupsCardProps {
  communities: Community[]
}

export function ExploreGroupsCard({ communities }: ExploreGroupsCardProps) {
  return (
    <div className="flex flex-col p-6 items-start gap-6 self-stretch rounded-xl border border-[#E4E4E7] bg-[#FAFAFA]">
      <h2 className="text-[12px] font-semibold leading-none text-[#3F3F46] font-sans">
        EXPLORE COMMUNITIES
      </h2>
      
      <div className="flex flex-col gap-4 w-full">
        {communities.map((community) => (
          <div key={community.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-[39px] h-[39px] rounded-full ${
                community.name === 'Rust' ? 'bg-orange-500' : 
                community.name === 'PSE' ? 'bg-green-600' : 
                'bg-yellow-500'
              }`} />
              <span className="text-[#18181B] text-sm">{community.name}</span>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              className="h-8 px-4 border-[#E4E4E7] text-[#18181B] hover:bg-[#F4F4F5]"
            >
              Join
            </Button>
          </div>
        ))}
      </div>

      <Link 
        href="/communities" 
        className="text-sm text-[#18181B] hover:underline"
      >
        Show more
      </Link>
    </div>
  )
} 