"use strict";
import React, { useState,useEffect } from "react";
import Navbar from "../Navbar";
import "../../CSS/Barber/register.css";
import img1 from "../../images/b2.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { handleBusinessName, handleName, handlePhoneNumber, handleEmail, handlePassword, handleConfirmPassword,handleShopPicture } from "../../action/index";




export default function BarberRegister() {

  const myState = useSelector((state) => state.handleFormReducer)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [valid, setvalid] = useState({
    email: false,
    number: false,
    button:false,
    required:false,
    confirmPassword: false
  });


  const onsubmit = (event) => {
    event.preventDefault();
    if(!myState.BusinessName || !myState.BarberName || !myState.PhoneNumber || !myState.Email || !myState.Password || !myState.ConfirmPassword ||!myState.ShopImage){
      return ( setvalid((valid)=>({
        ...valid,
        required:true
      })));
    }
    else if(myState.Password !== myState.ConfirmPassword){
      return ( setvalid((valid)=>({
        ...valid,
        confirmPassword:true
      })));
    }
    else{
      setvalid((valid)=>({
        ...valid,
        required:false,
        button:false
      }));
      navigate('SelectCategory')
      console.log(myState);
    }
  }
  const onchangeBusinessName = (e)=> {
    dispatch(handleBusinessName(e.target.value))
  }

  const onchangeBarberName = (e)=>{
    dispatch(handleName(e.target.value));
  } 

  useEffect(() => {
    dispatch(handleBusinessName(''));
    dispatch(handleName(''));
    dispatch(handlePhoneNumber(''));
    dispatch(handleEmail(''));
    dispatch(handlePassword(''));
    dispatch(handleConfirmPassword(''));
    // dispatch(handleShopImage(null))
  }, [])


  const onchangePhoneNumber = (e)=>{
    const regNumber = /^\+?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{6})$/;
    if( myState.PhoneNumber.length === 2 || myState.PhoneNumber.length ===6 ){
      e.target.value += "-";
    }
    dispatch(handlePhoneNumber(e.target.value))
    // console.log(myState.PhoneNumber.length)
    
    if(!regNumber.test(myState.PhoneNumber)){
      setvalid((valid)=>({
        ...valid,
        number:true,
        button:true
      }));
    }else{
      setvalid((valid)=>({
        ...valid,
        number:false,
        button:false
      }))
    }   
  }

  const onchangeEmail = (e)=>{
    dispatch(handleEmail(e.target.value));
    const regExp = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    if(!regExp.test(myState.Email)){
      setvalid((valid)=>({
        ...valid,
        email:true,
        button:true
      }))
    }else{
      setvalid((valid)=>({
        ...valid,
        email:false,
        button:false
      }))
    }
  }

  const onchangePassword = (e)=>{
    dispatch(handlePassword(e.target.value))
  }

  const onchangeConfirmPassword = (e)=>{
    dispatch(handleConfirmPassword(e.target.value))
  }
  
  const handleShopImage = (e)=>{
    dispatch(handleShopPicture(e.target.files[0]));
    // console.log(e.target.files[0]);
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar />
      </div>
      <section className="h-100 h-custom" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card card-md rounded-3">
                <img src={img1} className="w-100" style={{ "borderTopLeftRadius": ".3rem", "borderTopRightRadius": ".3rem" }} alt="Sample photo" />
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>

                  <form className="px-md-2" encType="multipart/form-data" method="POST" onSubmit={onsubmit}>

                    <div className="form-outline mb-4">
                    {valid.required && <p className='text-danger'>Business Name Must be required</p>}
                      <input type="text" id="form3Example1cgg" name="BusinessName" value={myState.BusinessName} onChange={onchangeBusinessName} className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example1cgg">Your Business Name</label>
                    </div>


                    <div className="form-outline mb-4">
                      {valid.required && <p className='text-danger'>Barber Name Must be required</p>}
                      <input type="text" id="form3Example1cg" name="Name" value={myState.BarberName} onChange={onchangeBarberName} className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                    </div>

                    <div className="form-outline mb-4">
                      {valid.required && <p className='text-danger'>Number  Must be required</p>}
                      {valid.number && <p className='text-danger'>Number Must  be Valid</p>}
                      <input type="text" id="form3Example1c" name="Number"  value={myState.PhoneNumber} onChange= { onchangePhoneNumber } placeholder="+XX-XXX-XXXXXXX" className="form-control  form-control-lg" />
                      <label className="form-label" htmlFor="form3Example1cn">Your phone Number</label>
                    </div>

                    <div className="form-outline mb-4">
                      {valid.required && <p className='text-danger'>Email Must be required</p>}
                      {valid.email && <p className='text-danger'>Email Must  be Valid</p>}
                      <input type="email" id="form3Example3cg" value={myState.Email} onChange={onchangeEmail} name="Email" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                    </div>

                    <div className="form-outline mb-4">
                      {valid.required && <p className='text-danger'>Password Name Must be required</p>}
                      <input type="password" id="form3Example4cg" value={myState.Password} onChange={ onchangePassword} name="password"  className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">Password</label>
                    </div>

                    <div className="form-outline mb-4">
                      {valid.required && <p className='text-danger'>Confirm Password Must be required</p>}
                      {valid.confirmPassword && <p className='text-danger'>Password doesn't Match</p>}
                      <input type="password" id="form3Example4cdg" value={myState.ConfirmPassword} onChange={ onchangeConfirmPassword } name="ConfirmPassword" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cdg">Confirm your password</label>
                    </div>

                    <div className="form-outline mb-4">
                      {valid.required && <p className='text-danger'>Image  Must be required</p>}
                      <input className="form-control form-control-lg" id="formFileLg" name="ShopImage" accept=".jpg, .png, .jpeg" type="file" onChange={handleShopImage}/>
                      <label className="form-label" htmlFor="formFileLg">Upload Shop Image</label>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3cg"
                      />
                      <label className="form-check-label" htmlFor="form2Example3g">
                        I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button type="submit" className="btn btn-dark btn-block btn-lg gradient-custom-4 text-body cardButton color" disabled={valid.button}>NEXT</button>

                    </div>

                    <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/Barber/Login" className="fw-bold text-body"><u>Login here</u></Link></p>


                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
