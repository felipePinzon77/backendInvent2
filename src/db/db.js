import { createPool } from "mysql2/promise";
import dotenv from 'dotenv';

dotenv.config();

export const pool = createPool({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT
})

export const conn = createPool({
  host: process.env.MYSQL_HOST_CLOUD,
  database: process.env.MYSQL_DATABASE_CLOUD,
  user: process.env.MYSQL_USER_CLOUD,
  password: process.env.MYSQL_PASSWORD_CLOUD,
  port: process.env.MYSQL_PORT_CLOUD
})

