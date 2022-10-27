import React,{useState} from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import login from "../images/login.webp";
import "../CSS/App.css";
import cookie from "js-cookie";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const navigate = useNavigate();
const [LogData, setLogData] = useState({
  email:"",
  password:""
});
const [Valid, setValid] = useState(false);
const [Empty, setEmpty] = useState(false);
const [Error, setError] = useState({
  error:false,
  message:""
});
const onsubmit= async (event)=>{
  event.preventDefault();
  if(!LogData.email || !LogData.password){
    return setEmpty(true);
  } 
  setEmpty(false); 
  try {
    const res = await axios.post('/client/login',LogData);
    if(res.status === 201){
      cookie.set("user_Token",res.data.user_token,{
        expires:new Date(Date.now() + 7200000),
      });
      navigate('/client/portal');
    }
  } catch (error) {
    if(error.response.status === 400){
      setError(Error=>({
        ...Error,
        error:true,
        message:error.response.data
      }));
    }
  }
  
}


const handlerEmail = (e)=>{
  const regExp = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
  setLogData( (LogData) =>({
    ...LogData,
    email:e.target.value
  }));
  setValid(false);
  if(!regExp.test(e.target.value)){
    console.log("invalid input");
    setValid(true);
  }
}


const handlerPassword = (e)=>{
  setLogData((LogData)=>({
    ...LogData,
    password:e.target.value
  }));
}


return (
    <div className='container-fluid'>
      <div className="row">
        <Navbar />
      </div>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-xl-12">
              <div className="card card-md" style={{ "borderRadius": "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-6 d-none d-md-block ">
                    <img
                      src={login}
                      alt="login form"
                      className="img-fluid cardImg" style={{ "borderRadius": "1rem 0 0 1rem" }} />
                  </div>
                  <div className="col-md-6 col-lg-6 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">

                      <form onSubmit={onsubmit}>

                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{ "color": "#ff6219" }}></i>
                          <span className="h1 fw-bold mb-0">Login</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{ "letterSpacing": "1px" }}>Sign into your account</h5>
                        {
                        Error.error && <div className="alert alert-warning mt-5 text-danger" role="alert">
                          <i className="fa-solid fa-triangle-exclamation mr-1"></i>
                          {Error.message}
                        </div>
                      }
                        <div className="form-outline mb-4">
                          {Valid && <p className='text-danger'>Email Must be Valid</p>}
                          {Empty && <p className='text-danger'>Email is required</p>}
                          <input type="text" id="form2Example17" value={LogData.email} name="email" className="form-control form-control-lg" onChange={handlerEmail} />
                          <label className="form-label" htmlFor="form2Example17">Email address</label>
                        </div>

                        <div className="form-outline mb-4">
                          {Empty && <p className='text-danger'>Password is required</p>}
                          <input type="password" id="form2Example27" value={LogData.password} name="password" className="form-control form-control-lg" onChange={handlerPassword} />
                          <label className="form-label" htmlFor="form2Example27" >Password</label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block cardButton" disabled={Valid} type="submit">Login</button>
                        </div>

                        <a className="small text-muted" href="#!">Forgot password?</a>
                        <p className="mb-5 pb-lg-2" style={{ "color": "#393f81" }}>Don't have an account? <Link to="/client/register" style={{ "color": "#393f81" }}> Register here </Link></p>
                        <a href="#!" className="small text-muted">Terms of use.</a>
                        <a href="#!" className="small text-muted">Privacy policy</a>
                      </form>
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
