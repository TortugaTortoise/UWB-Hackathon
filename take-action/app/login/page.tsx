/**
 * Created by Dong Nguyen
 * redesign by Houming Ge
 */

/**
 * component to use the API route in the login page
 */
'use client'
import './loginSignup.css'
import { SetStateAction, useState } from 'react'

const mysql = require('mysql2');

const pool = mysql.createConnection({
    host: 'catisnameofcat.tk',
    user: 'admin',
    password: '123456789',
    database: 'wpdb'
});

export default function loginSignup() {
    const [isCloseForm, setIsCloseForm] = useState(false)
    const [isUserPasswordEmailValid, setIsUserPasswordEmailValid] = useState(true)
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const closeFormStyle = {
        'display': isCloseForm ? 'none' : 'block'
    }

    const handleModal = () => {
        setIsCloseForm(!isCloseForm)
    }

    const handleOnChangeEmail = (e: { target: { value: SetStateAction<string>; }; }) => {
        setUserEmail(e.target.value)
    }
    const handleOnChangePassword = (e: { target: { value: SetStateAction<string>; }; }) => {
        console.log(e.target.value)
        setUserPassword(e.target.value)

    }
    const handleLogin = async () => {
        console.log(userEmail, userPassword)
        let conn;
        try {
            conn = await pool.getConnection();
            const rows = await conn.query('SELECT * FROM users WHERE email = ? AND password = ?', [userEmail, userPassword]);
            if (rows.length === 0) {
                setIsUserPasswordEmailValid(false);
            } else {
                setIsUserPasswordEmailValid(true);
            }
        } catch (err) {
            throw err;
        } finally {
            if (conn) return conn.end();
        }
    }

    return (
        <div style={closeFormStyle}>
            {/**modal */}
            <div className="modal" onClick={handleModal}></div>
            {/*form */}
            <div className="loginSignupForm py-10 px-6">
                {/*transition buttons */}
                <div className='loginSignupForm__buttons flex '>
                    <button className='login__button'>Login</button>
                    <button className='signup__button'>Sign up</button>
                </div>
                {/*login form */}
                <div className='flex flex-col login__forms '>
                    {!isUserPasswordEmailValid && <p>Invalid email or password</p>}
                    <input
                        type='text'
                        placeholder='email'
                        className='my-2 p-1 text-lg'
                        value={userEmail}
                        onChange={handleOnChangeEmail}
                    />
                    <input
                        type='text'
                        placeholder='password'
                        className='my-2 p-1 text-lg'
                        value={userPassword}
                        onChange={handleOnChangePassword}
                    />
                    <p className='my-5'>forgot password</p>
                    <button
                        className='py-2'
                        onClick={handleLogin}
                    >Login</button>
                </div>

                {/*signup form */}
            </div>
        </div>
    )
}



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