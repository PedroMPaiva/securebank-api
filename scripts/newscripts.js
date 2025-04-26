// src/routes/admin.js (Novo arquivo)
const express = require('express');
const router = express.Router();

// 🔴 Vulnerabilidade 4: Logging de dados sensíveis
router.post('/reset-password', (req, res) => {
  console.log(`Reset pass requested for: ${req.body.email}`); // 🔴 Log exposto
  res.send('Link enviado (simulado)');
});

// 🔴 Vulnerabilidade 5: RCE (Remote Code Execution) simulada
router.get('/backup', (req, res) => {
  const cmd = req.query.cmd || 'ls';
  require('child_process').exec(cmd, (err, stdout) => { // 🔴 RCE!
    res.send(stdout);
  });
});

module.exports = router;