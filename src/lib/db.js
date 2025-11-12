import mysql from 'mysql2/promise';

const DATABASE_URL='mysql://root@localhost:3306/productos'

export const db = await mysql.createConnection(DATABASE_URL)