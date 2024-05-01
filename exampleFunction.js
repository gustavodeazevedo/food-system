const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });

// Função para lidar com solicitações HTTP
const yourFunction = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // Sua lógica da função aqui
    res.status(200).send('Hello from Firebase!');
  });
});

// Exportar a função para que ela seja acessível externamente
module.exports = {
  yourFunction
};
