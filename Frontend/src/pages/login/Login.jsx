import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const {loading, login} = useLogin();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        await login({userName,password});
    };

  return (
    <div className=' flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className="w-full p-6  shadow-md bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Login
                <span className='text-blue-500'> ChatApp</span>
            </h1>

            <form onSubmit={handleFormSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-white'>Username</span>
                    </label>
                    <input type='text' placeholder='Enter username' className='w-full input bg-black text-white placeholder-gray-500 focus:outline-gray-900 focus:border-gray-900 input-bordered h-10 '
                    value={userName}
                    onChange={(e) => {setUserName(e.target.value)}}></input>
                </div>

                <div>
                    <label className='label'>
                        <span className='text-base label-text text-white'>Password</span>
                    </label>
                    <input type='password' placeholder='Enter Password' className='w-full input bg-black text-white placeholder-gray-500 focus:outline-gray-900 focus:border-gray-900 input-bordered h-10 '
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}></input>
                </div>

                <Link to = {"/signup"}  href = "#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                    {"Don't"} have an account?
                </Link>

                <div>
                    <button className='btn btn-block btn-sm mt-2 bg-black text-white'
                    disabled={loading}>{loading ? (<span className='loading loading-spinner'></span>) : "Login"}</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login



//STARTER CODE FOR THIS FILE

// import React from 'react'

// const Login = () => {
//   return (
//     <div className=' flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
//             <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                 Login
//                 <span className='text-blue-500'>Chat App</span>
//             </h1>

//             <form>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text text-white'>Username</span>
//                     </label>
//                     <input type='text' placeholder='Enter username' className='w-full input bg-black text-white placeholder-gray-500 focus:outline-gray-900 focus:border-gray-900 input-bordered h-10 '></input>
//                 </div>

//                 <div>
//                     <label className='label'>
//                         <span className='text-base label-text text-white'>Password</span>
//                     </label>
//                     <input type='password' placeholder='Enter Password' className='w-full input bg-black text-white placeholder-gray-500 focus:outline-gray-900 focus:border-gray-900 input-bordered h-10 '></input>
//                 </div>

//                 <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//                     {"Don't"} have an account?
//                 </a>

//                 <div>
//                     <button className='btn btn-block btn-sm mt-2 bg-black text-white'>Login</button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Login