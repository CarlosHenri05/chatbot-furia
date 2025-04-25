from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from groq import Groq
from typing import List, Dict
from dotenv import load_dotenv
import os

from backend.schema import UserInput, Conversation



app = FastAPI()

app.add_middleware(
  CORSMiddleware,
  allow_origins=["*"],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

conversations: Dict[str, Conversation] = {}

@app.post("/chat")
async def chat(user_input: UserInput):
  return None



