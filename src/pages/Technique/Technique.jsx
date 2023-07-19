import React from "react";
import gridImage from './images/image (1).jpg'
import gridImage1 from './images/image (2).jpg'
import gridImage2 from './images/image (3).jpg'
import gridImage3 from './images/image (4).jpg'
import gridImage4 from './images/image (5).jpg'
import gridImage5 from './images/image (6).jpg'
import gridImage6 from './images/image (7).jpg'
import gridImage7 from './images/image (8).jpg'
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
const Techniqua = () => {
  return (
    <div className="bg-[#FFF] pt-[15%] dark:bg-[#0b0f19]">
      <div className="container max-w-[1100px] mx-auto px-[15px]">
        <div className="py-[20px]">
          <h1 className="text-[#333333] dark:text-[#FFF]">Главная &gt;Техника</h1>
          <h1 className="uppercase text-[#0D4373] text-[24px] py-[10px] font-[600] dark:text-[#FFF]">
            Техника
          </h1>
          <div className="">
            <p className="text-[#868686] py-[10px] dark:text-[#FFF]">
              УСТРОЙСТВО СВАЙ - весьма обширная сфера строительства,
              предусматривающая проведение комплексных, высокоточных работ, а
              также выполнение этих работ согласно технологиям и нормам. Потому
              выбору техники для производства работ должно уделяться должное
              внимание.
            </p>
            <ul className="text-[#868686] flex flex-col gap-y-[10px]">
              <li className="text-[#868686] dark:text-[#FFF]">
                Мы владеем собственной буровой техникой производителей ABI
                Group, BAUER, MAIT
              </li>
              <li className="text-[#868686] dark:text-[#FFF]">
                подвесным оборудовани- ем для вибропогружения труб и шпунта APE
                HOLLAND 150
              </li>
              <li className="text-[#868686] dark:text-[#FFF]">
                а также сваебой- ными установка- ми фирмы JUNTTAN
              </li>
            </ul>
            <p className="text-[#868686] py-[10px] dark:text-[#FFF]">
              Наша компания объединяет колоссальный опыт, компетенции, что в
              сочетании с техникой ведущих мировых производителей, позволяет нам
              быть лидерами рынка Республики Беларусь в этом сегменте.
            </p>
          </div>
          <div className="py-[50px]">
            <div className="grid grid-cols-3 gap-[25px] xl:grid-cols-2 md:grid-cols-1 ">
              <div className="relative col-span-2 md:col-span-1">
                <img src={gridImage} alt="" className="w-full" />
                <div className="absolute bottom-0 md:relative md:py-[10px] p-[20px] md:p-0">
                  <h1 className="font-[700] text-[18px] text-[#FFF] md:text-[#333333] pb-[20px] dark:text-[#FFF]">
                  Буровая установка ABI RE 12/14300
                  </h1>
                  <div className="flex items-center gap-x-[10px] text-[#FFF]">
                    {/* <p className="text-[#FFF] md:text-[#868686]">Подробнее</p> */}
                    <div className="flex items-center justify-center">
                      {/* <KeyboardDoubleArrowRightIcon
                        sx={{
                          color: "white",
                          backgroundColor: "error",
                        }}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src={gridImage1} alt="" className=" w-full" />
                <div className="pt-[15px]">
                  <h1 className="text-[#333333] font-[700] text-[18px] pb-[20px] dark:text-[#FFF]">Сваебойная установка Juntan PM20</h1>
                 
                  <div className="flex items-center gap-x-[10px]">
                    {/* <p className="text-[#333333] dark:text-[#FFF]">Подробнее</p> */}
                    <div className="flex items-center justify-center">
                      {/* <KeyboardDoubleArrowRightIcon
                        sx={{
                          color: "error",
                          backgroundColor: "error",
                        }}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src={gridImage2} alt="" className=" w-full" />
                <div className="pt-[15px]">
                  <h1 className="text-[#333333] font-[700] text-[18px] pb-[20px] dark:text-[#FFF]">
                  Сваебойная установка СП49
                  </h1>
                
                  <div className="flex items-center gap-x-[10px]">
                    {/* <p className="text-[#333333] dark:text-[#FFF]">Подробнее</p> */}
                    <div className="flex items-center justify-center">
                      {/* <KeyboardDoubleArrowRightIcon
                        sx={{
                          color: "error",
                          backgroundColor: "error",
                        }}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src={gridImage3} alt="" className=" w-full" />
                <div className="pt-[15px]">
                  <h1 className="text-[#333333] font-[700] text-[18px] pb-[20px] dark:text-[#FFF]">
                  Подвесной вибропогружатель APE HOLLAND 150
                  </h1>
                  <div className="flex items-center gap-x-[10px]">
                    {/* <p className="text-[#333333] dark:text-[#FFF]">Подробнее</p> */}
                    <div className="flex items-center justify-center">
                      {/* <KeyboardDoubleArrowRightIcon
                        sx={{
                          color: "error",
                          backgroundColor: "error",
                        }}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src={gridImage4} alt="" className=" w-full" />
                <div className="pt-[15px]">
                  <h1 className="text-[#333333] font-[700] text-[18px] pb-[20px] dark:text-[#FFF]">
                  Буровая машина MAIT CFA24
                  </h1>
                  <div className="flex items-center gap-x-[10px]">
                    {/* <p className="text-[#333333] dark:text-[#FFF]">Подробнее</p> */}
                    <div className="flex items-center justify-center">
                      {/* <KeyboardDoubleArrowRightIcon
                        sx={{
                          color: "error",
                          backgroundColor: "error",
                        }}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src={gridImage5} alt="" className=" w-full" />
                <div className="pt-[15px]">
                  <h1 className="text-[#333333] font-[700] text-[18px] pb-[20px] dark:text-[#FFF]">
                  Сваескусыватель TAETS 3/5
                  </h1>
                  <div className="flex items-center gap-x-[10px]">
                    {/* <p className="text-[#333333] dark:text-[#FFF]">Подробнее</p> */}
                    <div className="flex items-center justify-center">
                      {/* <KeyboardDoubleArrowRightIcon
                        sx={{
                          color: "error",
                          backgroundColor: "error",
                        }}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src={gridImage6} alt="" className=" w-full" />
                <div className="pt-[15px]">
                  <h1 className="text-[#333333] font-[700] text-[18px] pb-[20px] dark:text-[#FFF]">
                  Универсальный буровая установка ATLAS COPCO MUSTANG A66
                  </h1>
                  <div className="flex items-center gap-x-[10px]">
                    {/* <p className="text-[#333333] dark:text-[#FFF]">Подробнее</p> */}
                    <div className="flex items-center justify-center">
                      {/* <KeyboardDoubleArrowRightIcon
                        sx={{
                          color: "error",
                          backgroundColor: "error",
                        }}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src={gridImage7} alt="" className=" w-full" />
                <div className="pt-[15px]">
                  <h1 className="text-[#333333] font-[700] text-[18px] pb-[20px] dark:text-[#FFF]">
                  Бурильно-сваебойный аппарат БМ-811
                  </h1>
                  <div className="flex items-center gap-x-[10px]">
                    {/* <p className="text-[#333333] dark:text-[#FFF]">Подробнее</p> */}
                    <div className="flex items-center justify-center">
                      {/* <KeyboardDoubleArrowRightIcon
                        sx={{
                          color: "error",
                          backgroundColor: "error",
                        }}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techniqua;
