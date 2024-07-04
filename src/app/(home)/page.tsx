"use client"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import {
  RiExternalLinkLine,
  RiLockFill,
  RiVerifiedBadgeFill,
} from "react-icons/ri"

const Page = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1536px] m-auto bg-white h-[100vh] py-4 px-16 border-x-2">
        <ChoiceComponent />
      </div>
    </div>
  )
}

const ChoiceComponent = () => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-base">Delphi&apos;s Choice</h2>
        <p className="text-[13px] text-gray-500">
          The newest clone created on Delphi
        </p>
      </div>
      <div className="flex gap-8">
        <ChoiceItem
          imageSrc="https://i.imgur.com/6MoU2NQ.jpg"
          name="Brendon Burchard - Trial"
          description="Brendon AI Life Coach: Trial"
          isTrial={true}
          isVerified={true}
        />
        <ChoiceItem
          imageSrc="https://i.imgur.com/DMJPiUa.png"
          name="Heather Monahan"
          description="The Confidence Creator"
          isTrial={false}
          isVerified={true}
        />
        <ChoiceItem
          imageSrc="https://i.imgur.com/DMJPiUa.png"
          name="Brendon Burchard - Trial"
          description="Brendon AI Life Coach: Trial"
          isTrial={true}
          isVerified={true}
        />
        <ChoiceItem
          imageSrc="https://i.imgur.com/DMJPiUa.png"
          name="Heather Monahan"
          description="The Confidence Creator"
          isTrial={false}
          isVerified={true}
        />
        <ChoiceItem
          imageSrc="https://i.imgur.com/DMJPiUa.png"
          name="Heather Monahan"
          description="The Confidence Creator"
          isTrial={false}
          isVerified={true}
        />
        <ChoiceItem
          imageSrc="https://i.imgur.com/DMJPiUa.png"
          name="Heather Monahan"
          description="The Confidence Creator"
          isTrial={false}
          isVerified={true}
        />
      </div>
    </div>
  )
}

const ChoiceItem = ({
  imageSrc,
  name,
  description,
  isTrial,
  isVerified,
  username = "sahil-lavangia",
}: any) => {
  return (
    <Link href={`/${username}`}>
      <div className="w-52">
        <div className="relative h-48 w-full overflow-hidden lg:h-36 group rounded-2xl">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              alt=""
              src={imageSrc}
              layout="fill"
              objectFit="cover"
              className="transform transition duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          <div className="absolute bottom-3 right-3 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <button className="p-2 bg-white rounded-full">
              <RiExternalLinkLine size={20} className="text-black" />
            </button>
          </div>
        </div>
        <div className="mt-2 px-2">
          <div className="flex gap-1 items-center">
            <h2 className="text-[13px] font-medium">{name}</h2>
            {isVerified && (
              <RiVerifiedBadgeFill size={16} className="text-primary-500" />
            )}
            {isTrial && <RiLockFill size={16} className="text-red-500" />}
          </div>
          <div className="text-gray-500 text-[13px]">{description}</div>
        </div>
      </div>
    </Link>
  )
}

export default Page
