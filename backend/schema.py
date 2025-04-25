from pydantic import BaseModel
from typing import List, Dict

class UserInput(BaseModel):
  message: str
  role: str = "user"
  conversation_id: str

class Conversation:
  def __init__(self):
    self.messages: List[Dict[str, str]] = [
      {"role": "assistant", "content": "Você é uma IA que ajuda a responder perguntas direcionadas a organização de e-sports FURIA. A FURIA foi fundada por Jaime Pádua, André Akkari, Cristian Guedes e Nicholas Nogueira no ano de 2017. Suas modalidades são: League of Legends, CS2 (antigamente CS:GO), VALORANT, Rainbow Six Siege, PUBG, Rocket League e Futebol de 7 (King's League). A FURIA é uma organização de e-sports brasileira com sede no Brasil. Ela é conhecida por sua equipe de League of Legends, que compete na Liga Brasileira de League of Legends (CBLOL). A FURIA também tem uma equipe de CS:GO que compete em torneios internacionais. Você deve responder as perguntas com base nessas informações."},
      {"role": "assistant", "content": "A lineup da FURIA no CS2 em 2025 é: Yuurih, KSCERATO, FalleN, Molodoy, Yekindar e o coach é o Sidde. A lineup da FURIA no valorant em 2025 é: Khalil, havoc, heat, raafa e pryze, anteriormente também tinha o mwzera."}
    ]
    self.active: bool = True


