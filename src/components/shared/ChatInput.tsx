"use client"
import { FaImage, FaMicrophone, FaPhoneAlt } from "react-icons/fa"
import { Input } from "@/components/ui/input"
import chatStore from "@/store/chat.store"
import { useState } from "react"

const ChatInput = () => {
  const [msg, setMsg] = useState<string>("")
  const { sendMessage, addUserMessage, messages } = chatStore()
  const [showSuggestions, setShowSuggestions] = useState(false)

  const onSubmit = async () => {
    addUserMessage(msg)
    sendMessage(msg)
  }

  const handleSuggestionClick = async (question: any) => {
    setShowSuggestions(false)
    addUserMessage(question)
    await sendMessage(question)
  }

  return (
    <div className="relative w-full mt-12 flex flex-col items-center">
      <button
        className="text-gray-500 text-[12px] rounded-full px-4 py-2 border-2 border-gray-100 mb-6 bg-white shadow-sm"
        onClick={() => setShowSuggestions((prev) => !prev)}
      >
        Suggested Question
      </button>

      {showSuggestions && (
        <SuggestedQuestions onSuggestionClick={handleSuggestionClick} />
      )}
      <div className="relative w-full flex items-center">
        <FaImage
          size={22}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500"
        />
        <Input
          className="rounded-3xl px-4 py-6 shadow-lg w-full border-2 border-gray-200 text-base text-gray-500 pl-12 pr-20"
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Ask me any question"
          onKeyDown={async (e) => {
            if (e.key === "Enter") {
              await onSubmit()
            }
          }}
        />
        <FaMicrophone
          size={22}
          className="absolute right-12 top-1/2 transform -translate-y-1/2 text-orange-500"
        />
        <FaPhoneAlt
          size={22}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-orange-500"
        />
      </div>
    </div>
  )
}

const suggestedQuestions = [
  "Tell me more.",
  "If you were to go through my social media or blog and read my thoughts, how might you describe my growth or change over the years, in terms of interests or qualities?",
  "Indicating what percentage of the way to success counts as having succeeded at all?",
  "If you were to become an artist, what fundamental skills should you understand and grasp?",
  "If you were to combine certain elements of your work and those of [OTHER PERSON], how would you approach the task?",
]

const SuggestedQuestions = ({ onSuggestionClick }: any) => {
  return (
    <div className="flex flex-wrap justify-center gap-8 mb-4 w-full px-6">
      {suggestedQuestions.map((question, index) => (
        <button
          key={index}
          className="bg-white border-2 border-gray-100 min-h-[150px] w-[240px] px-3 py-3 pt-6 rounded-2xl shadow-md text-[12px] flex items-start transition-transform transform hover:scale-105 text-left"
          onClick={() => onSuggestionClick(question)}
        >
          <p className="text-gray-800 ">{question}</p>
        </button>
      ))}
    </div>
  )
}

export default ChatInput
