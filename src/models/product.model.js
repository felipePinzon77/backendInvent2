import { object, string, number } from "yup";

export const productSchema = object().shape({
    nombre: string().strict(true).required(),
    descripcion: string().strict(true).required(),
    precio: number().strict(true).positive().required(),
    unidad_medida: string().strict(true).required(),
    proveedor_id: number().strict(true).positive().required(),
    licencia_certificacion_id: number().strict(true).positive().required(),
  });