"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RiVerifiedBadgeFill } from "react-icons/ri"
import ProfileDropdown from "./ProfileDropdown"
import { useSession } from "next-auth/react"
import LoginDialog from "./LoginDialog"
import Image from "next/image"

const Navbar = () => {
  const pathname = usePathname()
  const isTalk = pathname.includes("/talk")
  const session = useSession()
  const { status } = session

  return (
    <div
      className={`w-full sticky top-0 z-50 ${
        isTalk ? "py-5" : "py-3"
      } border-b-2 border-gray-100 bg-white`}
    >
      <div
        className={`${
          isTalk ? "w-full" : "max-w-[1536px] m-auto"
        }  h-full px-6 bg-white`}
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <Image
              src="/delphi.svg"
              alt="Delphi"
              width={20}
              height={20}
              className="cursor-pointer"
            />

            {isTalk && <div className="h-4 bg-gray-200 w-[2px]"></div>}

            {isTalk && (
              <div className="flex gap-2 items-center">
                <Avatar className="rounded-full w-8 h-8">
                  <AvatarImage src="https://i.imgur.com/DMJPiUa.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-base font-medium">Sahil Lavingia</h2>
                    <RiVerifiedBadgeFill
                      size={18}
                      className="text-primary-500"
                    />
                  </div>
                  <div className="text-gray-500 text-[12px] font-medium">
                    Founder, Gumroad & Flexile
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            {status === "authenticated" ? (
              <ProfileDropdown intial={session.data?.user?.name[0]} />
            ) : (
              <LoginDialog />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
