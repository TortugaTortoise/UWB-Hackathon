/**
 * Created by Houming Ge
 */

import mysql from 'mysql'

/**
 * Access to the dataBase that was setup in the server by calling the mySQL 
 */
const connection = mysql.createConnection({
  host: 'http://catisnameofcat.tk/',
  user: 'admin',
  password: '123456789',
  database: 'takeaction'
})

export default connection
