"use client"

import { useState } from "react"
import { BibleVerseBox } from "@/components/bible-verse-box"
import { VerseDisplay } from "@/components/verse-display"
import { bibleVerses } from "@/lib/bible-verses"

export default function Home() {
  const [selectedVerse, setSelectedVerse] = useState<{
    id: number
    text: string
    reference: string
    color: string
  } | null>(null)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-sky-300 to-neutral-100">
      <h1 className="mb-8 text-4xl font-bold text-gray-800">Bible Verse Picker</h1>
      <div className="w-full max-w-md">
        <BibleVerseBox verses={bibleVerses} onSelectVerse={setSelectedVerse} />
      </div>
      {selectedVerse && <VerseDisplay verse={selectedVerse} onClose={() => setSelectedVerse(null)} />}
    </main>
  )
}
