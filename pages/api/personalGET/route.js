// api/personalGET/route.js

import { query } from "../../lib/db";

export default async function handler(req, res) { 
  if (req.method === "GET") {
    const personal = await query({
      query: "SELECT ID_Personal, Nombre_Completo, Estatus FROM Personal",
      values: [],
    });
    res.status(200).json({ personal: personal });
  }
}