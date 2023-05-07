/**
 * Created by Dong Nguyen
 * redesign by Houming Ge
 */

/**
 * component to use the API route in the login page
 */
'use client'
import './loginSignup.css'
import { useState } from 'react'

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

    const handleOnChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value)
    }

    const handleOnChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setUserPassword(e.target.value)
    }
    const handleLogin = async () => {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: userEmail, password: userPassword })
        })

        const data = await response.json()

        if (response.ok) {
            setIsUserPasswordEmailValid(true)
            // Do something after successful login
        } else {
            setIsUserPasswordEmailValid(false)
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