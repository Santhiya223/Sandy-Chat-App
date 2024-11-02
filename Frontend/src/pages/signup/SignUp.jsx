import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup';


const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        userName: '',
        password: '',
        confirmPassword: '',
        gender: '' 
    });

    const handleCheckBoxOnchange = (gender) => {
        setInputs({...inputs, gender: gender
        })
    };

    const {loading, signup} = useSignup();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);     
    };

  return (
    <div className=' flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Sign Up
                <span className='text-blue-500'> ChatApp</span>
            </h1>

            <form onSubmit={handleFormSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-white'>Full Name</span>
                    </label>
                    <input type='text' placeholder='Santhiya' className='w-full input bg-black text-white placeholder-gray-500 focus:outline-gray-900 focus:border-gray-900 input-bordered h-10 '
                        value={inputs.fullName}
                        onChange={(e)=> setInputs({...inputs, fullName: e.target.value})}></input>
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-white'>Username</span>
                    </label>
                    <input type='text' placeholder='sandy' className='w-full input bg-black text-white placeholder-gray-500 focus:outline-gray-900 focus:border-gray-900 input-bordered h-10 '
                        value={inputs.userName}
                        onChange={(e)=> {
                            setInputs({...inputs, userName: e.target.value})
                        }}></input>
                </div>

                <div>
                    <label className='label'>
                        <span className='text-base label-text text-white'>Password</span>
                    </label>
                    <input type='password' placeholder='Enter Password' className='w-full input bg-black text-white placeholder-gray-500 focus:outline-gray-900 focus:border-gray-900 input-bordered h-10 '
                        value={inputs.password}
                        onChange={(e) => {
                            setInputs({...inputs, password: e.target.value})
                        }}></input>
                </div>

                <div>
                    <label className='label'>
                        <span className='text-base label-text text-white'>Confirm Password</span>
                    </label>
                    <input type='password' placeholder='Confirm Password' className='w-full input bg-black text-white placeholder-gray-500 focus:outline-gray-900 focus:border-gray-900 input-bordered h-10 '
                        value={inputs.confirmPassword}
                        onChange={(e)=> {
                            setInputs({...inputs, confirmPassword: e.target.value})
                        }}></input>
                </div>

                 <GenderCheckbox onCheckboxChanged= {handleCheckBoxOnchange} selectedCheckbox = {inputs.gender}/>
                <Link to={"/login"}  href = "#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                    Already have an account?
                </Link>

                <div>
                    <button className='btn btn-block btn-sm mt-2 bg-black text-white'
                    disabled={loading}>{loading ? <span className='loading loading-spinner'></span>: "Sign Up"}</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp

//START UP CODE FOR SIGNUP COMPONENT

// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// const SignUp = () => {
//   return (
//     <div className=' flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
//             <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                 Sign Up
//                 <span className='text-blue-500'> ChatApp</span>
//             </h1>

//             <form>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text text-white'>Full Name</span>
//                     </label>
//                     <input type='text' placeholder='Santhiya' className='w-full input bg-black text-white placeholder-gray-500 focus:outline-gray-900 focus:border-gray-900 input-bordered h-10 '></input>
//                 </div>

//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text text-white'>Username</span>
//                     </label>
//                     <input type='text' placeholder='sandy' className='w-full input bg-black text-white placeholder-gray-500 focus:outline-gray-900 focus:border-gray-900 input-bordered h-10 '></input>
//                 </div>

//                 <div>
//                     <label className='label'>
//                         <span className='text-base label-text text-white'>Password</span>
//                     </label>
//                     <input type='password' placeholder='Enter Password' className='w-full input bg-black text-white placeholder-gray-500 focus:outline-gray-900 focus:border-gray-900 input-bordered h-10 '></input>
//                 </div>

//                 <div>
//                     <label className='label'>
//                         <span className='text-base label-text text-white'>Confirm Password</span>
//                     </label>
//                     <input type='password' placeholder='Confirm Password' className='w-full input bg-black text-white placeholder-gray-500 focus:outline-gray-900 focus:border-gray-900 input-bordered h-10 '></input>
//                 </div>

//                  <GenderCheckbox />
//                 <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//                     Already have an account?
//                 </a>

//                 <div>
//                     <button className='btn btn-block btn-sm mt-2 bg-black text-white'>Sign Up</button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default SignUp