"use client"

import { useState } from "react"
import { motion } from "framer-motion"

type Verse = {
  id: number
  text: string
  reference: string
  color: string
}

type BibleVerseBoxProps = {
  verses: Verse[]
  onSelectVerse: (verse: Verse) => void
}

export function BibleVerseBox({ verses, onSelectVerse }: BibleVerseBoxProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  // Group verses by color
  const yellowVerses = verses.filter((verse) => verse.color === "yellow")
  const pinkVerses = verses.filter((verse) => verse.color === "pink")
  const blueVerses = verses.filter((verse) => verse.color === "blue")

  const handleCardClick = (verse: Verse) => {
    onSelectVerse(verse)
  }

  return (
    <div className="relative mx-auto">
      {/* Box container */}
      <div className="relative bg-amber-100 border-2 border-amber-300 rounded-md p-4 shadow-md">
        {/* Yellow cards section */}
        <div className="mb-2">
          {yellowVerses.map((verse, index) => (
            <motion.div
              key={verse.id}
              className="h-1 bg-yellow-400 mb-0.5 rounded-sm cursor-pointer"
              style={{
                zIndex: hoveredCard === verse.id ? 10 : index,
                transformOrigin: "top",
              }}
              whileHover={{
                scaleX:1.07,
                backgroundColor: "#FBBF24",
              }}
              onHoverStart={() => setHoveredCard(verse.id)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => handleCardClick(verse)}
            />
          ))}
        </div>

        {/* Pink cards section */}
        <div className="mb-2">
          {pinkVerses.map((verse, index) => (
            <motion.div
              key={verse.id}
              className="h-1 bg-pink-400 mb-0.5 rounded-sm cursor-pointer"
              style={{
                zIndex: hoveredCard === verse.id ? 10 : index,
                transformOrigin: "top",
              }}
              whileHover={{
                scaleX: 1.07,
                backgroundColor: "#F472B6",
              }}
              onHoverStart={() => setHoveredCard(verse.id)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => handleCardClick(verse)}
            />
          ))}
        </div>

        {/* Blue cards section */}
        <div>
          {blueVerses.map((verse, index) => (
            <motion.div
              key={verse.id}
              className="h-1 bg-blue-200 mb-0.5 rounded-sm cursor-pointer"
              style={{
                zIndex: hoveredCard === verse.id ? 10 : index,
                transformOrigin: "top",
              }}
              whileHover={{
                scaleX: 1.07,
                backgroundColor: "#93C5FD",
              }}
              onHoverStart={() => setHoveredCard(verse.id)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => handleCardClick(verse)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
