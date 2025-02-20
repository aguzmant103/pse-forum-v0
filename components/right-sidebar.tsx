"use client"

import { ExploreGroupsCard } from "@/components/explore-groups-card"

interface Community {
  name: string
  color: string
}

interface RightSidebarProps {
  communities: Community[]
}

export function RightSidebar({ communities }: RightSidebarProps) {
  return (
    <aside className="flex flex-col gap-6 p-6">
      <ExploreGroupsCard communities={communities} />
      
      <div className="flex flex-col p-6 gap-6 rounded-xl border border-[#E4E4E7] bg-[#FFFFFF]">
        <h2 className="text-sm font-semibold">ACTIVE USERS</h2>
        {/* Active users content */}
      </div>
    </aside>
  )
} 