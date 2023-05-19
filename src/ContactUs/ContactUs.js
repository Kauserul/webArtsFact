import React from 'react'

const ContactUs = () => {
    return (
        <div className='lg:flex px-20 py-10 gap-32 bg-gray-100 h-full'>
            <div className='lg:w-2/6 w-full'>
                <h2 className='text-5xl mb-5'>Contact Us</h2>
                <div className='mb-5'>
                    <div>
                        <p><span className='font-bold text-xl'>Office Address : </span></p>

                    </div>
                    <div>
                        <p>Kachijhuli Mor, Mymensingh</p>
                        <p>Kachijhuli Mor, Mymensingh</p>
                    </div>
                </div>
                <div className='mb-5'>
                    <div className=''>
                        <div>
                            <p><span className='font-bold text-xl'>Phone Number : </span></p>
                        </div>
                        <div>
                            <p>+8801555665447</p>
                            <p>+8801555665447</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=''>
                        <div>
                            <p><span className='font-bold text-xl'>Email : </span></p>

                        </div>
                        <div>
                            <p>support.designagency@gmail.com</p>
                            <p>info.admin@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <form>
                    <div className='grid grid-cols-2 gap-5'>
                        <div>
                            <label htmlFor="" className='block mb-2 text-black text-xl'>Full Name</label>
                            <input type="text" className='border p-2 rounded-sm outline-none w-full' placeholder='Enter Your full Name' required />
                        </div>
                        <div>
                            <label htmlFor="" className='block mb-2 text-black text-xl'>Company Name</label>
                            <input type="text" className='border p-2 rounded-sm outline-none w-full' placeholder='Enter Company name' />
                        </div>
                        <div>
                            <label htmlFor="" className='block mb-2 text-black text-xl'>Email</label>
                            <input type="email" className='border p-2 rounded-sm outline-none w-full' placeholder='Enter Your email' required />
                        </div>
                        <div>
                            <label htmlFor="" className='block mb-2 text-black text-xl'>Type Of Work</label>
                            <select className='border p-2 rounded-sm outline-none w-full'  name="" id="">
                                <option value="" disabled>Select Of Type</option>
                                <option value="">Remote</option>
                                <option value="">Full Time</option>
                                <option value="">Part Time</option>
                            </select>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='font-bold mb-1'>Please tell us a bit about  yout project</p>
                        <textarea className='border w-full p-2 outline-none rounded-md' placeholder='Your Message Here...' name="" rows='5' id=""></textarea>
                    </div>
                    <div className='text-end mt-5'>
                        <button className='btn btn-primary'>Send Your Message</button>
                    </div>
                </form>
        </div>
        </div >
    )
}

export default ContactUs