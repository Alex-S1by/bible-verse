"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type VersePopupProps = {
  verse: {
    id: number
    text: string
    reference: string
  }
  onClose: () => void
}

export function VersePopup({ verse, onClose }: VersePopupProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === "Escape") {
        onClose()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <Card className="w-full max-w-lg transform transition-all duration-500 ease-in-out">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-bold">{verse.reference}</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{verse.text}</p>
         
        </CardContent>
      </Card>
    </div>
  )
}
