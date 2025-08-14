# Conversor Decimal

Projeto em Node.js usando Express para converter números decimais em binário e hexadecimal.

## Funcionalidades

- Converter números decimais para binário
- Converter números decimais para hexadecimal

## Endpoints

- `GET /to-binary/:decimal`  
  Converte o número decimal fornecido em binário.  
  **Exemplo:** `/to-binary/10` → `{ "decimal": 10, "binary": "1010" }`

- `GET /to-hex/:decimal`  
  Converte o número decimal fornecido em hexadecimal.  
  **Exemplo:** `/to-hex/255` → `{ "decimal": 255, "hex": "FF" }`

## Como rodar

1. Clone o repositório:  
   ```bash
   git clone https://github.com/rosariodutra/conversor.git
