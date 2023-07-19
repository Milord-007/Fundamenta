import React from 'react'
import a1 from './a1.jpg'
import a2 from './a2.jpg'
import a3 from './a3.jpg'

function News() {
  return (
    <div className='pt-[14%] dark:bg-[#0b0f19] dark:text-white pb-[20px]'>
         <p className='pl-[80px]  md:pl-[50px]  text-[#333333] dark:text-white text-[14px] pt-6 font-[400] '>Главная &gt; Новости</p>
        <p className='text-[#0D4373] text-[24px] font-[600] pl-[80px] md:pl-[50px] dark:text-white'>Новости</p>

         <div className='w-[90%] mx-auto flex gap-x-[50px] gap-y-[20px] justify-center flex-wrap pt-[50px]'>
          <div className='w-[350px]'>
            <div>
              <img src={a1} alt="" />
            </div>
            <p className='text-[#0D4373] text-[18px] font-[700] pt-3 dark:text-white'>Белкопрострой. 10 лет на рынке свайных фундаментов</p>
            <p className='text-[#868686] text-[16px] font-[400] pt-3'>02.10.2020</p>
            <button className="text-[#333333] text-[16px] font-[400] dark:text-white pt-3">Подробнее<i class="fa-solid fa-circle-chevron-right"></i> </button>

          </div>

          <div className='w-[350px]'>
            <div>
              <img src={a2} alt="" />
            </div>
            <p className='text-[#0D4373] text-[18px] font-[700] pt-3 dark:text-white'>Белкопрострой. 10 лет на рынке свайных фундаментов</p>
            <p className='text-[#868686] text-[16px] font-[400] pt-3'>02.10.2020</p>
            <button className="text-[#333333] text-[16px] font-[400] dark:text-white pt-3">Подробнее<i class="fa-solid fa-circle-chevron-right"></i> </button>

          </div>

          <div className='w-[350px]'>
            <div>
              <img src={a3} alt="" />
            </div>
            <p className='text-[#0D4373] text-[18px] font-[700] pt-3 dark:text-white'>Белкопрострой. 10 лет на рынке свайных фундаментов</p>
            <p className='text-[#868686] text-[16px] font-[400] pt-3'>02.10.2020</p>
            <button className="text-[#333333] text-[16px] font-[400] dark:text-white pt-3">Подробнее<i class="fa-solid fa-circle-chevron-right"></i> </button>

          </div>

          <div className='w-[350px]'>
            <div>
              <img src={a2} alt="" />
            </div>
            <p className='text-[#0D4373] text-[18px] font-[700] pt-3 dark:text-white'>Белкопрострой. 10 лет на рынке свайных фундаментов</p>
            <p className='text-[#868686] text-[16px] font-[400] pt-3'>02.10.2020</p>
            <button className="text-[#333333] text-[16px] font-[400] dark:text-white pt-3">Подробнее<i class="fa-solid fa-circle-chevron-right"></i> </button>

          </div>

          <div className='w-[350px]'>
            <div>
              <img src={a3} alt="" />
            </div>
            <p className='text-[#0D4373] text-[18px] font-[700] pt-3 dark:text-white'>Белкопрострой. 10 лет на рынке свайных фундаментов</p>
            <p className='text-[#868686] text-[16px] font-[400] pt-3'>02.10.2020</p>
            <button className="text-[#333333] text-[16px] font-[400] dark:text-white pt-3">Подробнее<i class="fa-solid fa-circle-chevron-right"></i> </button>

          </div>

          <div className='w-[350px]'>
            <div>
              <img src={a1} alt="" />
            </div>
            <p className='text-[#0D4373] text-[18px] font-[700] pt-3 dark:text-white'>Белкопрострой. 10 лет на рынке свайных фундаментов</p>
            <p className='text-[#868686] text-[16px] font-[400] pt-3'>02.10.2020</p>
            <button className="text-[#333333] text-[16px] font-[400] dark:text-white pt-3">Подробнее<i class="fa-solid fa-circle-chevron-right"></i> </button>

          </div>

          <div className='w-[350px]'>
            <div>
              <img src={a1} alt="" />
            </div>
            <p className='text-[#0D4373] text-[18px] font-[700] pt-3 dark:text-white'>Белкопрострой. 10 лет на рынке свайных фундаментов</p>
            <p className='text-[#868686] text-[16px] font-[400] pt-3'>02.10.2020</p>
            <button className="text-[#333333] text-[16px] font-[400] dark:text-white pt-3">Подробнее<i class="fa-solid fa-circle-chevron-right"></i> </button>

          </div>

          <div className='w-[350px]'>
            <div>
              <img src={a2} alt="" />
            </div>
            <p className='text-[#0D4373] text-[18px] font-[700] pt-3 dark:text-white'>Белкопрострой. 10 лет на рынке свайных фундаментов</p>
            <p className='text-[#868686] text-[16px] font-[400] pt-3'>02.10.2020</p>
            <button className="text-[#333333] text-[16px] font-[400] dark:text-white pt-3">Подробнее<i class="fa-solid fa-circle-chevron-right"></i> </button>

          </div>
 
         </div>
    </div>
  )
}

export default News