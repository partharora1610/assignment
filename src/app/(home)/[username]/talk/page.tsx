"use client"
import React, { useEffect } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PiWaveform } from "react-icons/pi"
import ChatInput from "@/components/shared/ChatInput"
import chatStore from "@/store/chat.store"
import { SayButton } from "react-say"

const Page = () => {
  return (
    <div className="max-w-[1536px] m-auto h-[calc(100vh-88px)] py-2 px-1 flex flex-col">
      <ScrollArea className="flex-1 w-full rounded-md p-4 overflow-y-auto">
        <ChatContainer />
      </ScrollArea>
      <ChatInput />
    </div>
  )
}

const ChatContainer = () => {
  const { messages, loading, fetchAllMessages, sending } = chatStore()

  useEffect(() => {
    fetchAllMessages()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col gap-4 pb-4">
      {messages.map((message, index) => (
        <ChatItem
          key={message.id}
          user={message.sender == "user"}
          content={message.content}
          suggest={
            messages.length - 1 === index &&
            message.sender == "model" &&
            !sending
          }
        />
      ))}

      {sending && (
        <div className="flex p-2 mt-2">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2.5 h-2.5 bg-gray-300 rounded-full animate-bounce delay-100"></div>
            <div className="w-2.5 h-2.5 bg-gray-300 rounded-full animate-bounce delay-200"></div>
            <div className="w-2.5 h-2.5 bg-gray-300 rounded-full animate-bounce delay-300"></div>
          </div>
        </div>
      )}
    </div>
  )
}

const ChatItem = ({
  user,
  content,
  suggest,
}: {
  user?: Boolean
  content: String
  suggest?: Boolean
}) => {
  const { sendMessage } = chatStore()

  const suggestTopic = async () => {
    sendMessage(
      "Suggest Topic for some interesting conversation with a startup founder act as if the founder itself is suggesting some topics."
    )
  }

  return (
    <div>
      <div className={`${user ? "pl-12" : "pr-12"}`}>
        <div
          className={`px-4 py-3 shadow-lg w-1/2 rounded-2xl border-2 ${
            user
              ? "bg-primary-500 text-white ml-auto"
              : "bg-white border-gray-50"
          }`}
        >
          {!user && (
            <div
              className={`flex gap-2 ${user ? "flex-row-reverse" : ""} mb-3`}
            >
              <Avatar className="w-5 h-5 rounded-full">
                <AvatarImage src="https://i.imgur.com/DMJPiUa.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="text-[12px] font-medium">{"Sahil Lavingia"}</div>
              <SayButton speak={content}>
                <PiWaveform className="text-primary-500 hover:text-gray-500 cursor-pointer" />
              </SayButton>
            </div>
          )}
          <div>
            <p className="">{content}</p>
          </div>
        </div>
      </div>
      {suggest && (
        <p
          onClick={suggestTopic}
          className="pl-3 mt-2 cursor-pointer text-[12px] font-semibold text-primary-500"
        >
          Suggest Topic
        </p>
      )}
    </div>
  )
}

export default Page
