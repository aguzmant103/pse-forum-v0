"use client"

import Link from "next/link"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Navbar() {
  return (
    <nav className="flex h-16 px-6 justify-between items-center border-b border-[#E4E4E7] bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-center w-[1392px] h-9 mx-6">
        <Link href="/" className="text-[#18181B] font-medium">
          PSE forum
        </Link>
        <div className="flex flex-col items-start gap-2 w-[486px]">
          <div className="relative w-full">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-[#71717A]" />
            <Input 
              placeholder="Search..." 
              className="w-full pl-8 h-9 bg-[#FAFAFA] border-[#E4E4E7]" 
            />
          </div>
        </div>
        <Avatar className="h-9 w-9">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="User avatar"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  )
} 