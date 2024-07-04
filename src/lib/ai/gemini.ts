import { GoogleGenerativeAI, GenerativeModel } from "@google/generative-ai"

class GeminiSingleton {
  private static instance: GeminiSingleton
  private genAI: GoogleGenerativeAI
  private model: GenerativeModel | null = null

  private constructor(apiKey: string) {
    this.genAI = new GoogleGenerativeAI(apiKey)
    this.initModel("gemini-1.5-flash")
  }

  public static getInstance(apiKey: string): GeminiSingleton {
    if (!GeminiSingleton.instance) {
      GeminiSingleton.instance = new GeminiSingleton(apiKey)
    }
    return GeminiSingleton.instance
  }

  private async initModel(modelName: string): Promise<void> {
    this.model = await this.genAI.getGenerativeModel({ model: modelName })
  }

  public async getGenerativeModel(
    modelName: string = "gemini-1.5-flash"
  ): Promise<GenerativeModel> {
    if (!this.model) {
      await this.initModel(modelName)
    }
    if (!this.model) {
      throw new Error("Failed to initialize model")
    }
    return this.model
  }

  public async generateContent(prompt: string): Promise<string> {
    if (!this.model) {
      throw new Error("Model not initialized")
    }

    const result = await this.model.generateContent(prompt)
    const response = await result.response
    const text = response.text()

    return text
  }

  public async generateChatResponse(prompt: string): Promise<String> {
    if (!this.model) {
      throw new Error("Model not initialized")
    }

    const chat = this.model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "Hello! I'm your AI assistant. Ask me anything!" }],
        },
        {
          role: "model",
          parts: [
            {
              text: "I'm the AI CEO of Gumroad, a platform that helps creators sell their products online. Feel free to ask me about startups, technology, or anything else!",
            },
          ],
        },
      ],
      generationConfig: {
        maxOutputTokens: 100,
      },
    })

    const msg = prompt

    const result = await chat.sendMessageStream(msg)

    let text = ""
    for await (const chunk of result.stream) {
      const chunkText = chunk.text()
      console.log(chunkText)
      text += chunkText
      console.log({ text })
    }

    return text
  }
}

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY!
const geminiInstance = GeminiSingleton.getInstance(apiKey)

export default geminiInstance
