"use client"

import { Button } from "@/components/ui/button"

interface Community {
  name: string
  color: string
}

interface RightSidebarProps {
  communities: Community[]
}

export function RightSidebar({ communities }: RightSidebarProps) {
  return (
    <aside className="space-y-4">
      <div className="rounded-lg border bg-card p-4">
        <h2 className="text-sm font-medium mb-4">EXPLORE COMMUNITIES</h2>
        <div className="space-y-2">
          {communities.map((community) => (
            <div key={community.name} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full ${
                  community.name === 'Rust' ? 'bg-orange-500' : 
                  community.name === 'PSE' ? 'bg-green-600' : 
                  'bg-yellow-500'
                }`} />
                <span className="text-sm">{community.name}</span>
              </div>
              <Button variant="outline" size="sm">Join</Button>
            </div>
          ))}
          <Button variant="link" size="sm" className="text-sm">
            Show more
          </Button>
        </div>
      </div>
      
      <div className="rounded-lg border bg-card p-4">
        <h2 className="text-sm font-medium mb-4">ACTIVE USERS</h2>
        {/* Active users content */}
      </div>
    </aside>
  )
} 