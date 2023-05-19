import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider/AuthProvider'

const Register = () => {
    const {registerUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from.pathname || '/'

    const handleSignUp = e =>{
        e.preventDefault()

        const form = e.target 
        const email = form.email.value 
        const password = form.password.value 

        registerUser(email, password)
        .then(result => {
            // const user = result.user
            // console.log(user)
            navigate(from, {replace: true})
            form.reset()
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <div className='w-full lg:px-20 px-8 py-20 bg-gray-100'>
                <div className='lg:w-2/5 mx-auto border p-10 bg-white rounded-md'>
                    <h2 className='text-4xl text-center font-bold mb-10'>Sign Up</h2>
                    <form onSubmit={handleSignUp} action="">
                        <div>
                            <label className='block mb-2' htmlFor="">Name</label>
                            <input type="text" name='name' className='border p-2 mb-4 w-full outline-none' placeholder='Enter your name' />
                        </div>
                        <div>
                            <label className='block mb-2' htmlFor="">Email</label>
                            <input type="email" name='email' className='border p-2 mb-4 w-full outline-none' placeholder='Enter your email' />
                        </div>
                        <div>
                            <label className='block mb-2' htmlFor="">Password</label>
                            <input type="password" name='password' className='border p-2 mb-4 w-full outline-none' placeholder='Enter your password' />
                        </div>
                        <div>
                            <button className='btn btn-primary w-full'>Register</button>
                        </div>
                    </form>
                    <Link to='/login'><p className='mt-2'>Already sign up? Please Log In</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Register