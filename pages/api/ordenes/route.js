// api/orderventa/route.js

import { query } from "../../lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const ordenes = await query({
      query: "SELECT ID_Orden_DVenta, CONCAT(DAY(Fecha_Orden),'-',MONTH(Fecha_Orden),'-',YEAR(Fecha_Orden)) AS Fecha, Estatus, Tipo_Prenda, Cantidad_Prenda, Informacion_Envio, Precio_Unitario, Monto_Total FROM Ordenes_DVenta JOIN Detalles_OrdenesDeVentas ON Ordenes_DVenta.ID_Orden_DVenta = Detalles_OrdenesDeVentas.Ordenes_DVenta_ID_Orden_DVenta  ORDER BY ID_Orden_DVenta ASC",
      values: [],
    });
    res.status(200).json({ ordenes: ordenes });
  }
}