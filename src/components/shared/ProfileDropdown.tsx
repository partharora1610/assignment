import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut } from "next-auth/react"

import React from "react"
import { Button } from "../ui/button"

const ProfileDropdown = ({ intial }: { intial: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default">
          <div className="bg-green-800 cursor-pointer flex items-center justify-center text-white text-lg rounded-full font-semibold w-8 h-8">
            <p>{intial}</p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white rounded-xl text-sm">
        <DropdownMenuItem className="">Profile</DropdownMenuItem>
        <DropdownMenuItem className="">Subscription</DropdownMenuItem>
        <DropdownMenuItem className="" onClick={() => signOut()}>
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProfileDropdown
