//api/personalPOST/route.js

import { query } from "../../lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Obtén los datos necesarios del cuerpo de la solicitud
      const {
        Nombre_Completo,
        Cargo,
        Departamento,
        Fecha_Contratacion,
        Numero_Telefono,
        Correo_Electronico,
        Certificacion_Habilidad,
        Estatus,
        Horario,
        Tipos_Personal_ID_Tipo_Personal,
      } = req.body;

      // Realiza la inserción en la tabla "Personal"
      const addPersonal = await query({
        query: `
          INSERT INTO produccion.Personal (
            Nombre_Completo,
            Cargo,
            Departamento,
            Fecha_Contratacion,
            Numero_Telefono,
            Correo_Electronico,
            Certificacion_Habilidad,
            Estatus,
            Horario,
            Tipos_Personal_ID_Tipo_Personal
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,
        values: [
          Nombre_Completo,
          Cargo,
          Departamento,
          Fecha_Contratacion,
          Numero_Telefono,
          Correo_Electronico,
          Certificacion_Habilidad,
          Estatus,
          Horario,
          Tipos_Personal_ID_Tipo_Personal,
        ],
      });

      // Verifica si la inserción fue exitosa
      let message;
      let personal = {};

      if (addPersonal.insertId) {
        message = "success";
        personal = {
          personal_id: addPersonal.insertId,
          Nombre_Completo,
          Cargo,
          Departamento,
          Fecha_Contratacion,
          Numero_Telefono,
          Correo_Electronico,
          Certificacion_Habilidad,
          Estatus,
          Horario,
          Tipos_Personal_ID_Tipo_Personal,
        };
      } else {
        message = "error";
      }

      // Envía la respuesta al cliente
      res.status(200).json({ response: { message, personal } });
    } catch (error) {
      console.error("Error en el manejo de la solicitud:", error);
      res.status(500).json({ response: { message: "error" } });
    }
  } else {
    res.status(405).json({ response: { message: "Method Not Allowed" } });
  }
}
