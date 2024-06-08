// api/inventario/stock.js

import { query } from "../../lib/db";

export default async function handlerStock(req, res) {
  if (req.method === "GET") {
    const { ID_Inventario } = req.query;

    if (!ID_Inventario) {
      return res.status(400).json({ error: "Missing ID_Inventario parameter" });
    }

    try {
      const result = await query({
        query: "SELECT Cantidad_Stock FROM Inventario WHERE ID_Inventario = ?",
        values: [ID_Inventario],
      });

      if (result.length > 0) {
        const stock = result[0].Cantidad_Stock;
        res.status(200).json({ stock });
      } else {
        res.status(404).json({ error: "Resource not found" });
      }
    } catch (error) {
      console.error("Error fetching stock:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
