import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import image2 from "../../images/person-icon.png";
import { Link, Routes, Route } from 'react-router-dom';
import "../../CSS/Barber/portal.css"
import ClientInfo from "./ClientInfo";
import UpcomingAppointments from '../Barber/UpcomingAppointments';
import Appointments from './Appointments';
export default function ClientPortal() {
    const navigate = useNavigate();
    const [Close, setClose] = useState(false);
    const [Menu, setMenu] = useState(false);
    const [Data, setData] = useState({
        name: "",
        phoneNumber: "",
        Gender: "",
        Email: ""
    });
    // Show List
    const ShowList = () => {
        if (Close) {
            setClose(false);
        } else {
            setClose(true);
        }
        console.log(Close);
    }
    // Show Menu
    const showMenu = () => {
        console.log(Menu);
        if (Menu) {
            setMenu(false);
        } else {
            setMenu(true)
        }
    }

    // check Login and get Data

    const getClientDataToServer = async () => {
        try {
            const res = await axios.get("/client/portal", { withCredentials: true });
            if (res.status === 201) {
                setData(Data => ({
                    name: res.data.Name,
                    phoneNumber: res.data.Number,
                    Gender: res.data.Gender,
                    Email: res.data.Email
                }));
            }
        } catch (error) {
            console.log(error);
            console.log(error.response.status);
            navigate('/client/login');
        }
    }

    useEffect(() => {
        getClientDataToServer();
    }, [])


    return (
        <div className='Container-fluid'>
            <div className='row'>
                <div className={`${Menu ? "col-3" : ""}`} style={{ "padding": "0px" }}>
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
                                    Appointments
                                </div>
                                <div className='menu-dropDown'>
                                    <button onClick={ShowList}>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </button>

                                </div>
                                <div className={`sub-menu ${Close ? "d-block" : "display-none"}`} >
                                    <div className='sub-item'>
                                        <Link className='link-white nav-link' to='/client/portal/Appointments'>
                                            Current Appointments
                                        </Link>
                                    </div>
                                    <div className='sub-item'>
                                        <Link className='link-white nav-link' to='Past/Appointments'>
                                            Past Appointments
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='menu-items'>
                                <div className='logo-item'>
                                    <i className="fa-solid fa-calendar-check"></i>
                                </div>
                                <div className='menu-title'>
                                    Barber List
                                </div>
                            </div>
                            <div className='menu-items'>
                                <div className='logo-item'>
                                    <i className="fa-solid fa-calendar-check"></i>
                                </div>
                                <div className='menu-title'>
                                    <Link className='link-white nav-link' to='detail'>
                                        Details
                                    </Link>
                                </div>
                            </div>
                            <div className='menu-items'>
                                <div className='logo-item'>
                                    <i className="fa-solid fa-calendar-check"></i>
                                </div>
                                <div className='menu-title'>
                                    History
                                </div>
                            </div>
                        </nav>
                        <div className='client-info'>
                            <hr />
                            <div className='client_image'>
                                <img src={image2} alt="barberImage" />
                            </div>
                            <div className='client_Name'>
                                {Data.name.toLocaleUpperCase()}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={` ${Menu ? "col-9 " : "col-12"} `} style={{ "padding": "0px" }}>
                    <div className='row ' style={{ "backgroundColor": "black", "color": "white" }}>
                        <div className='col-12 sm-hight' style={{ "height": "10vh" }}>
                            <div className='Menu-logo display-line ' style={{ "paddingTop": "6px" }}>
                                <button onClick={showMenu} className="open-button">
                                    <i className="fa-solid fa-bars"></i>

                                </button>
                            </div>
                            <div className='BarberPortal heading-sm display-line ' style={{ "marginLeft": "38%", "fontSize": "1rem", "fontFamily": "sans-serif" }}>
                                WELCOME TO  USER PORTAL
                            </div>
                        </div>
                    </div>

                    {<Routes>
                        <Route path='Past/Appointments' element={<Appointments />} />
                        <Route path='Detail' element={<ClientInfo name={Data.name} number={Data.phoneNumber} email={Data.Email} gender={Data.Gender} />} />
                    </Routes>}
                </div>
            </div>
        </div>
    )
}
