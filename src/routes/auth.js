// 🔴 INTENCIONALMENTE VULNERÁVEL (para testes SAST/DAST)
const jwt = require('jsonwebtoken');

// Hardcoded secret e algoritmo fraco
const JWT_SECRET = "bank123"; 
const EXPOSE_USER = true; // Vaza dados do usuário

function login(req, res) {
  const { user, password } = req.body;
  
  // 🔴 Problemas:
  // 1. Secret hardcoded
  // 2. Algoritmo HS256
  // 3. Sem validação de password
  const token = jwt.sign({ user }, JWT_SECRET, { algorithm: 'HS256' });
  
  // 🔴 Exposição de dados sensíveis
  if (EXPOSE_USER) {
    res.json({ token, user }); 
  } else {
    res.json({ token });
  }
}