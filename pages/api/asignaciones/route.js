// api/asignaciones/route.js


import { query } from "../../lib/db";

export default async function handler(req, res) { 
  if (req.method === "GET") {
    const asignaciones = await query({
      query: `
      SELECT 
        d.ID_Detalle_ODV AS Requerimiento,
        d.Tipo_Prenda,
        d.Cantidad_Prenda,
        d.Informacion_Envio,
        o.Fecha_Orden,
        i.Nombre as Nombre_Insumo,
        i.Descripcion,
        i.Categoria,
        p.Nombre_Completo AS Nombre_Personal,
        p.Tipos_Personal_ID_Tipo_Personal AS Tipos_Personal,
        p.Horario
      FROM Detalles_OrdenesDeVentas AS d
      INNER JOIN Ordenes_DVenta AS o ON d.Ordenes_DVenta_ID_Orden_DVenta = o.ID_Orden_DVenta
      LEFT JOIN Detalles_OrdenesDeVentas_has_Inventario AS di ON d.ID_Detalle_ODV = di.Detalles_OrdenesDeVentas_ID_Detalle_ODV
      LEFT JOIN Inventario AS i ON di.Inventario_ID_Inventario = i.ID_Inventario
      LEFT JOIN Detalles_OrdenesDeVentas_has_Personal AS dp ON d.ID_Detalle_ODV = dp.Detalles_OrdenesDeVentas_ID_Detalle_ODV
      LEFT JOIN Personal AS p ON dp.Personal_ID_Personal = p.ID_Personal
      GROUP BY ID_Detalle_ODV;
    `,
      values: [],
    });
    res.status(200).json({ asignaciones: asignaciones });
  }
}

// import { query } from "../../lib/db";

// export default async function handler(req, res) {
//   let message;
//   if (req.method === "GET") {
//     const requerimientos = await query({
//       query: "SELECT ID_Detalle_ODV AS Requerimiento, Tipo_Prenda, Cantidad_Prenda, Informacion_Envio, Ordenes_DVenta.Fecha_Orden FROM Detalles_OrdenesDeVentas INNER JOIN Ordenes_DVenta ON Detalles_OrdenesDeVentas.Ordenes_DVenta_ID_Orden_DVenta = Ordenes_DVenta.ID_Orden_DVenta",
//       values: [], 
//     });

//     const personal = await query({
//       query: "SELECT DISTINCT Inventario.Nombre, Inventario.Descripcion, Inventario.Categoria FROM Detalles_OrdenesDeVentas_has_Inventario INNER JOIN Inventario ON Detalles_OrdenesDeVentas_has_Inventario.Inventario_ID_Inventario = Inventario.ID_Inventario",
//       values: [], 
//     });

//     const recursos = await query({
//       query: "SELECT DISTINCT Personal.Nombre_Completo AS Nombre, Personal.Tipos_Personal_ID_Tipo_Personal AS Tipos_Personal, Personal.Horario FROM Detalles_OrdenesDeVentas_has_Personal INNER JOIN Personal ON Detalles_OrdenesDeVentas_has_Personal.Personal_ID_Personal =Personal.ID_Personal",
//       values: [], 
//     });

//     res.status(200).json({ requerimientos: requerimientos });
//     res.status(200).json({ personal: personal });
//     res.status(200).json({ recursos: recursos });
//   }
// }