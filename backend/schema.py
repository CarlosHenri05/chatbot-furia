from pydantic import BaseModel
from typing import List, Dict

class UserInput(BaseModel):
  message: str
  role: str = "user"
  conversation_id: str

class Conversation:
  def __init__(self):
    self.messages = List[Dict[str,str]] = [
      {"role": "system", "content": "Você é uma IA que ajuda a responder perguntas direcionadas a organização de e-sports FURIA."}
    ]
    self.active: bool = True


