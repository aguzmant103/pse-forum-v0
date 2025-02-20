import { LeftSidebar } from "@/components/left-sidebar"
import { Navbar } from "@/components/navbar"
import { CredentialsContent } from "./credentials-content"

export default function CredentialsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <CredentialsContent />
      </div>
    </div>
  )
} 