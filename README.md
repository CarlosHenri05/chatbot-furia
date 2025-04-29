# Chatbot FURIA

🚀 Um chatbot feito com **FastAPI** (Python) no backend e **React + TypeScript** no frontend para responder perguntas relacionadas à organização de e-sports **FURIA**.

> "#GOFURIA"

---

## 📂 Tecnologias Utilizadas

- **Backend**:
  - [FastAPI](https://fastapi.tiangolo.com/)
  - Swagger (Integrado automaticamente por conta do FastAPI)
  - Python 3.10+
  - [Pydantic](https://docs.pydantic.dev/)
  - [CORS Middleware](https://fastapi.tiangolo.com/tutorial/cors/)
  - Llama 3.3 (I.A Open-source da Meta)

- **Frontend**:
  - React
  - TypeScript
  - Axios
  - UUID (para geração de IDs de conversas)

---

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/CarlosHenri05/chatbot-furia.git
cd chatbot-furia
```

---

## 🐍 Rodando o Backend (FastAPI)

### Pré-requisitos:
- Python 3.10 ou superior
- Gerenciador de pacotes `pip`

### Instale as dependências:
```bash
pip install -r requirements.txt
```

(Se necessário, crie um ambiente virtual antes: `python -m venv venv`)

### Rode o servidor:
```bash
uvicorn backend.app:app --reload
```

O servidor estará rodando em:  
👉 `http://localhost:8000`

👉 `http://localhost:8000/docs` (Swagger)

---

## ⚛️ Rodando o Frontend (React + TypeScript)

### Pré-requisitos:
- Node.js
- npm ou yarn

### Instale as dependências:
```bash
npm install
# ou
yarn install
```

### Rode o projeto:
```bash
npm run dev
# ou
yarn dev
```

O frontend estará rodando em:  
👉 `http://localhost:5173` (ou porta configurada pelo Vite)

---

## 📚 Estrutura do Projeto

```
chatbot-furia/
├── backend/
│   ├── main.py          # Arquivo principal FastAPI
│   ├── model.py         # Integração com modelo de chat (ex: Groq)
│   ├── schema.py        # Definições de dados (UserInput, Conversation, Prompt da I.A)
│
├── frontend/
│   ├── src/
│   │   ├── components/ChatInterface.tsx & MessageInput.tsx & MessageItem.tsx
│   │   ├── hooks/useChat.ts   # Lógica para gerenciar chats
│   │   ├── services/api.ts    # Comunicação com a API FastAPI
│   │   ├── types/chat.ts      # Tipos para mensagens e respostas
│   │   └── App.tsx            # Componente principal
│   ├── public/
│   ├── package.json
│
├── README.md
└── ...
```

---

## 🔥 Funcionalidades

- Iniciar novas conversas (com IDs únicos)
- Persistência do `conversation_id` no `localStorage`
- Histórico de mensagens para cada conversa
- Respostas automáticas baseadas em informações da FURIA
- Integração com modelo de linguagem através do `chat_with_groq`

---

## 🛠️ Como contribuir?

1. Fork este repositório
2. Crie uma branch nova: `git checkout -b minha-feature`
3. Faça suas alterações e commit: `git commit -m 'Adiciona nova feature'`
4. Envie para o seu fork: `git push origin minha-feature`
5. Abra um Pull Request! 🚀

---

# 📷 Imagens de uso 

![image](https://github.com/user-attachments/assets/27e99d30-b672-4e8c-ace2-72ce8830443e)




