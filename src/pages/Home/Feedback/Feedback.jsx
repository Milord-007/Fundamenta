import React from 'react'
import sert from './sert.jpg'
import { Button } from '@mui/material'

function Feedback() {
  return (
    <div className='pt-[14%] dark:bg-[#0b0f19] dark:text-white pb-[20px]'>
        <p className='pl-[80px]  md:pl-[50px]  text-[#333333] dark:text-white text-[14px] pt-6 font-[400] '>Главная &gt; Отзывы</p>
        <p className='text-[#0D4373] text-[24px] font-[600] pl-[80px] md:pl-[50px] dark:text-white'>Отзывы</p>
        <p className='text-[#868686] pl-[80px]'>Более 10 лет ООО «БелКопроСтрой» работает в сфере устройства свайных фундаментов. Для осуществления деятельности компания имеет все необходимые разрешительные документы для качественного производства работ (свидетельства, аттестаты соответствия и сертификаты).</p>

        <div className='w-[90%] mx-auto dark:bg-[#0b0f19] flex justify-center flex-wrap pt-[50px]'>
            <div className='w-[300px] dark:bg-[#0b0f19]'>
                <img src={sert} alt="" />
            </div>
            <div className='w-[300px]'>
                <img src={sert} alt="" />
            </div>
            <div className='w-[300px]'>
                <img src={sert} alt="" />
            </div>
            <div className='w-[300px]'>
                <img src={sert} alt="" />
            </div>

            <div className='w-[300px]'>
                <img src={sert} alt="" />
            </div>
            <div className='w-[300px]'>
                <img src={sert} alt="" />
            </div>
            <div className='w-[300px]'>
                <img src={sert} alt="" />
            </div>
            <div className='w-[300px]'>
                <img src={sert} alt="" />
            </div>

            <div className='w-[300px]'>
                <img src={sert} alt="" />
            </div>
            <div className='w-[300px]'>
                <img src={sert} alt="" />
            </div>
            <div className='w-[300px]'>
                <img src={sert} alt="" />
            </div>
            <div className='w-[300px]'>
                <img src={sert} alt="" />
            </div>

            <div className='w-[300px]'>
                <img src={sert} alt="" />
            </div>
            <div className='w-[300px]'>
                <img src={sert} alt="" />
            </div>
         

        </div>
        <div className='flex justify-center pt-2'>
           <Button type='outlined'>Показать еще</Button>
        </div>
     
    </div>
  )
}

export default Feedback