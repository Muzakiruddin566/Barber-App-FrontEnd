import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import "./CSS/App.css"
import BarberBussiness from './Components/BarberBussiness'
import About from './Components/About'
import Login from './Components/Login'
import Register from './Components/Register';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "@bootstrap/scss/bootstrap";
// import "bootstrap-sass";
// import './App.scss';
import FormVarification from './Components/FormVarification'
import BarberRegister from "./Components/Barber/BarberRegister";
import BarberCategory from './Components/Barber/BarberCategory'
import BarberLocation from './Components/Barber/BarberLocation'
import HomServices from './Components/Barber/HomServices'
import BarberLogin from './Components/Barber/BarberLogin';
import BarberVarification from "./Components/Barber/BarberVarification";
import BarberPortal from './Components/Barber/BarberPortal'
import ClientPortal from './Components/CientPortal/ClientPortal';
import BarbersList from './Components/BarbersList'
import BarberPost from './Components/BarberPost'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path = "barber-Business" element={<BarberBussiness/>} />
          <Route path="About" element={<About/>} />
          <Route path="Barbers" element={<BarbersList />} />
          <Route path='Barbers/Barber/:id' element={<BarberPost />} />
          <Route path="contactUs" element={<div><Navbar/><h1>This is Contact us Page</h1></div>} />
          <Route path="client/login" element={<Login/>} />
          <Route path="client/register" element={<Register/>} />
          <Route path='client/verificationCode/:id' element={<FormVarification />}/>
          <Route path='Client/portal/*' element={<ClientPortal />} />
          <Route path='Barber/Register' element={<BarberRegister/>}/>
          <Route path='Barber/Register/SelectCategory' element={<BarberCategory />}/>
          <Route path='Barber/Register/Location' element={<BarberLocation />}/>
          <Route path='Barber/Register/Services' element={<HomServices />}/>
          <Route path='Barber/Login' element={<BarberLogin />} />
          <Route path='Barber/verificationCode/:id' element={<BarberVarification />} />
          <Route path='Barber/portal/*' element={<BarberPortal />} />
         
        </Routes>
        {/* <Home/> */}
      </BrowserRouter>
    </>
  )
}
