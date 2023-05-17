import mysql from 'mysql2/promise';
import dotEnv from 'dotenv';
import { executeQueries, readQueries } from './queryUtils';
dotEnv.config();

const connect = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: Number(process.env.MYSQL_PORT || 3306)
});

if (['dev', 'development'].includes(process.env.NODE_ENV || 'dev')) {
  const upDatabase = readQueries('../database/schema.sql');
  executeQueries(connect, upDatabase)
    .then(() => executeQueries(connect));
}

export default connect;
