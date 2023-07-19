import React from 'react'
import { Link, Outlet,useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import qwe from './404.jpg'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function Nothing() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className='flex justify-center bg-[#0D4373] max-w-[1450px] mx-auto pt-[80px]'>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <p>Name</p>
            <input type="text"  className='w-full border-2'/>
            <p>Number</p>
            <input type="number"  className='w-full border-2'/>
            <p>Email</p>
            <input type="text"  className='w-full border-2'/>
            <p>Problem</p>
            <textarea className='border-2 w-full'></textarea>
            <div className='flex justify-end'>
            <button onClick={()=>setOpen(false)} className='bg-[#D74C20] text-white p-2 px-6'>Send</button>

            </div>
            {/* <button>Send</button> */}
            
        </Box>
      </Modal>

      <div className='w-[90%] mx-auto flex flex-col justify-center items-center min-h-[100vh] '>
          <p className='text-[288px] text-[#FFFFFF] font-[800]'>404</p>
          <p className='text-[24px] text-[#FFFFFF] font-[700]'>Сожалеем, но запрошенная страница не найдена</p>
          <div className='flex justify-between gap-6 pt-4'>
            <Link to={"/"}>
            <button className='bg-[#D74C20] text-white p-2'>Перейти на главную</button>
            </Link>
             <button onClick={handleOpen} className=' border-2 text-white p-1'>Связаться с нами</button>
          </div>

     <div>
            
     </div>

      </div>
     
      </div>
  )
}

export default Nothing