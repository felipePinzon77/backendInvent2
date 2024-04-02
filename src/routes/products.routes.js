import { Router } from "express";
import { getProducts, createProducts, updateProducts, deleteProducts, getProductById } from "../controllers/products.controllers.js";

const router = Router();

router.get('/productos', getProducts)

router.get('/productos/:id', getProductById)

router.post('/productos', createProducts)

router.put('/productos/:id', updateProducts)

router.delete('/productos/:id', deleteProducts)

export default router;