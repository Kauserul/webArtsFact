import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider/AuthProvider'

const Login = () => {
    const {logIn} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from.pathname || '/'

    const handleLogIn = e =>{
        e.preventDefault()

        const form = e.target 
        const email = form.email.value 
        const password = form.password.value 

        logIn(email, password)
        .then(result => {
            // const user = result.user 
            // console.log(user)
            navigate(from, {replace: true})
            form.reset()
        })
        .catch(err => console.error(err))
    }

    return (
    <div className='w-full lg:px-20 py-28 px-8 bg-gray-100'>
            <div className='lg:w-2/5 mx-auto border p-10 bg-white rounded-md'>
                <h2 className='text-4xl text-center font-bold mb-10'>Log In</h2>
                <form onSubmit={handleLogIn} action="">
                    <div>
                        <label className='block mb-2' htmlFor="">Email</label>
                        <input type="email" name='email' className='border p-2 mb-4 w-full outline-none' placeholder='Enter your email' />
                    </div>
                    <div>
                        <label className='block mb-2' htmlFor="">Password</label>
                        <input type="password" name='password' className='border p-2 mb-4 w-full outline-none' placeholder='Enter your password' />
                    </div>
                    <div>
                        <button className='btn btn-primary w-full'>Log In</button>
                    </div>
                </form>
                <Link to='/register'><p className='mt-2'>New to this site? Please Register</p></Link>
            </div>
        </div>
    )
}

export default Login