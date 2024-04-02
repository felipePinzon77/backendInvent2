import express from 'express'
import productsRoutes from './routes/products.routes.js'

const app = express()


app.use(express.json());

app.listen(3001)

console.log("Server running on PORT 3001");

app.get('/ping', (req, res) => res.send('pong'))

app.use(productsRoutes)
