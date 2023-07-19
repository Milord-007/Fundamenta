import "./Home.css";
import { useState,useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import s3 from './images/s3.jpg'
import s4 from './images/s4.jpg'
import s5 from './images/s5.jpg'
import q1 from './images/q1.jpg'
import q2 from './images/q2.png'
import q3 from './images/q3.jpg'
import q4 from './images/q4.jpg'

import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from "react-router-dom";

// const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  const { t, i18n } = useTranslation();

  // const changeLanguage = (language) => {
  //   i18n.changeLanguage(language);
  // };
  // const [value, setValue] = useState(3);
  return (
    <div className=" dark:bg-[#0b0f19] pt-[13%] pb-[50px]  ">
      <div className="pic1 min-h-[80vh] pb-[20px]">
        <div className="w-[90%] mx-auto pt-[60px]">
          <p className="text-[60px] md:text-[35px] w-[60%] font-[800] text-white md:pt-[50px] md:w-full"><span className="text-[#D74C20]">{t("navbar.text7")} </span>{t("navbar.text8")}</p>
          <p className="text-[24px] font-[400] text-[white] w-[42%] md:w-full">{t("navbar.text12")}</p>
          <button className="border-b-2 text-white mt-7 text-[18px] font-[400]">{t("navbar.text6")}</button>
        </div>

      </div>

       <div className="w-[90%] mx-auto min-h-[90px] bg-[#0D4373] dark:bg-[#111827] flex items-center md:p-4 justify-evenly md:flex-col">
          <p className="text-[18px] font-[400] text-white md:text-center">{t("navbar.text15")}</p>

          <div className="border-l-2 border-[#D74C20] md:border-none pl-4">
          <button className="text-[#D74C20] text-[18px] font-[600]">{t("navbar.text9")} <i class="fa-solid fa-circle-chevron-right"></i> </button>
          </div>
       </div>

       <div className="w-[90%] mx-auto flex justify-center gap-x-[50px]  pt-[50px] flex-wrap gap-y-[20px]">
          <div className="w-[60%] md:w-full bck1 min-h-[50vh] flex flex-col justify-end p-4">
            <p className="text-[18px] font-[700] text-[white]">CFA</p>
            <p className="text-[16px] font-[400] text-white pt-2">{t("navbar.text16")}</p>
            <div className="pt-2">

            <button className="text-white text-[16px] font-[400]">{t("navbar.text6")} <i class="fa-solid fa-circle-chevron-right"></i> </button>
            </div>

          </div>

          <div className="w-[35%] md:w-full flex justify-center">
            <div className="w-[380px]">

              <img src={s3} alt="" />

              <p className="pt-2 text-[18px] font-[700] dark:text-white fn">FDP</p>
              <p className="text-[#868686] text-[16px] font-[400] pt-1 dark:text-white">{t("navbar.text17")}</p>
              <div>
                <Link to={"/page1"}>
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
                <Link to={"/page1"}>
              <button className="text-[#333333] text-[16px] font-[400] dark:text-white">{t("navbar.text6")} <i class="fa-solid fa-circle-chevron-right"></i> </button>
                </Link>
              </div>
            </div>

               <div className="w-[380px]">

              <img src={s4} alt="" />

              <p className="pt-2 text-[18px] font-[700] fn">{t("navbar.text21")}</p>
              <p className="text-[#868686] text-[16px] font-[400] pt-1 dark:text-white">{t("navbar.text22")}</p>
              <div>
                <Link to={"/page1"}>
              <button className="text-[#333333] text-[16px] font-[400] dark:text-white">{t("navbar.text6")} <i class="fa-solid fa-circle-chevron-right"></i> </button>
                </Link>
              </div>
            </div>

               <div className="w-[380px]">

              <img src={s5} alt="" />

              <p className="pt-2 text-[18px] font-[700] fn">{t("navbar.text23")}</p>
              <p className="text-[#868686] text-[16px] font-[400] dark:text-white pt-1">{t("navbar.text24")}</p>
              <div>
                <Link to={"page1"}>
              <button className="text-[#333333] dark:text-white text-[16px] font-[400]">{t("navbar.text6")} <i class="fa-solid fa-circle-chevron-right"></i> </button>
                </Link>
              </div>
            </div>
        </div>
         
         <div className="w-[100%] mx-auto pic2 min-h-[50vh] mt-[70px] flex justify-center items-center dark:bg-[#111827]">
                
          <div>
            <p className="text-center text-[#D74C20] text-[50px] md:text-[40px] font-[800] fn">{t("navbar.text25")}</p>
            <p className="text-center  text-[#ffff] text-[50px] md:text-[40px] font-[800] fn">{t("navbar.text26")}</p>
          </div>
         </div>

         <div className="w-[90%] mx-auto flex justify-evenly md:flex-col gap-y-[30px] pt-8">
           <div className="w-[20%] border-r-2 border-[#0D4373] dark:border-[#111827] md:w-full">
             <div className="bg-[#0D4373] text-[white] text-end p-2 dark:bg-[#111827]">
             {t("navbar.text27")}
             </div>
             <div className="bg-[#F4F4F4] mt-2 text-end p-2 dark:bg-[#111827] dark:text-white">
             {t("navbar.text28")}
             </div>
             <div className="bg-[#F4F4F4] mt-2 text-end p-2 dark:bg-[#111827] dark:text-white">
             {t("navbar.text29")}
             </div>

           </div>
           <div className="w-[70%] md:w-full dark:text-white">
            <p className="text-[18px] font-[600]">SVAI.BY</p>
            <p className="text-[#868686] dark:text-white font-[400] text-[16]">{t("navbar.text30")}</p>
            <p className="text-[18px] font-[600]">{t("navbar.text31")}</p>
            <p className="text-[#868686] dark:text-white font-[400] text-[16]">{t("navbar.text32")}</p>

           </div>

         </div>

         <div className="w-[100%] mx-auto flex pt-[30px] flex-wrap justify-center gap-y-2">
          <div className="w-[330px]">
            <img src={q1} alt="" />
          </div>
          <div className="w-[330px]">
            <img src={q2} alt="" />
          </div>
          <div className="w-[330px]">
            <img src={q3} alt="" />
          </div>
          <div className="w-[330px]">
            <img src={q4} alt="" />
          </div>
 


         </div>
    </div>
  );
};

export default Home;
