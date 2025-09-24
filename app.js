const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('ok'); // Responde con "ok" como espera el workflow
});

app.get('/', (req, res) => {
  res.status(200).json({
    message: '¡Hola mundo!',
  });
});
// No llames a app.listen aquí para tests; exporta app
module.exports = app; // Exporta app para Supertest
