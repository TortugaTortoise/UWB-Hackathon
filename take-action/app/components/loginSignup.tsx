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


    // return (
    //     <div style={closeFormStyle}>
    //         {/**modal */}
    //         <div className="modal" onClick={handleModal}></div>
    //         {/*form */}
    //         <div className="loginSignupForm py-10 px-6">
    //             {/*transition buttons */}
    //             <div className='loginSignupForm__buttons flex '>
    //                 <button className='login__button'>Login</button>
    //                 <button className='signup__button'>Sign up</button>
    //             </div>
    //             {/*login form */}
    //             <div className='flex flex-col login__forms '>
    //                 {!isUserPasswordEmailValid && <p>Invalid email or password</p>}
    //                 <input
    //                     type='text'
    //                     placeholder='email'
    //                     className='my-2 p-1 text-lg'
    //                     value={userEmail}
    //                     onChange={handleOnChangeEmail}
    //                 />
    //                 <input
    //                     type='text'
    //                     placeholder='password'
    //                     className='my-2 p-1 text-lg'
    //                     value={userPassword}
    //                     onChange={handleOnChangePassword}
    //                 />
    //                 <p className='my-5'>forgot password</p>
    //                 <button
    //                     className='py-2'
    //                     onClick={handleLogin}
    //                 >Login</button>
    //             </div>

    //             {/*signup form */}
    //         </div>
    //     </div>
    // )
}
