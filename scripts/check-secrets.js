// Valida se as secrets estão corretamente configuradas
if (!process.env.JWT_SECRET) {
    console.error('❌ JWT_SECRET não configurada');
    process.exit(1);
  }
  
  console.log('✅ Secrets configuradas corretamente');