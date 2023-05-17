import fs from 'fs';
import path from 'path';
import { Pool } from 'mysql2/promise';
import connect from './connection';

export const readQueries = (filePath = '../database/schema.sql') => {
  const importPath = path.resolve(__dirname, filePath);
  const seedDbContent = fs.readFileSync(importPath).toString();
  const queries = seedDbContent.split(';').filter((p) => p.trim());
  return queries;
};

export const executeQueries = async (conn: Pool, queries = readQueries()) => {
  try {
    for (let i = 0; i < queries.length; i += 1) {
      const query = queries[i];
      await conn.query(query);
    }
  } catch (err) {
    console.error('Failed to execute database queries', err);
  }
  if (require.main === module) {
    executeQueries(connect)
      .then(async () => {
        console.info('Success to execute queries');
        await connect.end();
        process.exit(0);
      });
  }
};
