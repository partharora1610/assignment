import { FaGoogle } from "react-icons/fa"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { signIn } from "next-auth/react"
import { Button } from "../ui/button"

const LoginDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="text-gray-500">Login</DialogTrigger>
      <DialogContent className="bg-white p-6 rounded-xl shadow-lg max-w-sm mx-auto">
        <DialogHeader>
          <DialogTitle className="flex flex-col gap-2 items-start">
            <Avatar className="w-12 h-12 rounded-full">
              <AvatarImage src="https://i.imgur.com/DMJPiUa.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-xl font-normal">Welcome!</div>
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <p className="font-normal text-[13px] text-gray-500 text-left mb-8">
            Please sign in so that we can continue the conversation. This will
            allow you to save insights and personalize your experience.
          </p>

          <button
            onClick={() => signIn("google")}
            className="flex items-center justify-center w-full p-2 mb-4 border rounded-xl font-medium  bg-white-50 hover:bg-blue-50"
          >
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>
          <Button
            variant="ghost"
            className="flex text-[12px] text-gray-500 hover:text-gray-600 items-center font-normal justify-center w-full p-2 mb-4 rounded-lg"
          >
            Continue with email
            <span className="ml-2">&rarr;</span>
          </Button>
          <p className="text-[13px] text-center text-gray-500">
            By logging in and using Delphi, you agree to our{" "}
            <a href="/policies" className="text-gray-600 font-bold">
              Policies
            </a>{" "}
            and{" "}
            <a href="/terms" className="text-gray-600 font-bold">
              Terms of use
            </a>
          </p>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

export default LoginDialog
