import React, { useEffect, useRef } from 'react'
import { useChat } from '../hooks/useChat'
import { MessageItem } from './MessageItem'
import { MessageInput } from './MessageInput'
import { RefreshCcw } from 'lucide-react'

export const ChatInterface: React.FC = () => {
  const { messages, isLoading, sendMessage, startNewConversation } = useChat()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="bg-furia-purple text-white -4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="font-bold text-xl">FURIA Chat Assistant</h1>
          <button onClick={startNewConversation} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 rounded-lg px-3 py-1.5 text-sm">
            <RefreshCcw size={16} />
            Nova conversa
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="container mx-auto max-w-3xl">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full text-gray-500">
              <p>Envie uma mensagem para começar a conversa</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4 rounded-lg border border-gray-200 overflow-hidden">
              {messages.map((message, index) => (
                <MessageItem key={index} message={message} />
              ))}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="container mx-auto max-w-3xl pb-4 px-4">
        <MessageInput onSendMessage={sendMessage} isLoading={isLoading} />
      </div>
    </div>
  )
}
