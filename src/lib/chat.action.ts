"use server"
import geminiInstance from "./ai/gemini"

export const getAIResponse = async (prompt: string) => {
  const response = await geminiInstance.generateChatResponse(prompt)

  return response
}
