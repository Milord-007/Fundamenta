import React, { useState } from "react";
import "./Career.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import chevro from "./check.svg";
import close from "./x (1).svg";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Checkbox from "@mui/material/Checkbox";
import { useTranslation } from 'react-i18next';

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Career = () => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [chek, setChek] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="pt-[14%]">
        <Dialog
          open={open1}
          onClose={handleClose1}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          hideBackdrop
          sx={{
            backgroundColor: "#0d43739b",
          }}
        >
          <DialogTitle
            id="alert-dialog-title"
            className="text-center bg-[#FFFFFF] dark:bg-[#111827] "
          >
            <h1 className="py-[15px] text-center text-[#0D4373] uppercase font-[700] dark:text-[#FFF]">
              Спасибо
            </h1>
            <span>
              <img
                src={close}
                alt=""
                onClick={handleClose1}
                className="absolute top-[10px] right-[10px] cursor-pointer dark:bg-[#FFF]"
              />
            </span>
            <h1 className="text-[16px] text-[#333333] font-[700] text-center dark:text-[#FFF]">
              Ваша сообщение отправлено
            </h1>
          </DialogTitle>
          <DialogContent className="w-[500px] md:w-[400px] sm:w-full dark:bg-[#111827]">
            <DialogContentText id="alert-dialog-description">
                <button 
                onClick={handleClose1}
                  className="py-[8px] w-full  rounded-[3px] font-[600] text-[#FFF] bg-[#D74C20] text-[16px] uppercase"
                >
                  Закрыть
                </button>
            </DialogContentText>
          </DialogContent>
        </Dialog>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          hideBackdrop
          sx={{
            backgroundColor: "#111827",
          }}
        >
          <DialogTitle
            id="alert-dialog-title"
            className="text-center bg-[#FFFFFF] dark:bg-[#111827]"
          >
            <h1 className="py-[15px] text-center text-[#0D4373] uppercase font-[700] dark:text-[#FFF]">
              РЕзюме
            </h1>
            <span>
              <img
                src={close}
                alt=""
                onClick={handleClose}
                className="absolute top-[10px] right-[10px] cursor-pointer dark:bg-[#FFF]"
              />
            </span>
            <h1 className="text-[16px] text-[#333333] font-[700] text-center dark:text-[#FFF]">
              Пожалуйста, заполните форму ниже
            </h1>
          </DialogTitle>
          <DialogContent className="w-[450px] md:w-[400px] sm:w-full dark:bg-[#111827]">
            <DialogContentText id="alert-dialog-description">
              <div className="">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleClickOpen1();
                    handleClose();
                    setChek(!chek);
                  }}
                >
                  <div className="flex flex-col">
                    <span className="text-[#868686] text-[12px] py-[5px] dark:text-[#FFF]">
                      Ваше имя
                    </span>
                    <input
                      type="text"
                      required
                      className="py-[4px] bg-[#F3F3F3] dark:text-black text-[#868686] rounded-[3px] border-none outline-none text-[13px] pl-[15px]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#868686] text-[12px] py-[5px] dark:text-[#FFF]" >
                      Контактный телефон
                    </span>
                    <input
                      type="text"
                      required
                      className="py-[4px] bg-[#F3F3F3] text-[#868686] dark:text-black  rounded-[3px] border-none outline-none text-[13px] pl-[15px]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#868686] text-[12px] py-[5px] dark:text-[#FFF]">
                      E-mail (обязательно)
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="user@example.com"
                      className="py-[4px] bg-[#F3F3F3] placeholder:dark:text-[#000] text-[#868686] dark:text-black  rounded-[3px] border-none outline-none text-[13px] pl-[15px]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#868686] text-[12px] py-[5px] dark:text-[#FFF]">
                      Вакансия
                    </span>
                    <div className="w-full">
                      <select
                        name=""
                        id=""
                        className="w-full bg-[#F3F3F3] py-[6px] pl-[10px] text-[12px]"
                      >
                        <option value="" selected >
                        Manager
                        </option>
                        <option value="">Менеджер по продажам</option>
                        <option value="">Менеджер по продажам</option>
                        <option value="">Менеджер по продажам</option>
                        <option value="">Менеджер по продажам</option>
                        <option value="">Менеджер по продажам</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#868686] text-[12px] py-[5px] dark:text-[#FFF]">
                      Vacancy
                    </span>
                    <div className="w-full">
                      <input
                        type="file"
                        className="py-[5px] pl-[15px] text-[12px] dark:text-black  bg-[#F3F3F3] w-full"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[#868686] text-[12px] py-[5px] dark:text-[#FFF]">
                      Сообщение
                    </span>
                    <textarea
                      name=""
                      id=""
                      cols="10"
                      rows="3"
                      required
                      className="py-[3px] text-[13px] dark:text-black    bg-[#F3F3F3] text-[#868686] rounded-[3px] border-none outline-none pl-[15px]"
                    ></textarea>
                  </div>
                  <div className="flex items-center">
                    <Checkbox
                      {...label}
                      className="border-[#868686]"
                      // onChange={() => setChek(!chek)}
                    />
                    <span className="text-[#0D4373] text-[13px] py-[5px] dark:text-[#FFF]">
                      Согласие на обработку персональных данных.
                    </span>
                  </div>
                  <div className="py-[20px] flex items-center">
                    <button
                      // disabled={chek}
                      // style={chek ? { opacity: "0.5" } : null}
                      className="py-[8px] w-full  rounded-[3px] font-[600] text-[#FFF] bg-[#D74C20] text-[16px] uppercase"
                    >
                      Отправить
                    </button>
                  </div>
                </form>
              </div>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
      <div className="bg-[#FFF] dark:bg-[#0b0f19]">
        <div className="container max-w-[1300px] mx-auto px-[15px]">
          <div className="py-[20px]">
            <h1 className="text-[#333333] dark:text-[#FFF]"> {t("navbar.text1")} &gt; {t("navbar.text38")}</h1>
            <h1 className="uppercase text-[#0D4373] text-[24px] py-[10px] font-[600] dark:text-[#FFF]">
            {t("navbar.text38")}
            </h1>
            <div className="pt-[30px]">
              <h1 className="text-[#333333] font-[700] text-[18px] dark:text-[#FFF]">
              {t("navbar.text39")}
              </h1>
              <p className="text-[#868686] py-[5px] dark:text-[#FFF]">
              {t("navbar.text40")}
              </p>
              <p className="py-[5px] text-[#868686] dark:text-[#FFF]">
              {t("navbar.text41")}
              </p>
            </div>
            <div className="py-[30px]">
              <h1 className="text-[#333333] font-[700] text-[18px] dark:text-[#FFF]">
              {t("navbar.text42")}
              </h1>
              <p className="text-[#868686] py-[5px] dark:text-[#FFF]">
              {t("navbar.text43")}
              </p>
            </div>
            <div>
              <div className="flex items-start gap-y-[20px] flex-col py-[20px] ">
                <Accordion className="w-full dark:bg-[#111827]">
                  <AccordionSummary
                      expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography
                      className="px-[10px] py-[15px] text-[#D74C20]  flex items-start dark:text-[#e9e9e9]"
                      sx={{ fontWeight: 700 }}
                    >
                       {t("navbar.text44")}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="flex flex-col gap-y-[20px]">
                        <ul className="flex flex-col gap-y-[10px]">
                          <h1 className="py-[5px] font-[700] dark:text-[#e9e9e9] ">
                            Должностные обязанности:
                          </h1>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" /> Продажи компьютерного
                            оборудования
                          </li>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Развитие, поддержание отношений с новыми и
                            существующими клиентами компании
                          </li>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Проведение переговоров и подготовка коммерческих
                            предложений
                          </li>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Выполнение плана по продажам
                          </li>
                        </ul>
                        <ul className="flex flex-col gap-y-[10px]">
                          <h1 className="py-[5px] font-[700] dark:text-[#e9e9e9]">Требования:</h1>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Честность, порядочность, пунктуальность, активность,
                            коммуникабельность, бесконфликтность
                          </li>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Хорошее знание ассортимента компьютерного
                            оборудования
                          </li>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Умение работать с большим количеством позиций
                          </li>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Умение составлять спецификации и коммерческие
                            предложения для клиентов
                          </li>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Активное ведение сделок и полное участие в проектах
                          </li>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Умение вести переговоры
                          </li>
                        </ul>
                        <ul className="flex flex-col gap-y-[10px]">
                          <h1 className="py-[5px] font-[700] dark:text-[#e9e9e9]">Условия:</h1>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Полный рабочий день
                          </li>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Испытательный срок два месяца
                          </li>
                        </ul>
                        <div className="py-[5px]">
                          <button
                            onClick={handleClickOpen}
                            className="px-[30px] py-[7px] uppercase font-[700] text-[#FFF] text-[14px] bg-[#D74C20]"
                          >
                            Отправить Резюме
                          </button>
                        </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className="w-full dark:bg-[#111827]">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography
                      className="px-[10px] py-[15px] text-[#D74C20]  flex items-start dark:text-[#e9e9e9]"
                      sx={{ fontWeight: 700 }}
                    >
                      {t("navbar.text44")}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="flex flex-col gap-y-[20px]">
                        <ul className="flex flex-col gap-y-[10px]">
                          <h1 className="py-[5px] font-[700] dark:text-[#e9e9e9] ">
                            Должностные обязанности:
                          </h1>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" /> Продажи компьютерного
                            оборудования
                          </li>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Развитие, поддержание отношений с новыми и
                            существующими клиентами компании
                          </li>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Проведение переговоров и подготовка коммерческих
                            предложений
                          </li>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Выполнение плана по продажам
                          </li>
                        </ul>
                        <ul className="flex flex-col gap-y-[10px]">
                          <h1 className="py-[5px] font-[700] dark:text-[#e9e9e9]">Требования:</h1>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Честность, порядочность, пунктуальность, активность,
                            коммуникабельность, бесконфликтность
                          </li>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Хорошее знание ассортимента компьютерного
                            оборудования
                          </li>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Умение работать с большим количеством позиций
                          </li>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Умение составлять спецификации и коммерческие
                            предложения для клиентов
                          </li>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Активное ведение сделок и полное участие в проектах
                          </li>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Умение вести переговоры
                          </li>
                        </ul>
                        <ul className="flex flex-col gap-y-[10px]">
                          <h1 className="py-[5px] font-[700] dark:text-[#e9e9e9]">Условия:</h1>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Полный рабочий день
                          </li>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Испытательный срок два месяца
                          </li>
                        </ul>
                        <div className="py-[5px]">
                          <button
                            onClick={handleClickOpen}
                            className="px-[30px] py-[7px] uppercase font-[700] text-[#FFF] text-[14px] bg-[#D74C20]"
                          >
                            Отправить Резюме
                          </button>
                        </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className="w-full dark:bg-[#111827]">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography
                      className="px-[10px] py-[15px] text-[#D74C20]  flex items-start dark:text-[#e9e9e9]"
                      sx={{ fontWeight: 700 }}
                    >
                       {t("navbar.text44")}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="flex flex-col gap-y-[20px]">
                        <ul className="flex flex-col gap-y-[10px]">
                          <h1 className="py-[5px] font-[700] dark:text-[#e9e9e9] ">
                            Должностные обязанности:
                          </h1>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" /> Продажи компьютерного
                            оборудования
                          </li>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Развитие, поддержание отношений с новыми и
                            существующими клиентами компании
                          </li>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Проведение переговоров и подготовка коммерческих
                            предложений
                          </li>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Выполнение плана по продажам
                          </li>
                        </ul>
                        <ul className="flex flex-col gap-y-[10px]">
                          <h1 className="py-[5px] font-[700] dark:text-[#e9e9e9]">Требования:</h1>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Честность, порядочность, пунктуальность, активность,
                            коммуникабельность, бесконфликтность
                          </li>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Хорошее знание ассортимента компьютерного
                            оборудования
                          </li>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Умение работать с большим количеством позиций
                          </li>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Умение составлять спецификации и коммерческие
                            предложения для клиентов
                          </li>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Активное ведение сделок и полное участие в проектах
                          </li>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Умение вести переговоры
                          </li>
                        </ul>
                        <ul className="flex flex-col gap-y-[10px]">
                          <h1 className="py-[5px] font-[700] dark:text-[#e9e9e9]">Условия:</h1>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Полный рабочий день
                          </li>
                          <li className="flex items-start gap-x-[5px] text-[#868686] dark:text-[#e9e9e9]">
                            {" "}
                            <img src={chevro} alt="" />
                            Испытательный срок два месяца
                          </li>
                        </ul>
                        <div className="py-[5px]">
                          <button
                            onClick={handleClickOpen}
                            className="px-[30px] py-[7px] uppercase font-[700] text-[#FFF] text-[14px] bg-[#D74C20]"
                          >
                            Отправить Резюме
                          </button>
                        </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className="py-[25px]">
                <p className="text-[#868686] dark:text-[#FFF]">
                  Полная информация о работе и заработной плате по тел. +375 44
                  767 60 76
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
