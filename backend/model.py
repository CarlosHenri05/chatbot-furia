from fastapi import HTTPException
from backend.schema import Conversation
from groq import Groq
import os
from dotenv import load_dotenv

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

try: 
  GROQ_API_KEY = os.getenv("GROQ_API_KEY")
except Exception as e:
  raise Exception("GROQ_API_KEY not found in environment variables. Please set it.") from e


def chat_with_groq(conversation: Conversation) -> str:
  try:
    completion = client.chat.completions.create(
      model = "llama-3.1-8b-instant",
      messages = conversation.messages, 
      temperature = 1,
      max_tokens = 1024,
      top_p= 1,
      stream=True,
      stop = None,
    )

    response = ""

    for element in completion:
      response += element.choices[0].delta.content or ""
    
    return response
  except Exception as e:
    raise HTTPException("Error while calling Groq API") from e
