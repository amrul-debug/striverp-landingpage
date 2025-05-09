import express from 'express';
import cors from 'cors';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/servers', async (req, res) => {
  try {
    const response = await fetch('https://api.open.mp/servers');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching server data:', error);
    res.status(500).json({ error: 'Failed to fetch server data' });
  }
});

app.get('/api/servers/:ip', async (req, res) => {
  try {
    const { ip } = req.params;
    const response = await fetch('https://api.open.mp/servers');
    const servers = await response.json();
    
    const server = servers.find(s => s.ip === ip);
    
    if (!server) {
      return res.status(404).json({ error: 'Server not found' });
    }
    
    res.json(server);
  } catch (error) {
    console.error('Error fetching server details:', error);
    res.status(500).json({ error: 'Failed to fetch server details' });
  }
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('dist'));
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});