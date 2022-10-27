import React, { useEffect, useRef, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import image1 from "../../images/1.jpg";
import Appointments from "./Appointments";
import {Link,Routes,Route} from 'react-router-dom';
import "../../CSS/Barber/portal.css"
import UpcomingAppointments from './UpcomingAppointments';
import AddServices from './AddServices';
import UpdateServices from './UpdateServices';
import AllServices from './AllServices';
export default function BarberPortal() {
    const navigate = useNavigate();
    const [Close, setClose] = useState(false);
    const [Services, setServices] = useState(false);
    const [Menu, setMenu] = useState(false);
    const upButton = useRef();
    const ShowList = () => {
        if (Close) {
            setClose(false);
        } else {
            setClose(true);
        }
        console.log(Close);
    }
    const handleServices = () => {
        if (Services) {
            setServices(false);
        } else {
            setServices(true);
        }
        console.log(Close);
    }

    const showMenu = () => {
        console.log(Menu);
        if (Menu) {
            setMenu(false);
        }else{
            setMenu(true)
        }
    }
    const [Data, setData] = useState({
        data:{}
    });
    const barberDataFromServer = async () => {
        try {
            const res = await axios.get("/Barber/portal", { withCredentials: true });
            setData({
                data:res.data
            });
            return
        } catch (error) {
            console.log(error);
            console.log(error.response.status);
            navigate('/barber/login');
        }
    }
       useEffect(async() => {
         barberDataFromServer()
       }, [])

    return (
        <div className='Container-fluid'>
            <div className='row'>
                <div className={`${Menu ? "col-3" : ""}`} style={{"padding":"0px"}}>
                    <div className={`container-bar ${Menu ? "display-line" : "display-none"} `}>

                        <nav className='Side-navbar'>
                            <div className='cancel-button'>
                                <button onClick={showMenu}>
                                    <div className='logo '>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className='logo up'>
                                        <i className="fa-solid fa-angle-up"></i>
                                    </div>
                                </button>
                            </div>
                            <div className='menu-items '>
                                <div className='logo-item'>
                                    <i className="fa-solid fa-calendar-check"></i>
                                </div>
                                <div className='menu-title'>
                                    Check Appointments
                                </div>
                                <div className='menu-dropDown'>
                                    <button onClick={ShowList}>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </button>

                                </div>
                                <div className={`sub-menu ${Close ? "d-block" : "display-none"}`} >
                                    <div className='sub-item'>
                                        <Link className='link-white nav-link' to='upcoming/Appointments'>
                                            Upcoming Appointments
                                        </Link>
                                    </div>
                                    <div className='sub-item'>
                                        <Link className='link-white nav-link' to='/barber/portal'>
                                            Confirm Appointments
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='menu-items '>
                                <div className='logo-item'>
                                    <i className="fa-solid fa-business-time"></i>
                                </div>
                                <div className='menu-title'>
                                    Services
                                </div>
                                <div className='menu-dropDown'>
                                    <button onClick={handleServices}>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </button>

                                </div>
                                <div className={`sub-menu ${Services ? "d-block" : "display-none"}`} >
                                    <div className='sub-item'>
                                        <Link className='link-white nav-link' to='Services/NewServices'>
                                            Add Service
                                        </Link>
                                    </div>
                                    <div className='sub-item'>
                                        <Link className='link-white nav-link' to='Services/UpdateServices'>
                                            Update Service
                                        </Link>
                                    </div>
                                    <div className='sub-item'>
                                        <Link className='link-white nav-link' to='Services/AllServices'>
                                            All Services
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='menu-items'>
                                <div className='logo-item'>
                                    <i className="fa-solid fa-calendar-check"></i>
                                </div>
                                <div className='menu-title'>
                                    Appointments
                                </div>
                            </div>
                            <div className='menu-items'>
                                <div className='logo-item'>
                                    <i className="fa-solid fa-calendar-check"></i>
                                </div>
                                <div className='menu-title'>
                                    Appointments
                                </div>
                            </div>
                        </nav>
                        <div className='barber-info'>
                            <div className='barber_image'>
                                <img src={image1} alt="barberImage" />
                            </div>
                            <div className='barber_Name'>
                                {Data.data.Name}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={` ${Menu ? "col-9 " : "col-12"} `} style={{"padding":"0px"}}>
                    <div className='row ' style={{"backgroundColor":"black","color":"white"}}>
                        <div className='col-12 sm-hight' style={{"height":"10vh"}}>
                            <div className='Menu-logo display-line ' style={{"paddingTop":"6px"}}>
                                <button onClick={showMenu} className="open-button">
                                    <i className="fa-solid fa-bars"></i>

                                </button>
                            </div>
                            <div className='BarberPortal heading-sm display-line ' style={{"marginLeft":"38%","fontSize":"1rem","fontFamily":"sans-serif"}}>
                               WELCOME TO  BARBER PORTAL
                            </div>
                        </div>
                    </div>
                    <Routes>
                        <Route path='/' element={<Appointments/>}/>
                        <Route path='upcoming/Appointments' element={<UpcomingAppointments />} />
                        <Route path='Services/NewServices' element={<AddServices data ={Data.data}/>} />
                        <Route path='Services/UpdateServices' element={<UpdateServices />} />
                        <Route path='Services/AllServices' element={<AllServices />} />
                    </Routes>
                </div>
            </div>
        </div>
    )

}
