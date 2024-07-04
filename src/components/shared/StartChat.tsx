"use client"

import { FaPhoneAlt } from "react-icons/fa"
import { Input } from "../ui/input"
import Link from "next/link"

const StartChat = () => {
  return (
    <div>
      <div className="relative w-full mt-12">
        <Input
          className="rounded-3xl px-4 py-6 shadow-lg w-full border-2 border-gray-200 text-base text-gray-500 pr-12"
          placeholder="Ask me any question"
        />
        <FaPhoneAlt
          size={22}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-orange-500"
        />
      </div>
      <div className="flex justify-center items-center mt-6">
        <Link
          href={`/${"username"}/talk`}
          className="text-gray-500 hover:underline text-[12px] font-medium"
        >
          {"Start Talking  >"}
        </Link>
      </div>
    </div>
  )
}

export default StartChat
