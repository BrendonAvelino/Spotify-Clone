const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// Servindo os arquivos estáticos (músicas)
app.use('/music', express.static(path.join(__dirname, 'music')));

// Exemplo de rota para testar
app.get('/', (req, res) => {
  res.send('Servidor Backend Rodando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
