import React from 'react'
import img from '../../Img/detailsPage.png'


const ServiceDetails = () => {
    return (
        <div className='flex bg-gray-100 lg:p-20 md:p-14 p-8'>
            <div>
                <div className='lg:w-3/4 mr-0 pr-0'>
                    <h2 className='text-3xl font-bold mb-2'>Empowering Your Brand Story With Unique Logo Design</h2>
                    <p className='text-sm mb-2'>Our logo design service provides you with a custom-designed logo that represents your brand or business. Our experienced team of designers will work with you to understand your vision and create a unique logo that accurately reflects your values and goals.</p>
                    <p className='text-sm mb-2'>Our service includes multiple rounds of revisions to ensure your satisfaction with the final product. Once completed, you will receive all necessary files in various formats for use on a variety of platforms. Order now to elevate your brand identity with a professional, eye-catching logo. Invited me for your project! Save your time and money! </p>
                </div>
                <div>
                    <h4 className='text-2xl mb-2 font-bold'>Our Logo Design Process</h4>
                    <p className='text-sm'>Research and Analysis  Brainstorming  Concept Development  Feedback and Revisions  Finalize and Deliver.</p>
                </div>
                <div className='mt-5'>
                    <h6 className='text-xl font-bold mb-2'>Our Achievement</h6>
                    <div className='flex gap-10'> 
                        <div>
                            <h2 className='text-blue-500 text-3xl font-bold'>250+</h2>
                            <p className='text-sm'>Project Complet</p>
                        </div>
                        <div>
                            <h2 className='text-blue-500 text-3xl font-bold'>200+</h2>
                            <p className='text-sm'>Happy Clients</p>
                        </div>
                        <div>
                            <h2 className='text-blue-500 text-3xl font-bold'>4.9</h2>
                            <p className='text-sm'>Position rating</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:w-11/12 h-full lg:block hidden'>
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default ServiceDetails