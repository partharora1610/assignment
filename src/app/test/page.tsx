// "use client"

// import { useState } from "react"
// import { getAIResponse } from "@/lib/chat.action"

// export default function Home() {
//   const [loading, setLoading] = useState(false)
//   const [conversation, setConversation] = useState<any>()

//   return (
//     <div>
//       <div>{JSON.stringify(conversation)}</div>
//       <div>
//         {loading && (
//           <div className="flex p-2 bg-gray-400">
//             <div className="flex items-center justify-center space-x-2">
//               <div className="w-2.5 h-2.5 bg-gray-300 rounded-full animate-bounce delay-100"></div>
//               <div className="w-2.5 h-2.5 bg-gray-300 rounded-full animate-bounce delay-200"></div>
//               <div className="w-2.5 h-2.5 bg-gray-300 rounded-full animate-bounce delay-300"></div>
//             </div>
//           </div>
//         )}
//       </div>
//       <div>
//         <button
//           onClick={async () => {
//             setLoading(true)
//             const response = await getAIResponse()
//             setConversation(response)
//             setLoading(false)
//           }}
//         >
//           Send Message
//         </button>
//       </div>
//     </div>
//   )
// }
import React from "react"

const page = () => {
  return <div>page</div>
}

export default page
