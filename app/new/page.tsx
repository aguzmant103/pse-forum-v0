"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LeftSidebar } from "@/components/left-sidebar"
import { Navbar } from "@/components/navbar"

export default function NewPostPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="flex">
        <LeftSidebar />
        
        <div className="flex-1">
          <div className="max-w-[784px] mx-auto px-6">
            <div className="py-6">
              <h2 className="text-2xl font-bold mb-6">New Post</h2>

              <Tabs defaultValue="new-post" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="new-post">New Post</TabsTrigger>
                  <TabsTrigger value="drafts">Drafts</TabsTrigger>
                </TabsList>
                
                <TabsContent value="new-post" className="space-y-6">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Community" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pse">PSE</SelectItem>
                      <SelectItem value="rust">Rust</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="space-y-1">
                    <Input 
                      placeholder="Title" 
                      className="text-lg"
                      required
                    />
                    <div className="flex justify-end">
                      <span className="text-xs text-muted-foreground">0/200</span>
                    </div>
                  </div>

                  <Button variant="outline" className="text-sm">
                    + Add Tags
                  </Button>

                  <div className="min-h-[200px] rounded-md border p-4">
                    <p className="text-muted-foreground">Have something on your mind? Write it here!</p>
                  </div>

                  <div className="flex justify-end gap-2">
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
          </div>
        </div>
      </div>
    </div>
  )
} 