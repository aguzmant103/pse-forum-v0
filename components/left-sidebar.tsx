"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bell, Home, Link as LinkIcon, LogOut, Settings } from "lucide-react"

export function LeftSidebar() {
  return (
    <aside className="w-64 border-r min-h-[calc(100vh-3.5rem)] p-4 space-y-4">
      <nav className="space-y-2">
        <Link href="/">
          <Button variant="ghost" className="w-full justify-start">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
        </Link>
        <Link href="/credentials">
          <Button variant="ghost" className="w-full justify-start">
            <LinkIcon className="mr-2 h-4 w-4" />
            My Credentials
          </Button>
        </Link>
        <Link href="/notifications">
          <Button variant="ghost" className="w-full justify-start">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
            <span className="ml-auto bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
              1
            </span>
          </Button>
        </Link>
      </nav>

      <div className="space-y-2">
        <h2 className="text-xs font-semibold text-muted-foreground tracking-wider">MY COMMUNITIES</h2>
        <Link href="/pse">
          <Button variant="ghost" className="w-full justify-start">
            <span className="mr-2 h-4 w-4 rounded-full bg-emerald-600" />
            PSE
          </Button>
        </Link>
        <Link href="/rust">
          <Button variant="ghost" className="w-full justify-start">
            <span className="mr-2 h-4 w-4 rounded-full bg-orange-400" />
            Rust
          </Button>
        </Link>
      </div>

      <div className="fixed bottom-4 space-y-2 w-[200px]">
        <Link href="/settings">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </Link>
        <Link href="/sign-out">
          <Button variant="ghost" className="w-full justify-start">
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </Link>
      </div>
    </aside>
  )
} 