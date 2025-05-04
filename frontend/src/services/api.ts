import axios from 'axios'
import { ChatResponse, UserInputPayload } from '../types/chat'

const API_URL = 'https://chatbot-furia-9r8q.onrender.com/'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
export const chatService = {
  sendMessage: async (payload: UserInputPayload): Promise<ChatResponse> => {
    console.log('Enviando para API:', payload)
    try {
      const response = await api.post<ChatResponse>('/chat', payload)
      console.log('Resposta da API:', response.data)
      return response.data
    } catch (error) {
      console.error('Erro detalhado:', error)
      throw error
    }
  },
}
