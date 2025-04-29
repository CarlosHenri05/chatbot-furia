export interface Message {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export interface Conversation {
  id: string
  messages: Message[]
}

export interface ChatResponse {
  response: string
  conversation_id: string
}

export interface UserInputPayload {
  message: string
  role: 'user'
  conversation_id: string
}
