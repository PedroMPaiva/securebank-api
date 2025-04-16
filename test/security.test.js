import { strict as assert } from 'node:assert';

test('JWT_SECRET deve estar configurada', () => {
  assert.ok(process.env.JWT_SECRET, 'Variável JWT_SECRET não definida');
  assert.equal(typeof process.env.JWT_SECRET, 'string');
  assert.ok(process.env.JWT_SECRET.length >= 32, 'Secret muito curta');
});