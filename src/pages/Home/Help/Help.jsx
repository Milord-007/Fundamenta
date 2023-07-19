import './Help.css'
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Help() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div className='dark:bg-black dark:text-white pt-[80px] pb-[80px] max-w-[1450px] mx-auto '>
                    <div className="w-[90%] mx-auto bck1 flex  p-[40px]">
            <div className="w-[] md:w-full ">
                 <p className="text-[#FFFFFF] text-[13px] font-[300] ">Главная  /  Часто задаваемые вопросы</p>
                 <p className="text-[#FFFFFF] text-[25px] font-[800]">Отвечаем на вопросы доставки</p>
                 {/* <p className='text-white text-[14px]'>ранний доступ к распродажам в магазинах</p> */}
                 {/* <div>
                 <button className="btn md:w-full  p-2 mt-2 text-[14px]">Получить адрес в UK</button>
                 </div> */}
            </div>
    </div>
         <div className='w-[80%] mx-auto pt-[30px]'>
             <p>Поиск в вопросах и ответах:</p>
             <div className="search-container">
  <input type="search" placeholder="Введите свой вопрос..." class="w-full p-3 border-b-2 rounded-[8px] relative" />
  <i className="fa-solid fa-magnifying-glass text-[#01CD7D] text-[30px] icon cursor-pointer"></i>
</div>
            
         </div>

         <div className='w-[80%] mx-auto pt-8'>
            <p className='text-[30px] font-[800]'>Виртуальный адрес в Великобритании</p>


            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{marginTop:"50px",padding:"15px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
          Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{marginTop:"20px",padding:"15px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>Как я узнаю что заказ пришел на склад?</Typography>
       
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{marginTop:"20px",padding:"15px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
          Покупки на Eбeй / Ebay
          </Typography>
      
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{marginTop:"20px",padding:"15px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>Что делать после того, как я выкупил заказ самостоятельно на ваш адресс?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{marginTop:"20px",padding:"15px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>Как купить на виртуальный адрес?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} sx={{marginTop:"20px",padding:"15px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>Сколько стоит виртуальный адрес?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} sx={{marginTop:"20px",padding:"15px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
          Как купить на виртуальный адрес?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* 2 */}

      <p className='text-[30px] font-[800] pt-[80px]'>Покупки в магазинаx Англии, скидки и промкода</p>


<Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} sx={{marginTop:"50px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel8bh-content"
id="panel8bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>
Анонс скидочныx купонов и промкодов
</Typography>
{/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
</AccordionSummary>
<AccordionDetails>
<Typography>
Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
Aliquam eget maximus est, id dignissim quam.
</Typography>
</AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel2bh-content"
id="panel2bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>Как узнать пришел ли заказ полностью?</Typography>

</AccordionSummary>
<AccordionDetails>
<Typography>
Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
varius pulvinar diam eros in elit. Pellentesque convallis laoreet
laoreet.
</Typography>
</AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel3bh-content"
id="panel3bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>
Как узнать что заказ пришел на склад?
</Typography>

</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel4bh-content"
id="panel4bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>Что делать после того, как я выкупил заказ самостоятельно на ваш адресс?</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>

<Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel5bh-content"
id="panel5bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>Как купить на виртуальный адрес?</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>

<Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel6bh-content"
id="panel6bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>Что такое выкуп в компашке?</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>


<Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel7bh-content"
id="panel7bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>
Как понять, что заказ куплен?
</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>


<Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel7bh-content"
id="panel7bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>
Можно ли купить с частичной предоплатой?
</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>




<Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel7bh-content"
id="panel7bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>
Что такое обычный заказ?
</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>
{/* 3 */}

<p className='text-[30px] font-[800] pt-[80px]'>Доставка из Англии</p>


<Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} sx={{marginTop:"50px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel8bh-content"
id="panel8bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>
Анонс скидочныx купонов и промкодов
</Typography>
{/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
</AccordionSummary>
<AccordionDetails>
<Typography>
Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
Aliquam eget maximus est, id dignissim quam.
</Typography>
</AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel2bh-content"
id="panel2bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>Как узнать пришел ли заказ полностью?</Typography>

</AccordionSummary>
<AccordionDetails>
<Typography>
Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
varius pulvinar diam eros in elit. Pellentesque convallis laoreet
laoreet.
</Typography>
</AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel3bh-content"
id="panel3bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>
Как узнать что заказ пришел на склад?
</Typography>

</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel4bh-content"
id="panel4bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>Что делать после того, как я выкупил заказ самостоятельно на ваш адресс?</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>

<Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel5bh-content"
id="panel5bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>Как купить на виртуальный адрес?</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>

<Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel6bh-content"
id="panel6bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>Что такое выкуп в компашке?</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>


<Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel7bh-content"
id="panel7bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>
Как понять, что заказ куплен?
</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>


<Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel7bh-content"
id="panel7bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>
Можно ли купить с частичной предоплатой?
</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>




<Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel7bh-content"
id="panel7bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>
Что такое обычный заказ?
</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>


{/* 4 */}

<p className='text-[30px] font-[800] pt-[80px]'>Оплата</p>


<Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} sx={{marginTop:"50px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel8bh-content"
id="panel8bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>
Анонс скидочныx купонов и промкодов
</Typography>
{/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
</AccordionSummary>
<AccordionDetails>
<Typography>
Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
Aliquam eget maximus est, id dignissim quam.
</Typography>
</AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel2bh-content"
id="panel2bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>Как узнать пришел ли заказ полностью?</Typography>

</AccordionSummary>
<AccordionDetails>
<Typography>
Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
varius pulvinar diam eros in elit. Pellentesque convallis laoreet
laoreet.
</Typography>
</AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel3bh-content"
id="panel3bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>
Как узнать что заказ пришел на склад?
</Typography>

</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>

{/* 3 */}

<p className='text-[30px] font-[800] pt-[80px]'>Общие вопросы</p>


<Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} sx={{marginTop:"50px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel8bh-content"
id="panel8bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>
Анонс скидочныx купонов и промкодов
</Typography>
{/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
</AccordionSummary>
<AccordionDetails>
<Typography>
Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
Aliquam eget maximus est, id dignissim quam.
</Typography>
</AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel2bh-content"
id="panel2bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>Как узнать пришел ли заказ полностью?</Typography>

</AccordionSummary>
<AccordionDetails>
<Typography>
Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
varius pulvinar diam eros in elit. Pellentesque convallis laoreet
laoreet.
</Typography>
</AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel3bh-content"
id="panel3bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>
Как узнать что заказ пришел на склад?
</Typography>

</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel4bh-content"
id="panel4bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>Что делать после того, как я выкупил заказ самостоятельно на ваш адресс?</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>

<Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel5bh-content"
id="panel5bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>Как купить на виртуальный адрес?</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>

<Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel6bh-content"
id="panel6bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>Что такое выкуп в компашке?</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>


<Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel7bh-content"
id="panel7bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>
Как понять, что заказ куплен?
</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>


<Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel7bh-content"
id="panel7bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>
Можно ли купить с частичной предоплатой?
</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>




<Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel7bh-content"
id="panel7bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>
Что такое обычный заказ?
</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>

{/* 4 */}

<p className='text-[30px] font-[800] pt-[80px]'>Посылки</p>


<Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} sx={{marginTop:"50px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel8bh-content"
id="panel8bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>
Анонс скидочныx купонов и промкодов
</Typography>
{/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
</AccordionSummary>
<AccordionDetails>
<Typography>
Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
Aliquam eget maximus est, id dignissim quam.
</Typography>
</AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel2bh-content"
id="panel2bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>Как узнать пришел ли заказ полностью?</Typography>

</AccordionSummary>
<AccordionDetails>
<Typography>
Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
varius pulvinar diam eros in elit. Pellentesque convallis laoreet
laoreet.
</Typography>
</AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel3bh-content"
id="panel3bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>
Как узнать что заказ пришел на склад?
</Typography>

</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel4bh-content"
id="panel4bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>Что делать после того, как я выкупил заказ самостоятельно на ваш адресс?</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>

<Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel5bh-content"
id="panel5bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>Как купить на виртуальный адрес?</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>

<Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel6bh-content"
id="panel6bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>Что такое выкуп в компашке?</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>


<Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel7bh-content"
id="panel7bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>
Как понять, что заказ куплен?
</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>


<Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel7bh-content"
id="panel7bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>
Можно ли купить с частичной предоплатой?
</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>




<Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')} sx={{marginTop:"20px",padding:"15px"}}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel7bh-content"
id="panel7bh-header"
>
<Typography sx={{ width: '100%', flexShrink: 0 }}>
Что такое обычный заказ?
</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
amet egestas eros, vitae egestas augue. Duis vel est augue.
</Typography>
</AccordionDetails>
</Accordion>




          
         </div>
         <div className="w-[90%] mx-auto bck1 flex mt-[50px]  p-[40px]">
            <div className="w-[80%] md:w-full order-2 flex  justify-evenly md:flex-col md:gap-y-[20px]">
                 <p className="text-[#FFFFFF] text-[25px] md:w-full font-[800]">Остались вопросы? Спросите нас в соцсетях!</p>
                 <div className='text-[35px] w-[20%] md:w-full flex justify-evenly'>
                 <i className="fa-brands fa-whatsapp text-[white]"></i>
                 <i className="fa-brands fa-viber text-[white]"></i>
                 <i class="fa-brands fa-telegram text-[white]"></i>
                 </div>
              
            </div>
          </div>
    </div>
  )
}

export default Help