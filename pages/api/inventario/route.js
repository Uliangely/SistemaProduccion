// api/inventario/route.js

import { query } from "../../lib/db";
import handlerStock from "./stock";


export default async function handler(req, res) {
  if (req.method === "GET") {
    const inventario = await query({
      query: "SELECT * FROM Inventario",
      values: [],
    });
    res.status(200).json({ recurso: inventario });
  }
}

