const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

// Servir les fichiers statiques depuis le dossier "public"
app.use(express.static(path.join(__dirname, 'public')));

// Route par défaut
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Serveur démarré: http://localhost:${port}`);
});