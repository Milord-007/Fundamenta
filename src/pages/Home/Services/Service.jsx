import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import s3 from './s3.jpg'
import s4 from './s4.jpg'
import s5 from './s5.jpg'
// import q1 from './'
// import q2 from './images/q2.png'
// import q3 from './images/q3.jpg'
// import q4 from './images/q4.jpg'

function Service() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
  
    };
  return (
    <div className='dark:bg-[#0b0f19] pt-[13%] pb-[50px] '>
            <p className='pt-[70px] pl-[80px] md:pl-[50px]  text-[#333333] text-[14px] font-[400] '>Главная &gt; Услуги</p>
            <p className='text-[#0D4373] text-[24px] font-[600] pl-[80px] md:pl-[50px]'>Услуги</p>
          <div className="w-[90%] mx-auto flex justify-center gap-x-[50px]  pt-[50px] flex-wrap gap-y-[20px]">
          <div className="w-[60%] md:w-full bck1 min-h-[50vh] flex flex-col justify-end p-4">
            <p className="text-[18px] font-[700] text-[white]">CFA</p>
            <p className="text-[16px] font-[400] text-white pt-2">{t("navbar.text16")}</p>
            <div className="pt-2">
             <Link to={"more"}>
            <button className="text-white text-[16px] font-[400]">{t("navbar.text6")} <i class="fa-solid fa-circle-chevron-right"></i> </button>
             </Link>
            </div>

          </div>

          <div className="w-[35%] md:w-full flex justify-center">
            <div className="w-[380px]">

              <img src={s3} alt="" />

              <p className="pt-2 text-[18px] font-[700] dark:text-white fn">FDP</p>
              <p className="text-[#868686] text-[16px] font-[400] pt-1 dark:text-white">{t("navbar.text17")}</p>
              <div>
                <Link to={"more"}>
              <button className="text-[#333333] text-[16px] font-[400] dark:text-white">{t("navbar.text6")} <i class="fa-solid fa-circle-chevron-right"></i> </button>
                </Link>
              </div>
            </div>
          </div>
       </div>

        <div className="w-[90%] mx-auto flex flex-wrap pt-[50px] justify-center gap-x-[30px] gap-y-[30px] dark:text-white">
            <div className="w-[380px]">

              <img src={s3} alt="" />

              <p className="pt-2 text-[18px] font-[700] fn">{t("navbar.text18")}</p>
              <p className="text-[#868686] dark:text-white text-[16px] font-[400] pt-1">{t("navbar.text20")}</p>
              <div>
                <Link to={"/more"}>
              <button className="text-[#333333] text-[16px] font-[400] dark:text-white">{t("navbar.text6")} <i class="fa-solid fa-circle-chevron-right"></i> </button>
                </Link>
              </div>
            </div>

               <div className="w-[380px]">

              <img src={s4} alt="" />

              <p className="pt-2 text-[18px] font-[700] fn">{t("navbar.text21")}</p>
              <p className="text-[#868686] text-[16px] font-[400] pt-1 dark:text-white">{t("navbar.text22")}</p>
              <div>
                <Link to={"/more"}>
              <button className="text-[#333333] text-[16px] font-[400] dark:text-white">{t("navbar.text6")} <i class="fa-solid fa-circle-chevron-right"></i> </button>
                </Link>
              </div>
            </div>

               <div className="w-[380px]">

              <img src={s5} alt="" />

              <p className="pt-2 text-[18px] font-[700] fn">{t("navbar.text23")}</p>
              <p className="text-[#868686] text-[16px] font-[400] dark:text-white pt-1">{t("navbar.text24")}</p>
              <div>
                <Link to={"/more"}>
              <button className="text-[#333333] dark:text-white text-[16px] font-[400]">{t("navbar.text6")} <i class="fa-solid fa-circle-chevron-right"></i> </button>
                </Link>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Service