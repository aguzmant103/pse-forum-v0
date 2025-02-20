"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LogOut, Settings } from "lucide-react"
import { HomeIcon, CredentialsIcon, NotificationsIcon } from "@/components/icons"

export function LeftSidebar() {
  return (
    <aside className="flex flex-col w-[280px] min-h-[calc(100vh-64px)] px-6 justify-between items-center bg-[#FAFAFA] flex-shrink-0 border-r border-[#E4E4E7]">
      <div className="flex flex-col gap-6 self-stretch pt-6">
        <nav className="flex flex-col gap-1">
          <Link href="/">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-[14px] leading-[20px] font-medium text-[#71717A] hover:text-[#18181B] font-sans"
            >
              <HomeIcon className="mr-2 h-4 w-4" />
              Home
            </Button>
          </Link>
          <Link href="/credentials">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-[14px] leading-[20px] font-medium text-[#71717A] hover:text-[#18181B] font-sans"
            >
              <CredentialsIcon className="mr-2 h-4 w-4" />
              My Credentials
            </Button>
          </Link>
          <Link href="/notifications">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-[14px] leading-[20px] font-medium text-[#71717A] hover:text-[#18181B] font-sans"
            >
              <NotificationsIcon className="mr-2 h-4 w-4" />
              Notifications
              <span className="ml-auto bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                1
              </span>
            </Button>
          </Link>
        </nav>

        <div className="flex flex-col gap-4 self-stretch">
          <div className="h-[1px] bg-[#E5E7EB] w-[207.502px] mx-auto" />
          <div className="space-y-2">
            <h2 className="text-[10px] font-semibold text-[#71717A] tracking-[0.8px] leading-4 overflow-hidden text-ellipsis px-3 font-sans">
              MY COMMUNITIES
            </h2>
            <div className="flex flex-col gap-1">
              <Link href="/pse">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-[14px] leading-[14px] font-semibold text-[#3F3F46] hover:text-[#18181B] font-sans overflow-hidden text-ellipsis"
                >
                  <span className="mr-2 h-4 w-4 rounded-full bg-emerald-600" />
                  PSE
                </Button>
              </Link>
              <Link href="/rust">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-[14px] leading-[14px] font-semibold text-[#3F3F46] hover:text-[#18181B] font-sans overflow-hidden text-ellipsis"
                >
                  <span className="mr-2 h-4 w-4 rounded-full bg-orange-400" />
                  Rust
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1 self-stretch pb-6">
        <Link href="/settings">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-[14px] leading-[20px] font-medium text-[#71717A] hover:text-[#18181B] font-sans"
          >
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </Link>
        <Link href="/sign-out">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-[14px] leading-[20px] font-medium text-[#71717A] hover:text-[#18181B] font-sans"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </Link>
      </div>
    </aside>
  )
} 