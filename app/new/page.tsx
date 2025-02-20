"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link as Search } from "lucide-react"
import Link from "next/link"
import { LeftSidebar } from "@/components/left-sidebar"
import { RightSidebar } from "@/components/right-sidebar"

const communities = [
  { name: "Rust", color: "orange" },
  { name: "PSE", color: "green" },
  { name: "Javascript", color: "yellow" },
]

export default function NewPostPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="text-xl font-semibold">
            PSE forum
          </Link>
          <div className="flex-1 px-8">
            <div className="flex w-full max-w-sm items-center">
              <Search className="mr-2 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-full" />
            </div>
          </div>
          <Avatar>
            <AvatarImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PSE_Forum-Cdi4F9BZzsbjfHP6g1ZcBxjobdX4YT.png"
              alt="User avatar"
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <div className="container grid grid-cols-[220px_1fr_280px] gap-6 py-4">
        <LeftSidebar />
        
        {/* Main Content */}
        <main className="p-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">New Post</h2>

            <Tabs defaultValue="new-post">
              <TabsList>
                <TabsTrigger value="new-post">New Post</TabsTrigger>
                <TabsTrigger value="drafts">Drafts</TabsTrigger>
              </TabsList>
              <TabsContent value="new-post" className="space-y-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Community" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pse">PSE</SelectItem>
                    <SelectItem value="rust">Rust</SelectItem>
                  </SelectContent>
                </Select>

                <div className="space-y-2">
                  <Input placeholder="Title" className="text-lg" />
                  <div className="text-xs text-muted-foreground text-right">0/200</div>
                </div>

                <Button variant="outline" className="text-sm">
                  + Add Tags
                </Button>

                <div className="min-h-[200px] rounded-md border p-4">
                  <p className="text-muted-foreground">Have something on your mind? Write it here!</p>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button variant="outline">Save Draft</Button>
                  <Button>Post</Button>
                </div>
              </TabsContent>
              <TabsContent value="drafts">
                <div className="text-center py-8 text-muted-foreground">
                  No drafts found
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>

        <RightSidebar communities={communities} />
      </div>
    </div>
  )
} 