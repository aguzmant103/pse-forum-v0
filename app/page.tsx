import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LeftSidebar } from "@/components/left-sidebar"
import { RightSidebar } from "@/components/right-sidebar"

export default function ForumPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex items-center h-14">
          <Link href="/" className="font-medium">
            PSE forum
          </Link>
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="w-full pl-8" />
            </div>
          </div>
        </div>
      </header>

      <div className="container grid grid-cols-[220px_1fr_280px] gap-6">
        <LeftSidebar />
        
        {/* Main Content */}
        <main className="space-y-4">
          {/* Filter Container */}
          <div className="border-b pb-2">
            <div className="flex items-center pl-6">
              <div className="flex space-x-4">
                <Button variant="ghost" className="text-sm font-medium">All</Button>
                <Button variant="ghost" className="text-sm font-medium">My Community Posts</Button>
                <Button variant="ghost" className="text-sm font-medium">Following</Button>
              </div>
              <div className="ml-auto pr-6">
                <Link href="/new">
                  <Button variant="default" size="sm">+ New Post</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Forum Posts */}
          <div className="space-y-2 px-6">
            {posts.map((post) => (
              <div key={post.id} className="p-4 rounded-lg border bg-card">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center text-[12px] text-white">
                      {post.userInitial}
                    </div>
                    <span className="text-sm">{post.author}</span>
                    <span className="text-sm text-muted-foreground">·</span>
                    <Link href="/pse" className="text-sm text-muted-foreground hover:underline">PSE</Link>
                    <span className="text-sm text-muted-foreground">·</span>
                    <span className="text-sm text-muted-foreground">{post.time}</span>
                  </div>
                  {post.commentCount && (
                    <div className="px-2 py-1 rounded-md bg-muted text-sm">
                      {post.commentCount}
                    </div>
                  )}
                </div>
                <h3 className="mt-2 text-base font-medium">
                  <Link href={`/post/${post.id}`}>{post.title}</Link>
                </h3>
                <div className="mt-2 flex gap-2">
                  <div className="px-2 py-1 rounded-md bg-muted text-xs">Scalability</div>
                  <div className="px-2 py-1 rounded-md bg-muted text-xs">Postquantum</div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <RightSidebar communities={communities} />
      </div>
    </div>
  )
}

const posts = [
  {
    id: 1,
    title: "Forum feature requests?",
    author: "Sam",
    userInitial: "S",
    time: "3 days ago",
    commentCount: 19,
  },
  {
    id: 2,
    title: "Password Manager doesn't track SignUp credentials",
    author: "CPerez2",
    userInitial: "C",
    time: "3 days ago",
    commentCount: 3,
  },
  {
    id: 3,
    title: "Upi Payment Exploration",
    author: "vikasrushi",
    userInitial: "V",
    time: "3 days ago",
    commentCount: 4,
  },
  // Add more posts as needed
]

const communities = [
  { name: "Rust", color: "orange" },
  { name: "PSE", color: "green" },
  { name: "Javascript", color: "yellow" },
]

