// 🔴 INTENCIONALMENTE VULNERÁVEL (para testes SAST/DAST)
const jwt = require('jsonwebtoken');

// Versão corrigida (usando variáveis de ambiente)
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET; // Lê do ambiente

function login(user) {
  if (!JWT_SECRET) throw new Error('JWT_SECRET não configurado!');
  return jwt.sign({ user }, JWT_SECRET, { algorithm: 'RS256' }); // Algoritmo seguro
}