import React from 'react'
import a from "./img/a.svg"
import a2 from "./img/a2.jpg"
import { Link } from 'react-router-dom'

const Objects = () => {
  return (
    <div className='pt-[15%] md:pt-[25%] dark:bg-[#0b0f19] pb-[20px] dark:text-white'>
      <div className='w-[80%] m-auto mt-[3%]'>
      <h1 className='text-[24px] text-[#0D4373]'>
      Строительство торгового центра «Leroy Merlin»
        </h1>
        <Link to = "/geog">
        <div className=' flex gap-[10px] mt-5 '>
          <img src={a} alt="" />
          <h1 className='text-[#D74C20]'>
          ВЕРНУТЬСЯ К КАРТЕ
          </h1>
        </div>
        </Link>
        <div className='mt-[5%] flex gap-[30px] pb-[5%] sm:block'>
          <div>
            <img src={a2} alt="" />
          </div>
          <div>
            <h1 className='w-[740px] sm:w-[90%] md:pt-9 sm:m-auto'>
            Первый в Беларуси магазин Leroy Merlin будет расположен в столице страны – г. Минске. Генподрядчик – Группа компаний Litana – партнер SVAI.BY в Республике Беларусь с 2012 года.
            </h1>
            <div className='bg-[#F4F4F4] dark:bg-[#111827] h-[10vh] px-[4%] py-[2%] mt-[7%]'>
              <h1>
              Итоговый срок погружения 1770 железобетоных свай составил 25 календарных дней.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Objects