import React, { useContext } from 'react'
import { HiCheck } from "react-icons/hi";
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const PricingPlans = () => {
    const { user } = useContext(AuthContext)
    const handleAddBasicPackage = () => {
        const basic = {
            name: "BASIC PACKAGE",
            price: "$29/start from",
            lists: [
                "1 Concept Included",
                "Logo Transparency",
                "Vector File",
                "Printable File",
                "Include 3D Mockup",
                "Include source file",
                "Unlimited Revisions"
            ]
        }
        fetch('https://web-arts-fact-server-site.vercel.app/addtocard', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(basic)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Data added")
            })
    }
    const handleAddStanardPackage = () => {
        const standard = {
            name: "STANDARD PACKAGE",
            price: "$99/start from",
            lists: [
                "2 concept included with Hi quality design",
                "Logo Transparency",
                "Vector File",
                "Printable File",
                "Include 3D Mockup",
                "Include source file",
                "Include social media kit",
                "Unlimited Revisions",
                "3 Days Delivery",
            ]
        }
        fetch('https://web-arts-fact-server-site.vercel.app/addtocard', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(standard)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Data added")
            })
    }
    const handleAddPrimaryPackage = () => {
        const primay = {
            name: "PREMIUM PACKAGE",
            price: "$99/start from",
            lists: [
                "3 concept included with Premium quality design",
                "Logo Transparency",
                "Vector File",
                "Printable File",
                "Include 3D Mockup",
                "Include source file",
                "Stationery designs",
                "Include social media kit",
                "Unlimited Revisions",
                "4 Days Delivery",
            ]
        }
        fetch('https://web-arts-fact-server-site.vercel.app/addtocard', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(primay)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Data added", { autoClose: 1000 })
            })
    }

    return (
        <div className='lg:px-20 py-10 md:px-14 px-8'>
            <h2 className='text-center text-4xl mb-10'>Pricing Plans</h2>
            <div className='lg:flex lg:justify-between lg:gap-10'>
                <div className='lg:w-2/4 w-full border border-green-300 rounded-md h-full mb-5'>
                    <div className=' bg-green-500 text-center p-8 text-white'>
                        <h4 className='text-2xl font-bold'>BASIC PACKAGE</h4>
                        <p><span className='text-3xl font-bold'>$29</span>/start from</p>
                    </div>
                    <div className='p-10'>
                        <li className='list-none'> <HiCheck className='inline text-green-500 '></HiCheck> 1 Concept Included</li>
                        <li className='list-none'> <HiCheck className='inline text-green-500'></HiCheck> Logo Transparency</li>
                        <li className='list-none'> <HiCheck className='inline text-green-500'></HiCheck> Vector File</li>
                        <li className='list-none'> <HiCheck className='inline text-green-500'></HiCheck> Printable File</li>
                        <li className='list-none'> <HiCheck className='inline text-green-500'></HiCheck> Include 3D Mockup</li>
                        <li className='list-none'> <HiCheck className='inline text-green-500'></HiCheck> Include source file</li>
                        <li className='list-none'> <HiCheck className='inline text-green-500'></HiCheck> Unlimited Revisions</li>
                    </div>
                    <div className='p-10 pt-0 w-full'>
                        {
                            user?.email ?
                                <button onClick={handleAddBasicPackage} className='btn bg-green-500 outline-none hover:bg-green-600 border-none w-full'>Add To Card</button>
                                :
                                <Link to='/login'><button className='btn bg-green-500 outline-none hover:bg-green-600 border-none w-full'>Log In</button></Link>
                        }
                    </div>
                </div>
                <div className='lg:w-2/4 border border-orange-300 rounded-md h-full mb-5 relative'>
                    <div className=' bg-orange-500 text-center p-8 text-white'>
                        <span className=' absolute -top-3 border border-orange-500 rounded-xl transform -translate-x-1/2 bg-white px-2 text-orange-500'>Most Popular</span>
                        <h4 className='text-2xl font-bold'>STANDARD PACKAGE</h4>
                        <p><span className='text-3xl font-bold'>$99</span>/start from</p>
                    </div>
                    <div className='p-10'>
                        <li className='list-none'> <HiCheck className='inline text-orange-500'></HiCheck> 2 concept included with Hi quality design</li>
                        <li className='list-none'> <HiCheck className='inline text-orange-500'></HiCheck> Logo Transparency</li>
                        <li className='list-none'> <HiCheck className='inline text-orange-500'></HiCheck> Vector File</li>
                        <li className='list-none'> <HiCheck className='inline text-orange-500'></HiCheck> Printable File</li>
                        <li className='list-none'> <HiCheck className='inline text-orange-500'></HiCheck> Include 3D Mockup</li>
                        <li className='list-none'> <HiCheck className='inline text-orange-500'></HiCheck> Include source file</li>
                        <li className='list-none'> <HiCheck className='inline text-orange-500'></HiCheck> Include social media kit</li>
                        <li className='list-none'> <HiCheck className='inline text-orange-500'></HiCheck> Unlimited Revisions</li>
                        <li className='list-none'> <HiCheck className='inline text-orange-500'></HiCheck> 3 Days Delivery</li>
                    </div>
                    <div className='p-10 pt-0 w-full'>
                        {
                            user?.email ?
                                <button onClick={handleAddStanardPackage} className='btn bg-orange-500 border-none hover:bg-orange-600 w-full'>Add To Card</button>
                                :
                                <Link to='/login'><button className='btn bg-orange-500 border-none hover:bg-orange-600 w-full'>Log In</button></Link>
                        }
                    </div>
                </div>
                <div className='lg:w-2/4 w-full border border-red-300 rounded-md h-full relative'>
                    <div className=' bg-red-500 text-center p-8 text-white'>
                        <span className=' absolute -top-3 border border-red-500 rounded-xl transform -translate-x-1/2 bg-white px-2 text-red-500'>Recommended</span>
                        <h4 className='text-2xl font-bold'>PREMIUM PACKAGE</h4>
                        <p><span className='text-3xl font-bold'>$149</span>/start from</p>
                    </div>
                    <div className='p-10'>
                        <li className='list-none'> <HiCheck className='inline text-red-500'></HiCheck> 3 concept included with Premium quality design</li>
                        <li className='list-none'> <HiCheck className='inline text-red-500'></HiCheck> Logo Transparency</li>
                        <li className='list-none'> <HiCheck className='inline text-red-500'></HiCheck> Vector File</li>
                        <li className='list-none'> <HiCheck className='inline text-red-500'></HiCheck> Printable File</li>
                        <li className='list-none'> <HiCheck className='inline text-red-500'></HiCheck> Include 3D Mockup</li>
                        <li className='list-none'> <HiCheck className='inline text-red-500'></HiCheck> Include source file</li>
                        <li className='list-none'> <HiCheck className='inline text-red-500'></HiCheck> Stationery designs</li>
                        <li className='list-none'> <HiCheck className='inline text-red-500'></HiCheck> Include social media kit</li>
                        <li className='list-none'> <HiCheck className='inline text-red-500'></HiCheck> Unlimited Revisions</li>
                        <li className='list-none'> <HiCheck className='inline text-red-500'></HiCheck> 4 Days Delivery</li>
                    </div>
                    <div className='p-10 pt-0 w-full'>
                        {
                            user?.email ?
                                <button onClick={handleAddPrimaryPackage} className='btn bg-red-500 border-none hover:bg-red-600 w-full'>Add To Card</button>
                                :
                                <Link to='/login'><button className='btn bg-red-500 border-none hover:bg-red-600 w-full'>Log In</button></Link>
                        }
                    </div>
                </div>
            </div>
            <div className='mt-10 lg:w-2/4 w-full'>
                <h4 className='text-2xl font-bold'>What are the requirements to order a logo design?</h4>
                <p className='text-sm mb-5'>Your Logo Design Brief Brand Guidelines Budget Timeline Communication .</p>
                <p className='text-sm '>Overall, the more information and guidance the client can provide, the better the designer can create a logo that meets their needs and achieves their goals.</p>
            </div>
        </div>
    )
}

export default PricingPlans