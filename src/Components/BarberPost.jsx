import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import axios from 'axios';
import "../CSS/card.css";
import image1 from "../images/b1.jpg";
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Modal, Tabs, Tab } from 'react-bootstrap';
export default function BarberPost() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [token, settoken] = useState(0);
    const [show, setShow] = useState(false);
    const [Barber, setBarber] = useState({
        barberInfo: {}
    });
    const [Client, setClient] = useState({
        client: {}
    });
    const [Data, setData] = useState({
        password: "",
        message: "",
        userEmail: "",
        baberEmail: ""
    });
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleConfirm = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put('/barber/appointment/' + Barber.barberInfo._id, { withCredentials: true });
            if (res.status === 201) {
                alert(res.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleOnsubmit = async (e) => {
        e.preventDefault();
        if (!Data.password || !Data.message) {
            return alert("please Enter Password or Message");
        }
        try {
            const res = await axios.post('/Barber/message', Data);
            if (res.status === 201) {
                alert("Message Sent");
                setData({
                    password: "",
                    message: ""
                });
            }
        } catch (error) {
            if (error.response.status === 535) {
                alert(error.response.data);
            }
        }
    }
    const handlePassword = (e) => {
        setData(Data => ({
            ...Data,
            password: e.target.value
        }));
    }
    const handleMessage = (e) => {
        setData(Data => ({
            ...Data,
            message: e.target.value
        }));
    }
    useEffect(async () => {
        try {
            const res = await axios.get('/barber/BarberPost/' + id, { withCredentials: true });
            if (res.status === 201) {
                setBarber({
                    barberInfo: res.data.BarberData
                });
                setClient({
                    client: res.data.clientData
                });
                setData(Data => ({
                    ...Data,
                    userEmail: res.data.clientData.Email,
                    baberEmail: res.data.BarberData.Email
                }));
                // setData(Barber.barberInfo.confirmToken.length);
            }
            console.log(res.data)
        } catch (error) {
            if (error.response.status === 401) {
                return navigate('/client/login');
            }
            console.log(error);
        }
    }, [])



    return (
        <div className='container-fluid mt-5'>
            <div className="row">
                <Navbar bg="dark" />
            </div>
            <div className='container-fluid mt-5'>
                <div className='row' style={{ "marginTop": "4.7rem" }}>
                    <div className='col-lg-4 col-md-12'>
                        <h5 className='Barber-Shop-Content'>{Barber.barberInfo.BusinessName}</h5>
                        <div className='profile-barber'>
                            <div className='barber-profile-image'>
                                <img src={image1} alt="profile" />
                            </div>
                            <div className='barber-profile-content'>
                                <div className='Barber-shop-content'>
                                    <h4>{Barber.barberInfo.Name}</h4>
                                </div>
                                <div className='Barber-status'>
                                    <span>Open</span>
                                </div>
                                <span>
                                </span>
                            </div>
                        </div>
                        <div className='barber-profile-rating'>
                            <i className="fa-solid fa-star stars"></i>
                            <i className="fa-solid fa-star stars "></i>
                            <i className="fa-solid fa-star stars"></i>
                            <i className="fa-solid fa-star stars-half-stroke stars"></i>
                            <i className="fa-regular fa-star stars "></i>
                        </div>
                        <div className='Token-Number'>
                            {/* <button type="button" className="btn btn-primary btn-lg btn-block">Get Token</button> */}
                            <Button variant="primary" onClick={handleShow}>
                                Get Token
                            </Button>
                        </div>
                    </div>
                    <div className='col-lg-8 col-md-12 mt-5'>
                        <ul className="list-group">
                            {
                                Barber.barberInfo.services?.map(res => {
                                    return <li className="list-group-item d-flex justify-content-between align-items-center">
                                            {res.serviceName}
                                            <span className="badge badge-dark" style={{ "color": "#000", "fontSize": "20px", "lineHeight": "0" }}>{res.servicePrice} PKR</span>
                                        </li>
                                })
                            }
                        </ul>
                    </div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Appointment </Modal.Title>
                        </Modal.Header>
                        
                        <Modal.Body>Current Token is  {Barber.barberInfo.confirmToken?.length}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="dark" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="success" onClick={handleConfirm}>
                                Confirm Seat
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className='container mt-5 border'>
                    <div className='row mt-3 mb-3'>
                        <div className='col-12'>
                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="home" title="Home">
                                    <form onSubmit={handleOnsubmit}>
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" value={Data.password} placeholder="Enter Gmail Password" onChange={handlePassword} />
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={Data.message} onChange={handleMessage}></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary">Send</button>
                                        </div>
                                    </form>
                                </Tab>
                                <Tab eventKey="profile" title="Profile">
                                    <div>
                                        <p>Name : {Barber.barberInfo.Name}</p>
                                        <p>Number: {Barber.barberInfo.Number}</p>
                                        <p>Email : {Barber.barberInfo.Email}</p>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
