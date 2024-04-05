// Import necessary modules
import express from 'express';
import cors from 'cors';
import productsRoutes from './routes/products.routes.js';
import dotenv from "dotenv";

// Load environment variables early
dotenv.config();

const app = express();


app.use(cors());

app.use(express.json());

const port = parseInt(process.argv[2]);

if (!port) {
  console.error('Error: Missing port argument');
  process.exit(1); 
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get('/ping', (req, res) => res.send('pong'));

app.use(productsRoutes);
