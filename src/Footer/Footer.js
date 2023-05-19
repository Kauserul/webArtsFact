import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='bg-black px-20 text-white py-10'>
            <div className='lg:flex justify-between'>
                <div className='mb-3'>
                    <p>Desing Stock</p>
                </div>
                <div className='mb-3'>
                    <div className='flex gap-5'>
                        <li className='list-none'>Home</li>
                        <li className='list-none'>Our Service</li>
                        <li className='list-none'>About</li>
                        <li className='list-none'>Contact Us</li>
                    </div>
                </div>
                <div className='mb-3'>
                    <div className='flex gap-5'>
                        <FaFacebook></FaFacebook>
                        <FaTwitter></FaTwitter>
                        <FaWhatsapp></FaWhatsapp>
                        <FaInstagram></FaInstagram>
                    </div>
                </div>
            </div>
            <div className='mt-5 mb-5'>
                <hr />
            </div>
            <div className='flex justify-between'>
                <p className='text-sm'>Terms & Condition</p>
                <p className='text-sm'>Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer