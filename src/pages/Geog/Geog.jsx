import React from 'react'
import "./geog.css"
import a1 from "./img/a1.png"

const Geog = () => {
  return (
    <div className='pt-[15%] dark:bg-[#0b0f19] pb-[30px]'>
        <div className='w-[80%] m-auto  mt-[3%]'>
        <h1 className='text-[24px] text-[#0D4373]'>
        География
        </h1>
        <div className='b mt-[5%]'>
            <img className='m-auto py-[7%]' src={a1} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Geog