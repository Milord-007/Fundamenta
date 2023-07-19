import React from 'react'
import q1 from './q1.jpg'
import q2 from './q2.jpg'
import res from './res.svg'
import res2 from './res2.svg'
import w1 from './w1.svg'
import w2 from './w2.svg'
import w3 from './w3.svg'
import w4 from './w4.svg'
import ser from './ser.jpg'
import ser2 from './ser2.jpg'
import ser3 from './ser3.jpg'
import { useTranslation } from 'react-i18next';

function About() {
  const { t, i18n } = useTranslation();
  return (
    <div className='pt-[14%] dark:bg-[#0b0f19] dark:text-white pb-[20px]'>
        <p className='pl-[80px]  md:pl-[50px]  text-[#333333] dark:text-white text-[14px] pt-6 font-[400] '>{t("navbar.text1")} &gt; {t("navbar.text10")}</p>
        <p className='text-[#0D4373] text-[24px] font-[600] pl-[80px] md:pl-[50px] dark:text-white'>{t("navbar.text10")}</p>

        <div className='w-[90%] mx-auto justify-center gap-x-[60px] pt-[30px] pb-[30px] flex md:flex-col gap-y-[30px]'>
          <div className='w-[45%] md:w-full'>
             <img src={q1} alt="" />
          </div>

          <div className='w-[45%] md:w-full'>
            <p className='text-[18px] font-[700] dark:text-white'>{t("navbar.text33")}</p>
            <p className='text-[#868686] text-[16px] font-[400] pt-3 dark:text-white'>
            {t("navbar.text34")}
            </p>
            <div className='flex w-full pt-4'>
              <div className='w-[15%]'>
            <img src={res} alt="" />
              </div>
              <div className='w-[85%]'>
               <p className='text-[#868686] dark:text-white'>
               {t("navbar.text35")}
               </p>
              </div>
            </div>

            <div className='flex w-full pt-4'>
              <div className='w-[15%]'>
            <img src={res2} alt="" />
              </div>
              <div className='w-[85%]'>
               <p className='text-[#868686] dark:text-white'>
               {t("navbar.text36")}
               </p>
              </div>
            </div>

          </div>
        </div>

        <div className='w-[90%] bg-[#F4F4F4]  dark:bg-[#0b0f19] mx-auto justify-center gap-x-[60px] pt-[30px] pb-[30px] flex md:flex-col gap-y-[30px]'>
           <div className='w-[47%] md:w-full md:order-2'>
            <div className='w-full flex justify-between'>
                <div className='w-[10%] flex items-center'>
                  <img src={w1} alt="" />
                </div>
                <div className='w-[85%] bg-white dark:bg-[#111827] p-7'>
               <p>
               Имеем сертификат соответствия СТБ ISO 9001-2015
               </p>
                </div>

            </div>

            <div className='w-full flex justify-between mt-5'>
                <div className='w-[10%] flex items-center'>
                  <img src={w2} alt="" />
                </div>
                <div className='w-[85%] bg-white dark:bg-[#111827] p-7'>
               <p>
               Работы производятся опытными специалистами со стажем
               </p>
                </div>

            </div>

            <div className='w-full flex justify-between mt-5'>
                <div className='w-[10%] flex items-center'>
                  <img src={w3} alt="" />
                </div>
                <div className='w-[85%] bg-white dark:bg-[#111827] p-7'>
               <p>
               Мы обеспечим максимально возможную оперативность работ
               </p>
                </div>

            </div>

            <div className='w-full flex justify-between mt-5'>
                <div className='w-[10%] flex items-center'>
                  <img src={w4} alt="" />
                </div>
                <div className='w-[85%] bg-white dark:bg-[#111827] p-7'>
               <p>
               Мы гарантируем лучшее ценообразование на строительные работы
               </p>
                </div>

            </div>

            <div className='w-full flex justify-between mt-5'>
                <div className='w-[10%] flex items-center'>
                  <img src={w4} alt="" />
                </div>
                <div className='w-[85%] bg-white dark:bg-[#111827] p-7'>
               <p>
               Мы даем гарантию на все выполненные нами работы
               </p>
                </div>

            </div>
 
 


           </div>

           <div className='w-[47%] md:order-1 md:w-full'>
                <img src={q2} alt="" />
           </div>
        </div>

        <div className='w-[100%] bg-[#0D4373] min-h-[20vh] flex dark:bg-[#111827] '>
          
       <div className="w-[90%] mx-auto min-h-[90px] bg-[#0D4373] dark:bg-[#111827] flex items-center md:p-4 justify-evenly md:flex-col">
          <p className="text-[18px] font-[400] text-white md:text-center">Профессиональное устройство свайных фундаментов из забивных и буронабивных свай</p>

          <div className="border-l-2 border-[#D74C20] md:border-none pl-4">
          <button className="text-[#D74C20] text-[18px] font-[600]">Связаться с нами <i class="fa-solid fa-circle-chevron-right"></i> </button>
          </div>
       </div>
        </div>

        <div className='w-[80%] mx-auto pt-[30px]'>
            <p className='text-[24px] font-[700] dark:text-white'>Сертификаты</p>
            <p className='text-[#868686] dark:text-white font-[400] pt-[20px]'>Более 10 лет ООО «БелКопроСтрой» работает в сфере устройства свайных фундаментов. Для осуществления деятельности компания имеет все необходимые разрешительные документы для качественного производства работ (свидетельства, аттестаты соответствия и сертификаты).</p>

            <div className='w-full flex justify-center flex-wrap gap-x-[0px] pt-[30px] gap-y-[20px]'>
               <div className='w-[250px]'>
                  <img src={ser} alt="" />
               </div>
               <div className='w-[250px]'>
                  <img src={ser2} alt="" />
               </div>

               <div className='w-[250px]'>
               <img src={ser3} alt="" />
               </div>
               <div className='w-[250px]'>
               <img src={ser2} alt="" />
               </div>
            </div>

        </div>


      
    </div>
  )
}

export default About