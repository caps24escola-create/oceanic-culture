import.meta.dirname
import express from 'express';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();

// Home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Credit Page
app.get('/credits', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'credits.html'));
})

// Games
app.get('/game/ocean-cleaning', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'game', 'ocean-cleaning.html'));
});

app.get('/game/fish-corals', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'game', 'fish-corals.html'));
});

app.get('/game/oceanic-memory', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'game', 'oceanic-memory.html'));
});

// Error handling
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});


const port = parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});