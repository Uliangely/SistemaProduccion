// api/asignacionesPOST/route.js
import { query } from "../../lib/db";

export default async function handler(req, res) {
  console.log("help", req.body)
  if (req.method === "POST") {
    try {
      // Obtén los datos necesarios del cuerpo de la solicitud

      const { personalIds, recursosIds, requerimientoId } = req.body;

      for (let auxUserId = 0; auxUserId < personalIds.length; auxUserId++) {
        // for (let auxInsumosId = 0; auxInsumosId < recursosIds.length; auxInsumosId++) {
          console.log("query", personalIds[auxUserId],requerimientoId)
          // console.log("query", personalIds[auxUserId], recursosIds[auxInsumosId],requerimientoId)
          
          await query({
            query: `
            INSERT INTO Detalles_OrdenesDeVentas_has_Personal (
              Detalles_OrdenesDeVentas_ID_Detalle_ODV,
              Personal_ID_Personal
              ) VALUES (?, ?)
            `,
            values: [requerimientoId, personalIds[auxUserId]],
          })
        // }
      }

      for (let auxInsumosId = 0; auxInsumosId < recursosIds.length; auxInsumosId++)  {
      console.log("query",recursosIds[auxInsumosId],requerimientoId)
      const addRecurso = await query({
        query: `
          INSERT INTO Detalles_OrdenesDeVentas_has_Inventario (
            Detalles_OrdenesDeVentas_ID_Detalle_ODV,
            Inventario_ID_Inventario
            ) VALUES (?, ?)
        `,
        values: [requerimientoId, recursosIds[auxInsumosId]],
      })
    } 


      // Envía la respuesta al cliente
      res.status(200).json({ response: { "save" : "sdsadsd"} });
    } catch (error) {
      console.log(error)
      console.error("Error en el manejo de la solicitud:", error);
      res.status(500).json({ response: { message: "error" } });
    }
  } else {
    res.status(405).json({ response: { message: "Method Not Allowed" } });
  }
}
