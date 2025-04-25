from fastapi import FastAPI
from app.schema import ChatRequest, ChatResponse
from app.model import generate_response



app = FastAPI()

@app.post("/chat", response_model=ChatResponse)
async def chat (request: ChatRequest) -> ChatResponse:

  resposta = generate_response(request.message)

  return ChatResponse(response= resposta)
