/**
 * Created by Houming Ge
 */

/**
 * A Server side code
 * an API route that will handle the database queries
 */
import { createConnection } from 'mysql2';
import { NextApiRequest, NextApiResponse } from 'next';
import dotenv from 'dotenv';

dotenv.config();

const connection = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // handle GET request
        connection.query('SELECT * FROM users', (error, results) => {
            if (error) throw error;
            res.status(200).json(results);
        });
    } else if (req.method === 'POST') {
        // handle POST request
        const { email, password } = req.body;
        connection.query(
            'INSERT INTO users (email, password) VALUES (?, ?)',
            [email, password],
            (error, results) => {
                if (error) throw error;
                res.status(200).json({ message: 'User created successfully.' });
            }
        );
    }
}
