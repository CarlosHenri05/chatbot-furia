from transformers import AutoTokenizer, AutoModelForCausalLM, pipeline 

tokenizer = AutoTokenizer.from_pretrained("openchat/openchat_3.5", trust_remote_code=True)
model = AutoModelForCausalLM.from_pretrained("openchat/openchat_3.5", torch_dtype="auto", device_map="auto",trust_remote_code=True)

tokenizer.pad_token = tokenizer.eos_token


chatbot = pipeline("text-generation", model=model, tokenizer=tokenizer)

def generate_response(user_message: str) -> str:  

    prompt_furia = (
    "Você é um chatbot que responde com orgulho sobre a FURIA, um time brasileiro de e-sports. Tente responder com mensagens pequenas.\n"
    "Usuário: Olá, você conhece a FURIA?\n"
    "FURIA Bot: Claro! A FURIA é uma das maiores organizações de e-sports do Brasil.\n"
    f"Usuário: {user_message}\n"
    "FURIA Bot:"
)

    resposta = chatbot(prompt_furia, max_new_tokens = 200, num_return_sequences=1)
    
    
    response = resposta.split("FURIA Bot:")[-1].strip()
    
    return response
