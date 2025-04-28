"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"

type VerseDisplayProps = {
  verse: {
    id: number
    text: string
    reference: string
    color: string
  }
  onClose: () => void
}

export function VerseDisplay({ verse, onClose }: VerseDisplayProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === "Escape") {
        onClose()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  // Map color names to Tailwind classes
  const colorClasses = {
    yellow: "bg-yellow-100 border-yellow-400",
    pink: "bg-pink-100 border-pink-400",
    blue: "bg-blue-100 border-blue-400",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className={`w-full max-w-md p-6 rounded-lg shadow-lg ${colorClasses[verse.color as keyof typeof colorClasses]} border-2`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold">{verse.reference}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        <p className="text-lg">{verse.text}</p>
        
      </motion.div>
    </motion.div>
  )
}
