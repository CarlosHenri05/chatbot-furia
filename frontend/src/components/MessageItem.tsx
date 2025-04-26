import React from 'react'
import { Message } from '../types/chat'
import { User } from 'lucide-react'
import furiaLogo from '../assets/furiaLogo.png'

interface MessageItemProps {
  message: Message
}

export const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const isUser = message.role === 'user'

  return (
    <div className={`flex gap-3 p-4 ${isUser ? 'bg-gray-100' : 'bg-white'}`}>
      <div className="flex-shrink-0">
        {isUser ? (
          <div className="w-8 h-8 rounded-full bg-furia-blue flex items-center justify-center">
            <User size={16} className="text-white" />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-furia-black flex items-center justify-center">
            <img src={furiaLogo} className="text-white" />
          </div>
        )}
      </div>

      <div className="flex-1">
        <p className="font-medium text-sm text-gray-500 mb-1">{isUser ? 'Você' : 'FURIA Bot'}</p>
        <div className="prose prose-sm max-w-none">{message.content}</div>
      </div>
    </div>
  )
}
