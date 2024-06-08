import mysql from "mysql2/promise"; //Aquí intenté hacer el componente de conexión a la base de datos, pero no logré hacerlo funcionar

//const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

  const pool = mysql.createPool({
    host: DB_HOST,
    database: DB_NAME,
    user: DB_USER,
    port: DB_PORT,
    password: DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

const connectionPool = mysql.createPool(pool);

export default connectionPool;
