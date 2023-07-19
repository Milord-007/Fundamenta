import React from 'react';
import { useTranslation } from 'react-i18next';
// import Switcher from './components/Switcher';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
// import Blog from './pages/Blog/Blog';
// import './pages/Blog/Blog.css'
import Layout from './layout/Layout'
import Home from './pages/Home/Home'
// import Blog from './pages/Blog/Blog'
// import About from './pages/About/About';
// import Prices from './pages/Prices/Prices';
// import Help from './pages/Home/Help/Help';
// import Bonus from './pages/Bonus/Bonus';
// import Blogg from './pages/Blogg/Blogg';
// import Shop from './pages/Shops/Shop';
import Nothing from './pages/Nothing/Nothing';
import Service from './pages/Home/Services/Service';
import More from './pages/More/More';
import About from './pages/Home/Services/About/About';
import Feedback from './pages/Home/Feedback/Feedback';
import News from './pages/Home/News/News';
import CookieConsent from 'react-cookie-consent';
import Career from './pages/Career/Career';
import Objects from './pages/Objects/Objects';
import Geog from './pages/Geog/Geog';
import Techniqua from './pages/Technique/Technique';
// import About from './pages/About/About';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children: [
      {
        index:true,
        element:<Home/>
      },
      {
        path: "page1",
        element: <Service />,
       
      },
      {
        path: "more",
        element: <More />,
       
      },
      {
        path: "about",
        element: <About />,
       
      },
  
      {
        path:"feedback",
        element:<Feedback/>
      },
      {
        path:"news",
        element:<News/>
      },
      {
        path:"career",
        element:<Career/>
      },
      {
        path:"objects",
        element:<Objects/>
      },
      {
        path:"geog",
        element:<Geog/>
      },
      {
        path:"texnika",
        element:<Techniqua/>
      },
    ]
  },
  {
    path:"*",
    element:<Nothing/>
  },
])



const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <RouterProvider router={router}/>
      {/* <Blog/> */}
      <div className="w-full flex justify-center">
        {/* <select onChange={(e) => changeLanguage(e.target.value)}>
          <option value="en">En</option>
          <option value="ru">Ru</option>
        </select> */}
      </div>
      {/* <div className="dark:bg-black"> */}
        {/* <Switcher /> 939401739*/}
      {/* </div> */}
      <CookieConsent debug={true} style={{height:"250px",background:"#111827",display:"" ,textAlign:"center",fontSize:"24px",}} buttonStyle={{background:"#D74C20",color:"white"}} buttonText="I accept it" className='dark:bg-[#111827]'>
        <p className='text-[27px]'>Cookies</p>
        This sites uses cookies.We value your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and safeguard your data when you visit our website.
         </CookieConsent>
    </div>
  );
};

export default App;