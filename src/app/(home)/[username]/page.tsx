import React from "react"
import { InfoIcon, Share2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RiVerifiedBadgeFill } from "react-icons/ri"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import StartChat from "@/components/shared/StartChat"
import TalkTopics from "@/components/shared/TalksTopics"
import { getProfile } from "@/lib/profile.action"
import Image from "next/image"

const page = async ({ params }: any) => {
  const username = params.username

  return (
    <div>
      <ProfileComponent username={username} />
    </div>
  )
}

const ProfileComponent = async ({ username }: { username: string }) => {
  const response = await getProfile({ slug: username })

  const profile = JSON.parse(response).profile as any
  const { name, title, about, categories } = profile
  return (
    <div className="max-w-[1536px] m-auto bg-white h-[100vh] py-14 px-16 border-x-2">
      <ProfileHeader name={name} title={title} about={about} />
      <StartChat />

      <TalkTopics categories={categories} />
    </div>
  )
}

const ProfileHeader = ({
  name,
  title,
  about,
}: {
  name: string
  title: string
  about: string
}) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <Avatar className="w-32 h-32 rounded-full mb-7 fit">
          <AvatarImage src="https://i.imgur.com/DMJPiUa.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <div className="flex gap-2 items-center">
            <h2 className="text-4xl mb-2">{name}</h2>
            <Image src="/logo.png" width={32} height={32} alt="gum_road_logo" />
            <RiVerifiedBadgeFill size={22} className="text-primary-500" />
          </div>
          <div className="text-gray-500 text-base">{title}</div>
          <div className="mt-6">
            <div className="mb-3 flex gap-2 items-center">
              <h3 className="text-xl">About</h3>
              <InfoIcon className="text-gray-500" size={18} />
            </div>
            <p className="w-1/2 text-[13px] text-gray-500">{about}</p>
          </div>
        </div>
      </div>

      <div className="">
        <ShareDialog />
      </div>
    </div>
  )
}

const ShareDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="border-2 border-gray-200 p-3 rounded-full cursor-pointer">
          <Share2 className="text-primary-500" size={20} />
        </div>
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>
            <div className="flex gap-2 items-center mb-4">
              <Avatar className="rounded-full w-10 h-10">
                <AvatarImage src="https://i.imgur.com/DMJPiUa.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold">Sahil Lavingia</h2>
                  <RiVerifiedBadgeFill size={18} className="text-primary-500" />
                </div>
              </div>
            </div>
          </DialogTitle>
          <DialogDescription>
            <DialogData />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

const DialogData = () => {
  return (
    <div className="flex flex-col gap-4">
      {/*  */}
      <div className="flex justify-between items-center py-4 hover:bg-gray-100">
        <div className="flex gap-2 items-center">
          <div className="border-2 border-gray-200 p-2 rounded-full cursor-pointer">
            <Share2 className="text-primary-500" size={18} />
          </div>
          <p className="text-base font-medium">Share this Delphi Clone</p>
        </div>
        <div>{">"}</div>
      </div>

      <div className="flex justify-between items-center py-4 hover:bg-gray-100">
        <div className="flex gap-2 items-center">
          <div className="border-2 border-gray-200 p-2 rounded-full cursor-pointer">
            <Share2 className="text-primary-500" size={18} />
          </div>
          <p className="text-base font-medium">View Socials</p>
        </div>
        <div>{">"}</div>
      </div>
      {/*  */}
      <div className="flex justify-between items-center py-4 hover:bg-gray-100">
        <div className="flex gap-2 items-center">
          <div className="border-2 border-gray-200 p-2 rounded-full cursor-pointer">
            <Share2 className="text-primary-500" size={18} />
          </div>
          <p className="text-base font-medium">Give Feedback</p>
        </div>
        <div>{">"}</div>
      </div>
    </div>
  )
}
export default page
