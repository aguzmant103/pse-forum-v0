import { LeftSidebar } from "@/components/left-sidebar"
import { RightSidebar } from "@/components/right-sidebar"
import { Navbar } from "@/components/navbar"
import { Badge } from "@/components/ui/badge"

interface PostDetailsPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function PostDetailsPage({ 
  params: paramsPromise 
}: PostDetailsPageProps) {
  // Await the params
  const params = await paramsPromise
  
  // Now we can safely use params.id
  const post = await getPost(params.id)

  const communities = [
    { name: "Rust", color: "orange" },
    { name: "PSE", color: "green" },
    { name: "Javascript", color: "yellow" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="flex">
        <LeftSidebar />
        
        <div className="flex-1 container">
          <div className="grid grid-cols-[1fr_280px] gap-6">
            <main className="flex flex-col py-6">
              {/* Post Content */}
              <div className="flex flex-col gap-6 p-6 rounded-md border border-[#E4E4E7] bg-white">
                {/* Author Info */}
                <div className="flex items-center gap-1">
                  <div className={`w-5 h-5 rounded-full ${post.author.avatarColor} flex items-center justify-center text-[12px] text-white`}>
                    {post.author.initial}
                  </div>
                  <span className="text-sm">{post.author.name}</span>
                  <span className="text-sm text-[#71717A]">·</span>
                  <span className="text-sm text-[#71717A]">{post.timeAgo}</span>
                </div>

                {/* Title */}
                <h1 className="text-[24px] font-semibold leading-[32px] text-[#09090B]">
                  {post.title}
                </h1>

                {/* Content */}
                <div className="text-[#18181B] whitespace-pre-wrap">
                  {post.content}
                </div>

                {/* Tags */}
                <div className="flex items-center gap-1.5">
                  {post.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className="px-2 py-1 bg-[#FAFAFA] text-xs border-[#E4E4E7] text-[#18181B]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-6">
                <h2 className="text-lg font-semibold mb-4">Comments ({post.commentCount})</h2>
                {/* Comments would go here */}
              </div>
            </main>

            <RightSidebar communities={communities} />
          </div>
        </div>
      </div>
    </div>
  )
}

// Simulated data fetching function
async function getPost(id: string) {
  // Add a small delay to simulate API call
  await new Promise(resolve => setTimeout(resolve, 100))
  
  return {
    id: parseInt(id),
    title: "Forum feature requests?",
    content: "What do people think? What would you like to see out of a forum?\n\n" +
      "• New Features: Ideas for new functionality?\n" +
      "• Enhancements: Improvements to existing features or tools?\n" +
      "• Integrations: Suggestions for integrating with other platforms or services?",
    author: {
      name: "Sam",
      initial: "S",
      avatarColor: "bg-purple-600"
    },
    community: {
      name: "PSE",
      href: "/pse"
    },
    timeAgo: "1 week ago",
    commentCount: 17,
    tags: ['Scalability', 'Postquantum']
  }
} 