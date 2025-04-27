import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Message } from '../types/chat'
import { chatService } from '../services/api'

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([])

  const [isLoading, setIsLoading] = useState(false)

  const [conversationId, setConversationId] = useState<string>(() => {
    const savedId = localStorage.getItem('conversationId')
    return savedId || uuidv4()
  })

  useEffect(() => {
    localStorage.setItem('conversationId', conversationId)
  }, [conversationId])

  const sendMessage = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = { role: 'user', content }
    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    try {
      const response = await chatService.sendMessage({
        message: content,
        role: 'user',
        conversation_id: conversationId,
      })

      const assistantMessage: Message = {
        role: 'system',
        content: response.response,
      }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error('Failed to get response:', error)
      setMessages((prev) => [
        ...prev,
        {
          role: 'system',
          content: 'Desculpe, houve um erro ao processar sua mensagem. Por favor, tente novamente.',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const fetchChatHistory = async (conversation_id: string) => {
    setIsLoading(true)
    try {
      const response = await chatService.getChatHistory(conversation_id)
      const formattedMessages: Message[] = response.messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      }))
      setMessages(formattedMessages)
    } catch (error) {
      console.error('Falha ao buscar histórico de mensagens:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const startNewConversation = () => {
    const newId = uuidv4()
    setConversationId(newId)
    setMessages([])
  }

  return {
    messages,
    isLoading,
    conversationId,
    sendMessage,
    startNewConversation,
    fetchChatHistory,
  }
}
