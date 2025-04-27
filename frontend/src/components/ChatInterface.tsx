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
        <div className="bg-black border-l-4 border-yellow-500 p-4 mb-4">
          <div className="flex items-center">
            <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p className="text-sm">
              <strong>Aviso:</strong> Este bot possui informações limitadas ao fim de 2023 por conta da limitação das I.A's públicas. Para eventos ou informações mais recentes, por favor consulte
              fontes atualizadas.
            </p>
          </div>
        </div>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="font-bold text-xl">CHATBOT-FURIA</h1>

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
