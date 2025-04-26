from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import Dict
from dotenv import load_dotenv

from backend.schema import UserInput, Conversation
from backend.model import chat_with_groq


app = FastAPI()

app.add_middleware(
  CORSMiddleware,
  allow_origins=["*"],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

conversations: Dict[str, Conversation] = {}

# Salva, cria e retorna as conversas tidas baseadas no ID delas
def get_or_create_conversation(conversation_id: str) -> Conversation:
  if conversation_id not in conversations:
    conversations[conversation_id] = Conversation()
  return conversations[conversation_id]

@app.post("/chat")
async def chat(user_input: UserInput):
  conversation = get_or_create_conversation(user_input.conversation_id)

  if not conversation.active:
    raise HTTPException(status_code=400, detail="Conversation is inactive")
  
  try:
    conversation.messages.append({
      "role": user_input.role,
      "content": user_input.message
    })

    response = chat_with_groq(conversation)

    conversation.messages.append({
      "role": "assistant",
      "content": response
    })

    return {
      "response" : response,
      "conversation_id": user_input.conversation_id,
    }
  except Exception as e:
    raise HTTPException(status_code=500, detail="Error while processing the request") from e
  

@app.get("/conversation/{conversation_id}")
async def get_conversation(conversation_id : str):
  conversation = get_or_create_conversation(conversation_id)
  return {
    "conversation_id": conversation_id,
    "messages": conversation.messages,
    "active": conversation.active
  }


