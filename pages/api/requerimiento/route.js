//api/requerimiento/route.js
import { query } from "../../lib/db";

export default async function handler(req, res) {
  let message;
  if (req.method === "GET") {
    const requerimiento = await query({
      query:
        "SELECT ID_Detalle_ODV, ID_Orden_DVenta, CONCAT(DAY(Fecha_Orden),'-',MONTH(Fecha_Orden),'-',YEAR(Fecha_Orden)) AS Fecha, Estatus, Tipo_Prenda, Cantidad_Prenda, Informacion_Envio, Precio_Unitario, Monto_Total FROM Ordenes_DVenta JOIN Detalles_OrdenesDeVentas ON ID_Orden_DVenta = Ordenes_DVenta_ID_Orden_DVenta WHERE Estatus = 'En proceso' ORDER BY ID_Orden_DVenta ASC;",
      values: [],
    });
    res.status(200).json({ requerimiento: requerimiento });
  }
}
// UPDATE

// if (req.method === "PUT") {
//   const RequerimientoID = req.body.ID_Orden_DVenta;
//   const RequertimientoEstatus = req.body.Estatus;
//   const updateRequerimiento = await query({
//     query: "UPDATE Ordenes_DVenta SET Estatus = ? WHERE product_id = ?",
//     values: [RequertimientoEstatus, RequerimientoID],
//   });
//   const result = updateRequerimiento.affectedRows;
//   if (result) {
//     message = "success";
//   } else {
//     message = "error";
//   }
//   const product = {
//     ID_Orden_DVenta: RequerimientoID,
//     Estatus: RequertimientoEstatus,
//   };
//   res.status(200).json({ response: { message: message, product: product } });
// }

//EJEMPLOS DE COMO VAMOS HACER LO DEMAS

//   if (req.method === "POST") {
//     const productName = req.body.product_name;
//     const addProducts = await query({
//       query: "INSERT INTO products (product_name) VALUES (?)",
//       values: [productName],
//     });
//     let product = [];
//     if (addProducts.insertId) {
//       message = "success";
//     } else {
//       message = "error";
//     }
//     product = {
//       product_id: addProducts.insertId,
//       product_name: productName,
//     };
//     res.status(200).json({ response: { message: message, product: product } });
//   }

//
//   if (req.method === "DELETE") {
//     const productId = req.body.product_id;
//     const deleteProducts = await query({
//       query: "DELETE FROM products WHERE product_id = ?",
//       values: [productId],
//     });
//     const result = deleteProducts.affectedRows;
//     if (result) {
//       message = "success";
//     } else {
//       message = "error";
//     }
//     res
//       .status(200)
//       .json({ response: { message: message, product_id: productId } });
//   }
// }
