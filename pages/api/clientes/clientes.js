// import mysql from "mysql2/promise"; //Este es el modulo que se utiliza para hacer la conexión a la base de datos, instala el modulo con npm install mysql2

// const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env; // Obtiene las variables de entorno del archivo .env para mantener la seguridad de las credenciales
// export default async function GET(req, res) {
//   const pool = mysql.createPool({
//     host: DB_HOST,
//     database: DB_NAME,
//     user: DB_USER,
//     port: DB_PORT,
//     password: DB_PASSWORD,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
//   });

//   // Siempre vas a manejar la const pool antes de hacer la consulta a la base de datos porque no logré hacer el componente de conexión a la base de datos
//   // desde el export default async function handler(req, res) { empieza el código para obtener los datos de la base de datos
//   //Siempre que vayas a hacer una consulta a la base de datos, debes hacerlo dentro de un bloque try-catch para manejar los errores
//   // Siempre que hagas una consulta a la base de datos, debes obtener una conexión del pool de conexiones de la base de datos
//   // Siempre que hagas una consulta a la base de datos, debes liberar la conexión a la base de datos cuando termines la consulta
//   // Siempre que hagas una consulta a la base de datos, debes manejar los errores que puedan ocurrir durante la consulta
//   // 


//   try {
//     const connection = await pool.getConnection(); // Obtiene una conexión del pool de conexiones de la base de datos
//     const [rows, fields] = await connection.query( // Ejecuta la consulta a la base de datos y obtiene los resultados de la misma en la variable rows y fields (columnas y campos de la tabla)
//       "SELECT ID_cliente as ID, Razon_Social, correo, Numero_Celular FROM clientes;" // esto es una consulta normalita de SQL
//     );

//     if (rows.length > 0) {
//       const clientes = rows.map((row) => ({ // esto es para mapear los resultados de la consulta a un formato JSON
//         ID: row.ID, // aqui colocamos los nombres de las columnas de la tabla
//         nombre: row.Razon_Social, // igual aqui
//         Correo_Cliente: row.correo, // y aqui 
//         Numero_Celular: row.Numero_Celular, // y aqui
//       }));

//       res.status(200).json({ clientes }); // esto es lo que se envía como respuesta al cliente (lo que se muestra en el navegador)
//     } else {
//       res.status(404).end(); // esto es lo que se envía como respuesta al cliente (lo que se muestra en el navegador pero cuando da error)
//     }

//     connection.release(); // esto libera la conexión a la base de datos cuando termina la consulta
//   } catch (error) {
//     console.error("Error al obtener productos:", error); // esto es para mostrar el error en la consola del servidor
//     res.status(500).end(); // esto es lo que se envía como respuesta al cliente (lo que se muestra en el navegador pero cuando da error (otro error))
//   } finally {
//     pool.end(); // esto finaliza la conexión a la base de datos cuando termina la consulta
//   }
// }
