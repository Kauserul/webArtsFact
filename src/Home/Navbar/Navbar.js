import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import img from '../../Img/navbar.png'

const Navbar = () => {
    const {user, userLogOut} = useContext(AuthContext)
    const { data: cards = [] } = useQuery({
        queryKey: ['card'],
        queryFn: async () => {
            const res = await fetch('https://web-arts-fact-server-site.vercel.app/addtocard')
            const data = await res.json()
            return data
        }
    })
    return (
        <div className='lg:px-20 md:px-14'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Home</Link></li>
                            <li><Link to='/services'>Our Service</Link></li>
                            <li><Link>About</Link></li>
                            <li><Link to='/contactus'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className='text-center'>
                        <img style={{width: 30}} className='mx-auto' src={img} alt="" />
                        <a href='' className="normal-case text-xl">Desing Stock</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/services'>Our Service</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link to='/contactus'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        <Link to='/card' className='lg:flex mr-10 md:block hidden'>
                            <FaShoppingCart className='text-3xl'></FaShoppingCart>
                            <sub className='font-bold'>{cards.length}</sub>
                        </Link>
                    </div>
                    <div>
                        {
                            user?.email ?
                            <Link to='/login'><button onClick={userLogOut} className='btn btn-accent text-white'>Log Out</button></Link>
                            :
                            <Link to='/login'><button className='btn btn-primary'>Log In</button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar