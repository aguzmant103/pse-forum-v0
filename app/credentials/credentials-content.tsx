"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CredentialsContent() {
  const [showAddCredential, setShowAddCredential] = useState(false)
  const [selectedType, setSelectedType] = useState<string>("")

  const credentials = [
    {
      id: 1,
      user: "Mari",
      avatar: "https://example.com/avatar.jpg",
    },
    // Add more credentials as needed
  ]

  const showVerificationOptions = ["Age", "Residency", "Genre"].includes(selectedType)

  return (
    <div className="flex-1 container mx-6 py-6">
      <h1 className="text-2xl font-bold mb-6">Credentials</h1>

      <div className="space-y-4">
        {credentials.map((credential) => (
          <div key={credential.id} className="flex items-center gap-4 p-4 rounded-md border bg-white">
            <Avatar>
              <AvatarImage src={credential.avatar} alt={`${credential.user}'s avatar`} />
              <AvatarFallback>{credential.user.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-lg">{credential.user}</span>
          </div>
        ))}
      </div>

      <Button className="mt-6" onClick={() => setShowAddCredential(true)}>
        Add Credential
      </Button>

      {showAddCredential && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
          <div className="w-1/3 bg-white p-6 border-l shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Add Credentials</h2>
              <button 
                onClick={() => {
                  setShowAddCredential(false)
                  setSelectedType("")
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <Select
                value={selectedType}
                onValueChange={setSelectedType}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Type of Credential" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Age">Age</SelectItem>
                  <SelectItem value="Residency">Residency</SelectItem>
                  <SelectItem value="Genre">Genre</SelectItem>
                  <SelectItem value="Email">Email</SelectItem>
                </SelectContent>
              </Select>

              {showVerificationOptions && (
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Choose verification method:</p>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="w-full">
                      Anon Aadhaar
                    </Button>
                    <Button variant="outline" className="w-full">
                      Open Passport
                    </Button>
                  </div>
                </div>
              )}

              {selectedType === "Email" && (
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Verify your email:</p>
                  <Button variant="outline" className="w-full">
                    Connect Email
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 