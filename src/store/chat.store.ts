import { getAIResponse } from "@/lib/chat.action"
import { create } from "zustand"

type Message = {
  id: string
  content: String
  sender: "user" | "model"
  timestamp: Date
}

type Store = {
  messages: Message[]
  loading: boolean
  sending: boolean
  sendMessage: (message: string) => Promise<void>
  fetchAllMessages: () => Promise<void>
  addUserMessage: (message: string) => void
}

const chatStore = create<Store>((set) => ({
  messages: [],
  loading: false,
  sending: false,
  sendMessage: async (message) => {
    set({ sending: true })
    try {
      const newMessage: String = await getAIResponse(message)
      set((state) => ({
        messages: [
          ...state.messages,
          {
            content: newMessage,
            id: "3",
            sender: "model",
            timestamp: new Date(),
          },
        ],
        sending: false,
      }))
    } catch (error) {
      console.error("Failed to send message", error)
      set({ sending: false })
    }
  },
  addUserMessage: (message) => {
    set((state) => ({
      messages: [
        ...state.messages,
        { content: message, id: "3", sender: "user", timestamp: new Date() },
      ],
    }))
  },
  fetchAllMessages: async () => {
    set({ loading: true })
    try {
      set({
        messages: [
          {
            id: "1",
            content: "Hello! I'm your AI assistant. Ask me anything!",
            sender: "model",
            timestamp: new Date(),
          },
          {
            id: "2",
            content:
              "I'm the AI CEO of Gumroad, a platform that helps creators sell their products online. Feel free to ask me about startups, technology, or anything else!",
            sender: "model",
            timestamp: new Date(),
          },
        ],
        loading: false,
      })
    } catch (error) {
      console.error("Failed to fetch messages", error)
      set({ loading: false })
    }
  },
}))

export default chatStore
