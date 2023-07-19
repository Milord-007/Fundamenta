import { useState } from 'react';
import React from "react";
import "./Layout.css";
import { Link, Outlet,useLocation } from "react-router-dom";
import logo2 from './logo2.svg'

import { useTranslation } from 'react-i18next';
import Switcher from "../components/Switcher";
import logo from './logo.svg'
import {Drawer } from 'antd';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { App, Space } from 'antd';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import {  Modal } from 'antd';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const StyledMenu = styled((props) => (


  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));



const Layout = () => {
  // 
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  // 
  const { message} = App.useApp();
  const showMessage = () => {
    message.success('Success!');
  };

  // ///////////////////
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };


  ////////////////////////

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openn = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };


  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);

  };

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);


  return (
    <div className=''>
      
      <div className="">
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}


      <Drawer className='text-center dark:bg-[#111827] dark:text-white'
        title="Menu"
        placement={placement}
        width={300}
        onClose={onClose}
        open={open}
     
      
      >
        <div className='w-[80%] mx-auto '>
          <img src={logo} alt="" className=' object-contain' />
        </div>
        <div className='flex justify-evenly pb-5 mt-4'>

                  <Link to={"about"}>
                  <p onClick={()=> setOpen(false)} className='font-[400]'>{t("navbar.text10")}</p>
                  </Link>
                  <Link to={"news"}>
                  <p onClick={()=> setOpen(false)} className=''>{t("navbar.text4")}</p>
                  </Link>
                  <Link to={"feedback"}>
                  <p onClick={()=> setOpen(false)} className=''>{t("navbar.text5")}</p>
                  </Link>
        </div>
          <ul className='flex flex-col  items-center gap-y-[20px]  fn font-[500] text-[18px] '>
            <Link to={"/"}>
                  <li className=' pr-2'>{t("navbar.text1")}</li>
            </Link>
                  <li>
                  <Button sx={{background:"transparent",color:"black"}} className="dark:text-[white]"
               id="demo-customized-button"
               aria-controls={openn ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
               aria-expanded={openn ? 'true' : undefined}
              variant="contained"
            disableElevation
            onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
              size="small"
>
         {t("navbar.text2")}
</Button>
      <StyledMenu className=""
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={openn}
        onClose={handleClose}
      >
          <Link to={"/page1"}>
        <MenuItem onClick={handleClose} disableRipple>
             CFA
        </MenuItem>
          </Link>
          <Link to={"page1"}>
        <MenuItem onClick={handleClose} disableRipple>
        FDP
        </MenuItem>
          </Link>
          <Link to={"page1"}>
        <MenuItem onClick={handleClose} disableRipple>
         Вибропогружение шпунта
        </MenuItem>
          </Link>
       
      </StyledMenu>
                  </li>
                   <Link to={"objects"}>
                  <li onClick={()=> setOpen(false)} className='pr-2'>{t("navbar.text3")}</li>
                   </Link>
                   <Link>
                  <li onClick={()=> setOpen(false)} className=' pr-2'>{t("navbar.text4")}</li>
                   </Link>
                   <Link to={"feedback"}>
                  <li onClick={()=> setOpen(false)}>{t("navbar.text5")}</li>
                   </Link>
                </ul>
                <button onClick={() => { setIsModalOpen(true); setOpen(false); }} className='bg-[#D74C20] text-white px-7 py-1 text-[14px] mt-[30px]'>
  {t("navbar.text9")}
</button>

       
      </Drawer>
        <div className="max-w-[1450px] mx-auto fixed left-0 right-0 z-20">
          
          <div className=' bg-[#F3F3F3] dark:bg-[#111827] dark:text-white'>
             <div className='w-[90%] sm:w-[90%] fn f mx-auto p-2 flex justify-between '>
                <div className='flex w-[40%]  sm:w-[70%] fn gap-x-[20px] flex-wrap'>
                <p className='fn text-[16px] sm:text-[12px] font-[700] hidden sm:block'><i className="fa-solid fa-phone"></i>  +375 44 767 60 76 <i className="fa-brands fa-telegram text-[#6a8cc8] sm:text-[18px] text-[20px] pl-2"></i> 
                <i className="fa-brands fa-whatsapp text-[#46812c] sm:text-[18px] text-[22px] pl-1"></i>
                <i className="fa-brands fa-viber text-[#6b64a6] sm:text-[18px] text-[20px] pl-1"></i>
                </p>
            
                  <Link to={"about"}>
                  <p className='font-[400] sm:hidden'>{t("navbar.text10")}</p>
                  </Link>
                  <Link to={"news"}>
                  <p className='sm:hidden'>{t("navbar.text4")}</p>
                  </Link>
                  <Link to={"feedback"}>
                  <p className='sm:hidden'>{t("navbar.text5")}</p>
                  </Link>
             
                </div>
                <div className='flex w-[5%] sm:w-[15%] justify-evenly gap-3 '>
                   <button className='btn' onClick={() => changeLanguage("ru")}>RU</button>
                   <button className='btn' onClick={() => changeLanguage("en")}>EN</button>
                   <Switcher/>
                </div>
             </div>
          </div>
             <div className=' border-b-2 border-t-2 bg-white dark:bg-[#111827]'>
             <div className='w-[90%] sm:w-[90%] mx-auto p-2 sm:p-3 flex justify-between items-center dark:text-white'>
              <div className='sm:w-[50%]'>
                <Link to={"/"}>
                <img src={logo} alt="" />
                </Link>
              </div>
              <div>
              <button className="border-2 border-[#0D4373] hidden sm:block p-2 rounded-lg cursor-pointer hover:shadow-lg">
               <i className="fa-solid fa-bars hidden sm:block text-[20px] text-[#0D4373]" onClick={showDrawer}></i>
              </button>
                <p className='fn text-[16px] font-[700] sm:hidden'><i className="fa-solid fa-phone"></i>  +375 44 767 60 76 <i class="fa-brands fa-telegram text-[#6a8cc8] text-[20px] pl-2"></i> 
                <i className="fa-brands fa-whatsapp text-[#46812c] text-[22px] pl-1"></i>
                <i className="fa-brands fa-viber text-[#6b64a6] text-[20px] pl-1"></i>
                </p>
                <p className='text-[16px] fn font-[400] text-[#333333] dark:text-white sm:hidden'>
                info@svai.by
                </p>

              </div>
   
             </div>
             </div>
             <div className='bg-[#0D4373] sm:hidden dark:bg-[#111827]'>
              <div className='w-[90%] mx-auto flex justify-between p-4'>
                <ul className='flex justify-evenly w-[50%] fn font-[500] md:text-[16px] text-[18px] text-[#FFFFFF]'>
                  <Link to={"/"}>
                  <li className='border-r-2 pr-2'>{t("navbar.text1")}</li>
                  </Link>
                  <li className='border-r-2 pr-2'>
                  <Button sx={{background:"transparent"}}
               id="demo-customized-button"
               aria-controls={openn ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
               aria-expanded={openn ? 'true' : undefined}
              variant="contained"
            disableElevation
            onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
              size="small"
>
     {t("navbar.text2")}
</Button>
      <StyledMenu className=""
        // id="demo-customized-menu"
        MenuListProps={{
          // 'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={openn}
        onClose={handleClose}
      >
            <Link to={"/career"}>
        <MenuItem onClick={handleClose}  className="dark:bg-[#111827]  ">
             Career
        </MenuItem>
          </Link>
          <Link to={"/texnika"}>
        <MenuItem onClick={handleClose}  className="dark:bg-[#111827]  ">
             Technique
        </MenuItem>
          </Link>
          <Link to={"/page1"}>
        <MenuItem onClick={handleClose}  className="dark:bg-[#111827]  ">
             CFA
        </MenuItem>
          </Link>
          <Link to={"page1"}>
        <MenuItem onClick={handleClose}   className="dark:bg-[#111827] ">
        FDP
        </MenuItem>
          </Link>
          <Link to={"page1"}>
        <MenuItem onClick={handleClose}   className="dark:bg-[#111827] ">
         Вибропогружение шпунта
        </MenuItem>
          </Link>
       
      </StyledMenu>
             
                  </li>
                  <Link to={"/objects"}>
                  <li className='border-r-2 pr-2'>{t("navbar.text3")}</li>
                  </Link>
                  <Link to={"/news"}>
                  <li className='border-r-2 pr-2'>{t("navbar.text4")}</li>
                  </Link>
                  <Link to={"/feedback"}>
                  <li>{t("navbar.text5")}</li>
                  </Link>
                </ul>
                <div>
                  <button className='bg-[#D74C20] text-white px-7 py-1 text-[14px] fn ' onClick={showModal}>
                  {t("navbar.text9")}
                  </button>
                </div>

              </div>

             </div>



        </div>

          <Outlet />
        <footer className="pt-[60px] bg-[#0D4373] min-h-[40vh] flex flex-col justify-center items-center dark:bg-[#111827]">
          <div>
         <img src={logo2} alt="" />
          </div>

         <p className='text-white mt-[50px]'>© Copyrights 2021 Fundamenta. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
