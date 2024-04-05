import {conn, pool} from '../db/db.js'
import { productSchema } from '../models/product.model.js';

export const getProducts = async (req, res) => {
    const [rows] = await conn.query('SELECT * FROM productos')
    res.send(rows);
}
export const getProductById = async (req, res) => {
    const [row] = await conn.query('SELECT * FROM productos WHERE productoid = ?', [req.params.id])
    res.send(row)
};

export const createProducts = async (req, res) => {
    try {
      const productData = await productSchema.validate(req.body, { abortEarly: false });

      conn.execute('INSERT INTO productos(nombre, descripcion, precio, unidadmedida, proveedorid, licenciacertificacionid) VALUES (?, ?, ?, ?, ?, ?)', [productData.nombre, productData.descripcion, productData.precio, productData.unidad_medida, productData.proveedor_id, productData.licencia_certificacion_id]);
      res.send('Post succes');  
    } catch (error) { 
      if (error.inner) {
        return res.status(400).send(error.inner.map(err => err.message).join(', '));
      }
      return res.status(500).send(error.message);
    }
};

export const updateProducts = async (req, res) => {
    try {
      const productData = await productSchema.validate(req.body, { abortEarly: false });

      conn.execute('UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, unidadmedida = ?, proveedorid = ?, licenciacertificacionid = ? WHERE productoid = ?', [productData.nombre, productData.descripcion, productData.precio, productData.unidad_medida, productData.proveedor_id, productData.licencia_certificacion_id, req.params.id]);
      res.send('Update succes');  
    } catch (error) {
      if (error.inner) {
        return res.status(400).send(error.inner.map(err => err.message).join(', '));
      }
      return res.status(500).send(error.message);
    }

  };
export const deleteProducts = async (req, res) => {
  const [rowss] = await conn.query('DELETE FROM productos WHERE productoid = ?', [req.params.id])
  res.send(rowss)
};