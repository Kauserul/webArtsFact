import React from 'react'
import img1 from '../../Img/p1.png'
import img2 from '../../Img/p2.png'
import img3 from '../../Img/p3.png'
import img4 from '../../Img/p4.png'

const OurPortfolio = () => {
  return (
    <div className='lg:px-20 md:px-14 px-8 bg-gray-100 py-16'>
        <h4 className='text-center text-4xl mb-5 font-bold'>Our Portfolio</h4>
        <div className='lg:grid lg:grid-cols-4 md:grid-cols-2 grid grid-cols-2 gap-10'>
            <div>
                <img className='rounded-md' style={{width:500, height: 200}} src={img1} alt="" />
            </div>
            <div>
                <img className='rounded-md' style={{width:500, height: 200}} src={img2} alt="" />
            </div>
            <div>
                <img className='rounded-md' style={{width:500, height: 200}} src={img3} alt="" />
            </div>
            <div>
                <img className='rounded-md' style={{width:500, height: 200}} src={img4} alt="" />
            </div>
        </div>
    </div>
  )
}

export default OurPortfolio