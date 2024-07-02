import React,{useEffect} from 'react';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assest/css/index.css";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutApp from './Componants/customer/Layout';
import HomeApp from './Componants/customer/Home';
import AboutApp from './Componants/customer/About';
// import ContactApp from './Componants/customer/Contact';
import ContactusApp from './Componants/customer/Contactus';
import PagenotfoundApp from './Componants/customer/Pagenotfound';
import BookingTableApp from './Componants/customer/Bookingtable';
import MenuApp from './Componants/customer/Menu';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route ecxat path='/' element={<LayoutApp />}>
            <Route index element={<HomeApp/>}/> 
            <Route path='/Home' element={<HomeApp />} />
            <Route path='/About' element={<AboutApp />} />
            <Route path='/Contactus' element={<ContactusApp />} />
            <Route path='/Bookingtable' element={<BookingTableApp />} />
            <Route path="/Menu" element={<MenuApp/>}/>
            <Route path='*' element={<PagenotfoundApp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
