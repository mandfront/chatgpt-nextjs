import { ChatMessage } from '@/types/ChatMessage'
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
})

const api = new OpenAIApi(configuration)

export const openai = {
  generate: async (messages: ChatCompletionRequestMessage[]) => {
    try {
      const response = await api.createChatCompletion({
        model: 'gpt-3.5-turbo',
        temperature: 0.7,
        messages,
      })

      return response.data.choices[0]?.message?.content
    } catch (error) {
      console.log(error)
      return undefined
    }
  },
  translateMessages: (messages: ChatMessage[]) => {
    const reqMessages: ChatCompletionRequestMessage[] = []

    for (const i in messages) {
      reqMessages.push({
        role: messages[i].author === 'me' ? 'user' : 'assistant',
        content: messages[i].body,
      })
    }

    return reqMessages
  },
}
