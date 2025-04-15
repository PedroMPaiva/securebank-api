FROM node:14 # 🔴 Versão desatualizada

WORKDIR /app
COPY . .

# 🔴 Problemas:
# 1. Rodar como root
# 2. Sem verificação de checksum
# 3. Pacotes desnecessários
RUN apt-get update && apt-get install -y curl wget

EXPOSE 3000
CMD ["node", "src/app.js"]