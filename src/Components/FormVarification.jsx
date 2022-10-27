import React, { useState } from 'react'
import "../CSS/formVarification.css";
import Navbar from './Navbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function FormVarification() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [Message, setMessage] = useState({
        verify: false,
        error: false,
        message: ""
    });
    const [Varificaton, setVarificaton] = useState({
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        input5: "",
        input6: ""
    });
    const [Output, setOutput] = useState({
        code: 0
    })
    const onsubmit = async (event) => {
        event.preventDefault();
        let output = Varificaton.input1 + Varificaton.input2 + Varificaton.input3 + Varificaton.input4 + Varificaton.input5 + Varificaton.input6;
        output = parseInt(output);
        setOutput({ code: output });
        console.log(output);
        try {
            const res = await axios.put('/client/verificationCode/' + id, Output)
            if(res.status === 201){
                setMessage(Message => ({
                    ...Message,
                    verify: true,
                    error:false,
                    message: res.data
                }))
                setTimeout(() => {
                    navigate("/client/login");
                }, 3000);
            }
            
            setVarificaton(Varificaton => ({
                input1: "",
                input2: "",
                input3: "",
                input4: "",
                input5: "",
                input6: ""
            }));
        } catch (error) {
            if(error.response.status === 400){
                setMessage(Message => ({
                    ...Message,
                    verify: false,
                    error: true,
                    message: error.response.data
                }))
            }
            setVarificaton(Varificaton => ({
                input1: "",
                input2: "",
                input3: "",
                input4: "",
                input5: "",
                input6: ""
            }));
            console.log(error);
        }
    }

    const handleinput1 = (e) => {
        setVarificaton((Varificaton) => ({
            ...Varificaton,
            input1: e.target.value
        }));

    }
    const handleinput2 = (e) => {
        setVarificaton((Varificaton) => ({
            ...Varificaton,
            input2: e.target.value
        }));
    }
    const handleinput3 = (e) => {
        setVarificaton((Varificaton) => ({
            ...Varificaton,
            input3: e.target.value
        }));
    }
    const handleinput4 = (e) => {
        setVarificaton((Varificaton) => ({
            ...Varificaton,
            input4: e.target.value
        }));
    }
    const handleinput5 = (e) => {
        setVarificaton((Varificaton) => ({
            ...Varificaton,
            input5: e.target.value
        }));
    }
    const handleinput6 = (e) => {
        setVarificaton((Varificaton) => ({
            ...Varificaton,
            input6: e.target.value
        }));
    }


    return (
        <>
            <div className='container-fluid'>
                <div className="row">
                    <Navbar />
                </div>
            </div>
            <div className='container' style={{ "marginTop": "6rem" }}>
                <div className="row d-flex justify-content-center align-items-center my-5 mx-5">
                    <div className="col text-center">
                        <div className='mb-6 text-center'>
                            {

                                Message.verify && <div className="alert alert-success mt-5" role="alert">
                                    <i className="fa-solid fa-circle-check mr-1"></i>
                                    {Message.message}
                                </div>
                            }
                            {

                                Message.error && <div className="alert alert-warning mt-5" role="alert">
                                    <i className="fa-solid fa-triangle-exclamation mr-1"></i>
                                    {Message.message}
                                </div>


                            }
                            <h1>Email Verification</h1>
                            <p>Please enter the OTP sent <br /> on your Registered Email ID</p>
                        </div>
                    </div>
                </div>
                <div className='row  d-flex justify-content-center align-items-center my-5 mx-5'>
                    <form onSubmit={onsubmit}>
                        <div className='col'>
                            <div className="mb-6 text-center">
                                <div id="otp" className="flex justify-center">
                                    <input className="m-2 text-center form-control-input form-control-solid rounded focus:border-blue-400 focus:shadow-outline" type="text" id="first" maxLength="1" value={Varificaton.input1} onChange={handleinput1} />
                                    <input className="m-2 text-center form-control-input form-control-solid rounded focus:border-blue-400 focus:shadow-outline" type="text" id="second" maxLength="1" value={Varificaton.input2} onChange={handleinput2} />
                                    <input className="m-2 text-center form-control-input form-control-solid rounded focus:border-blue-400 focus:shadow-outline" type="text" id="third" maxLength="1" value={Varificaton.input3} onChange={handleinput3} />
                                    <input className="m-2 text-center form-control-input form-control-solid rounded focus:border-blue-400 focus:shadow-outline" type="text" id="fourth" maxLength="1" value={Varificaton.input4} onChange={handleinput4} />
                                    <input className="m-2 text-center form-control-input form-control-solid rounded focus:border-blue-400 focus:shadow-outline" type="text" id="fifth" maxLength="1" value={Varificaton.input5} onChange={handleinput5} />
                                    <input className="m-2 text-center form-control-input form-control-solid rounded focus:border-blue-400 focus:shadow-outline" type="text" id="sixth" maxLength="1" value={Varificaton.input6} onChange={handleinput6} />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 my-3 my-lg-4">
                            <button type="submit" className="btn btn-dark btn-lg  cardwidth">Register</button>
                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}
