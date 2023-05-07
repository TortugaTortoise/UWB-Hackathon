// pages/api/login.js
import db from '../../config/db'

export default async function handler(req, res) {
    const { email, password } = req.body

    try {
        const query = `SELECT * FROM users WHERE email = ? AND password = ?`
        db.query(query, [email, password], (error, results, fields) => {
            if (error) {
                console.log(error)
                res.status(500).json({ message: 'Internal server error' })
            } else {
                if (results.length > 0) {
                    res.status(200).json({ message: 'Success' })
                } else {
                    res.status(401).json({ message: 'Invalid email or password' })
                }
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error' })
    }
}
