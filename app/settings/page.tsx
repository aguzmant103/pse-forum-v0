"use client"

import { LeftSidebar } from "@/components/left-sidebar"
import { Navbar } from "@/components/navbar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="flex">
        <LeftSidebar />

        <div className="flex-1 container max-w-[784px] mx-auto px-6 py-6">
          <h1 className="text-2xl font-bold mb-6">Settings</h1>

          {/* Avatar Section */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Your avatar</h2>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                {/* Avatar placeholder */}
              </div>
              <div>
                <Input type="file" className="mb-2" />
                <Button>Upload</Button>
              </div>
            </div>
          </section>

          {/* Basic Information Section */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Basic information</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <Input placeholder="Username" className="flex-1" />
                <Input placeholder="URL" className="flex-1" />
              </div>
              <Input placeholder="About" />
              <div className="flex gap-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Default Home Page" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Communities/All</SelectItem>
                    <SelectItem value="following">Following</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button>Save</Button>
            </div>
          </section>

          {/* Change Password Section */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Change password</h2>
            <div className="space-y-4">
              <Input placeholder="Old Password" type="password" />
              <Input placeholder="New Password" type="password" />
              <Input placeholder="Re-enter Password" type="password" />
              <Button>Save</Button>
            </div>
          </section>

          {/* Recovery Code Section */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Recovery code</h2>
            <div className="space-y-4">
              <Input placeholder="Password" type="password" />
              <Button>Generate recovery code</Button>
            </div>
          </section>

          {/* Open Sessions Section */}
          <section>
            <h2 className="text-lg font-semibold mb-4">Open sessions</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>67785jE6_kzpGR4tci28f7QEkECEm</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Current</span>
                  <Button variant="outline">Sign Out</Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 