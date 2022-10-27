import React, { useState } from 'react';
import Navbar from './Navbar';
import regImage from "../images/register.webp";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Register() {
    
    const navigate = useNavigate();
    const [RegData, setRegData] = useState({
        name: "",
        number: "",
        gender: "",
        email: "",
        password: "",
        cPassword: ""
    });
    const [Erorr, setErorr] = useState({
        textMissing: false,
        validEmail: false,
        validNumber: false,
        matchPassword: false
    });

    const [Submit, setSubmit] = useState({
        success: false,
        failed: false,
        message:""
    });

    const onsubmit = async (event) => {
        event.preventDefault();
        // const formData = new FormData();
        if (!RegData.name || !RegData.gender || RegData.gender === "Gender" || !RegData.email || !RegData.password || !RegData.cPassword) {
            setErorr((Error) => ({
                ...Erorr,
                textMissing: true
            }))
            return (
                setTimeout(() => {
                    setSubmit((Submit) => ({
                        ...Submit,
                        failed: false
                    }))
                }, 5000),
                setSubmit((Submit) => ({
                    ...Submit,
                    failed: true
                }))
            );
        }

        else if (RegData.password !== RegData.cPassword) {
            setErorr((Error) => ({
                ...Erorr,
                matchPassword: true
            }))
            return (
                setTimeout(() => {
                    setSubmit((Submit) => ({
                        ...Submit,
                        failed: false
                    }))
                }, 5000),
                setSubmit((Submit) => ({
                    ...Submit,
                    failed: true
                }))
            );
        }


        else if (Erorr.validEmail) {
            setErorr((Error) => ({
                ...Erorr,
                validEmail: true
            }))
            return (
                setTimeout(() => {
                    setSubmit((Submit) => ({
                        ...Submit,
                        failed: false
                    }))
                }, 5000),
                setSubmit((Submit) => ({
                    ...Submit,
                    failed: true
                }))
            );
        }

        else if (Erorr.validNumber) {
            setErorr((Error) => ({
                ...Erorr,
                validNumber: true
            }))
            return (
                setTimeout(() => {
                    setSubmit((Submit) => ({
                        ...Submit,
                        failed: false
                    }))
                }, 5000),
                setSubmit((Submit) => ({
                    ...Submit,
                    failed: true
                }))
            );
        }

        setErorr((Error) => ({
            ...Erorr,
            validEmail: false,
            validNumber: false,
            textMissing: false,
            matchPassword: false
        }));
        // formData.append("name",RegData.name);
        // formData.append("number",RegData.number);
        // formData.append("gender",RegData.gender);
        // formData.append("email",RegData.email);
        // formData.append("password",RegData.password);
        // formData.append("cpassword",RegData.cPassword);
        // for (const val of formData.values()) {
        //     console.log(val);
        // }
        // setTimeout(() => {
        //     setSubmit((Submit)=>({
        //         ...Submit,
        //         success:false
        //     }))
        // }, 5000);

        // 
        try {
            const sendRequest = await axios.post('/client/register', RegData);
            if(sendRequest.status === 201){
                setSubmit((Submit)=>({
                        ...Submit,
                        success:true
                }))  
            }
        } catch (error) {
            if(error.response.status === 400){
                setSubmit((Submit) => ({
                    ...Submit,
                    failed: true,
                    message:error.response.data
                }));
            }else{
                console.log(error);
            }

        }
        


        


    }

    const handleName = (e) => {
        setRegData((RegData) => ({
            ...RegData,
            name: e.target.value
        }));
    }

    const handleNumber = (e) => {
        const regNumber = /^\+?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{7})$/;
        if (RegData.number.length === 2 || RegData.number.length === 6) {
            e.target.value += "-";
        }
        setRegData((RegData) => ({
            ...RegData,
            number: e.target.value
        }));
        setErorr((Error) => ({
            ...Error,
            validNumber: false
        }));
        if (!regNumber.test(e.target.value)) {
            setErorr((Error) => ({
                ...Error,
                validNumber: true
            }));
        }

    }

    const handleGander = (e) => {
        setRegData((RegData) => ({
            ...RegData,
            gender: e.target.value
        }));
    }

    const handleEmail = (e) => {
        const regExp = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
        setRegData((RegData) => ({
            ...RegData,
            email: e.target.value
        }));
        setErorr((Erorr) => ({
            ...Erorr,
            validEmail: false
        }));
        if (!regExp.test(e.target.value)) {
            setErorr((Erorr) => ({
                ...Erorr,
                validEmail: true
            }));
        }
    }

    const handlePassword = (e) => {
        setRegData((RegData) => ({
            ...RegData,
            password: e.target.value
        }));
    }

    const handleConfirmPassword = (e) => {
        setRegData((RegData) => ({
            ...RegData,
            cPassword: e.target.value
        }));
    }

    return (
        <div className='container-fluid'>
            <div className="row">
                <Navbar bg="dark" />
            </div>
            <section className="vh-100" style={{ "backgroundColor": "#eee" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card card-md text-black" style={{ "borderRadius": "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form className="mx-1 mx-md-4" onSubmit={onsubmit}>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw" style={{ "marginBottom": "20px" }}></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        {Erorr.textMissing && <p className='text-danger'>Name is required</p>}
                                                        <input type="text" id="form3Example1c" value={RegData.name} name="name" onChange={handleName} className="form-control" />
                                                        <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw" style={{ "marginBottom": "20px" }}></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        {Erorr.textMissing && <p className='text-danger'>Number is required</p>}
                                                        {Erorr.validNumber && <p className='text-danger'>Number Must  be Valid</p>}
                                                        <input type="text" id="form3Example1cd" name="number" value={RegData.number} onChange={handleNumber} placeholder="+XX-XXX-XXXXXXX" className="form-control" />
                                                        <label className="form-label" htmlFor="form3Example1c">Your Number</label>
                                                    </div>
                                                </div>


                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw" style={{ "marginBottom": "20px" }}></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        {Erorr.textMissing && <p className='text-danger'>Gender is required</p>}
                                                        <select className='form-control select ' name='gander' onChange={handleGander}>
                                                            <option value="Gender" >Gender</option>
                                                            <option value="Female">Female</option>
                                                            <option value="Male">Male</option>
                                                            <option value="Other">Other</option>
                                                        </select>
                                                        <label className="form-label" htmlFor="form3Example1c">Gender</label>
                                                    </div>
                                                </div>


                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw" style={{ "marginBottom": "20px" }}></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        {Erorr.textMissing && <p className='text-danger'>Email is required</p>}
                                                        {Erorr.validEmail && <p className='text-danger'>Email Must be Valid</p>}
                                                        <input type="email" id="form3Example3c" value={RegData.email} name='email' onChange={handleEmail} className="form-control" />
                                                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw" style={{ "marginBottom": "20px" }}></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        {Erorr.textMissing && <p className='text-danger'>Password is required</p>}
                                                        <input type="password" id="form3Example4c" value={RegData.password} name='password' onChange={handlePassword} className="form-control" />
                                                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw" style={{ "marginBottom": "20px" }}></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        {Erorr.textMissing && <p className='text-danger'>Confirm Password is required</p>}
                                                        {Erorr.matchPassword && <p className='text-danger'>Password Doesn't Match </p>}
                                                        <input type="password" id="form3Example4cd" value={RegData.cPassword} name='cpassword' onChange={handleConfirmPassword} className="form-control" />
                                                        <label className="form-label" htmlFor="form3Example4cd">Confirm your password</label>
                                                    </div>
                                                </div>

                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input
                                                        className="form-check-input me-2"
                                                        type="checkbox"
                                                        value=""
                                                        id="form2Example3c"
                                                    />
                                                    <label className="form-check-label" htmlFor="form2Example3">
                                                        I agree all statements in <a href="/">Terms of service</a>
                                                    </label>
                                                </div>
                                                <p className="mb-5 pb-lg-2" style={{ "color": "#393f81" }}>Have already an account? <Link to="/client/login" style={{ "color": "#393f81" }}> Login here </Link></p>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-dark btn-lg cardButton">Register</button>
                                                </div>
                                                {
                                                    
                                                    Submit.failed && <div className="alert alert-warning" role="alert">
                                                        <i className="fa-solid fa-triangle-exclamation mr-1"></i>
                                                        {Submit.message}
                                                    </div>
                                                }
                                                {
                                                    
                                                    Submit.success && <div className="alert alert-success" role="alert">
                                                        <i className="fa-solid fa-circle-check mr-1"></i>
                                                        Your Form  was  submitted successfully Please Check Email and Verify your Account.
                                                    </div>
                                                }
                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src={regImage} className="img-fluid" alt="SampleImage" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
