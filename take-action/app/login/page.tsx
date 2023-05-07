/**
 * Created by Dong Nguyen
 * redesign by Houming Ge
 */

/**
 * component to use the API route in the login page
 */
import React, { useState } from 'react';
import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database_name'
});

// connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
    console.log('Connected to database as id ' + connection.threadId);
});

function LoginRegistrationForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const handleRegisterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // insert user information into the database
        const sql = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
        connection.query(sql, [username, email, password], (error, results, fields) => {
            if (error) {
                console.error('Error inserting user: ' + error.stack);
                return;
            }
            // console.log('User registered with ID ' + results.insertId);
        });
    };

    const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // query the database to check if the user exists
        const sql = `SELECT * FROM users WHERE username = ? AND password = ?`;
        connection.query(sql, [loginUsername, loginPassword], (error, results, fields) => {
            if (error) {
                console.error('Error querying database: ' + error.stack);
                return;
            }
            if (results.toString().length > 0) {
                console.log('User logged in');
            } else {
                console.log('Invalid username or password');
            }
        });
    };

    return (
        <div className="container">
            <form className="form" onSubmit={handleLoginSubmit}>
                <h2>Login</h2>
                <input type="text" placeholder="Username" value={loginUsername} onChange={e => setLoginUsername(e.target.value)} required />
                <input type="password" placeholder="Password" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
            <form className="form" onSubmit={handleRegisterSubmit}>
                <h2>Register</h2>
                <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default LoginRegistrationForm;

// 'use client'
// import './loginSignup.css'
// import { SetStateAction, useState } from 'react'
// import mysql from 'mysql2/promise'

// const dbConfig = {
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//     connectionLimit: 10 // maximum number of connections in the pool
// }

// const pool = mysql.createPool(dbConfig)

// async function loginUser(email: string, password: string) {
//     const conn = await pool.getConnection()
//     try {
//         const [rows, fields] = await conn.execute(
//             'SELECT id, name, email FROM users WHERE email = ? AND password = ?',
//             [email, password]
//         )
//         return rows
//     } catch (err) {
//         console.error(err)
//         throw err
//     } finally {
//         conn.release()
//     }
// }

// export default function loginSignup() {
//     const [isCloseForm, setIsCloseForm] = useState(false)
//     const [isUserPasswordEmailValid, setIsUserPasswordEmailValid] = useState(true)
//     const [userEmail, setUserEmail] = useState('')
//     const [userPassword, setUserPassword] = useState('')

//     const closeFormStyle = {
//         'display': isCloseForm ? 'none' : 'block'
//     }

//     const handleModal = () => {
//         setIsCloseForm(!isCloseForm)
//     }

//     const handleOnChangeEmail = (e: { target: { value: SetStateAction<string>; }; }) => {
//         setUserEmail(e.target.value)
//     }
//     const handleOnChangePassword = (e: { target: { value: SetStateAction<string>; }; }) => {
//         console.log(e.target.value)
//         setUserPassword(e.target.value)

//     }
//     const handleLogin = async () => {
//         try {
//             const user = await loginUser(userEmail, userPassword)
//             if (user) {
//                 setIsUserPasswordEmailValid(true)
//                 console.log('User logged in:', user)
//                 // TODO: Redirect the user to the home page
//             } else {
//                 setIsUserPasswordEmailValid(false)
//                 console.log('Invalid email or password')
//             }
//         } catch (err) {
//             setIsUserPasswordEmailValid(false)
//             console.error(err)
//         }
//     }

//     return (
//         <div style={closeFormStyle}>
//             {/**modal */}
//             <div className="modal" onClick={handleModal}></div>
//             {/*form */}
//             <div className="loginSignupForm py-10 px-6">
//                 {/*transition buttons */}
//                 <div className='loginSignupForm__buttons flex '>
//                     <button className='login__button'>Login</button>
//                     <button className='signup__button'>Sign up</button>
//                 </div>
//                 {/*login form */}
//                 <div className='flex flex-col login__forms '>
//                     {!isUserPasswordEmailValid && <p>Invalid email or password</p>}
//                     <input
//                         type='text'
//                         placeholder='email'
//                         className='my-2 p-1 text-lg'
//                         value={userEmail}
//                         onChange={handleOnChangeEmail}
//                     />
//                     <input
//                         type='text'
//                         placeholder='password'
//                         className='my-2 p-1 text-lg'
//                         value={userPassword}
//                         onChange={handleOnChangePassword}
//                     />
//                     <p className='my-5'>forgot password</p>
//                     <button
//                         className='py-2'
//                         onClick={handleLogin}
//                     >Login</button>
//                 </div>

//                 {/*signup form */}
//             </div>
//         </div>
//     )
// }



//BackUP
// //'use client'
// import './loginSignup.css'
// import { useState } from 'react'

// export default function loginSignup() {
//     const [isCloseForm, setIsCloseForm] = useState(false)
//     const [isUserPasswordEmailValid, setIsUserPasswordEmailValid] = useState(true)
//     const [userEmail, setUserEmail] = useState('')
//     const [userPassword, setUserPassword] = useState('')

//     const closeFormStyle = {
//         'display': isCloseForm ? 'none' : 'block'
//     }

//     const handleModal = () => {
//         setIsCloseForm(!isCloseForm)
//     }

//     const handleOnChangeEmail = (e) => {
//         setUserEmail(e.target.value)
//     }
//     const handleOnChangePassword = (e) => {
//         console.log(e.target.value)
//         setUserPassword(e.target.value)

//     }
//     const handleLogin = async () => {
//         console.log(userEmail, userPassword)
//         const token = await fetch('//// server url', {
//             headers: {
//                 email: userEmail,
//                 password: userPassword
//             }
//         })
//         if (token == 'Error') {
//             setIsUserPasswordEmailValid(false)
//         }
//         else {
//             isUserPasswordEmailValid(true)
//         }
//     }

//     return (
//         <div style={closeFormStyle}>
//             {/**modal */}
//             <div className="modal" onClick={handleModal}></div>
//             {/*form */}
//             <div className="loginSignupForm py-10 px-6">
//                 {/*transition buttons */}
//                 <div className='loginSignupForm__buttons flex '>
//                     <button className='login__button'>Login</button>
//                     <button className='signup__button'>Sign up</button>
//                 </div>
//                 {/*login form */}
//                 <div className='flex flex-col login__forms '>
//                     {!isUserPasswordEmailValid && <p>Invalid email or password</p>}
//                     <input
//                         type='text'
//                         placeholder='email'
//                         className='my-2 p-1 text-lg'
//                         value={userEmail}
//                         onChange={handleOnChangeEmail}
//                     />
//                     <input
//                         type='text'
//                         placeholder='password'
//                         className='my-2 p-1 text-lg'
//                         value={userPassword}
//                         onChange={handleOnChangePassword}
//                     />
//                     <p className='my-5'>forgot password</p>
//                     <button
//                         className='py-2'
//                         onClick={handleLogin}
//                     >Login</button>
//                 </div>

//                 {/*signup form */}
//             </div>
//         </div>
//     )
// }
// //