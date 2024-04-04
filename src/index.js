import express from 'express'
import cors from 'cors';
import productsRoutes from './routes/products.routes.js'

const app = express()

// Enable CORS for all origins during development (not recommended for production)
app.use(cors()); 

app.use(express.json());

app.listen(3001)

console.log("Server running on PORT 3001");

app.get('/ping', (req, res) => res.send('pong'))

app.use(productsRoutes)
