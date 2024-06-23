const express = require('express');
const path = require('path');

const app = express();

// Define la carpeta que contiene los archivos estáticos de React
const buildPath = path.join(__dirname, '../client/build');

// Sirve los archivos estáticos de la carpeta 'client/build'
app.use(express.static(buildPath));

// Ruta para servir 'index.html' en cualquier ruta que no coincida con los archivos estáticos
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Configura el puerto en el que escuchará el servidor
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
