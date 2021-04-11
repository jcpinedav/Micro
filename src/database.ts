import { createPool } from 'mysql2/promise';

export async function connect() {
    const connection = await createPool({
        host: 'tsdatabase.cttdv63upq5i.us-east-1.rds.amazonaws.com',
        user: 'admin',
        password: 'arquitectura1234',
        database: 'tsbd',
        connectionLimit: 10
    });
    return connection;
}