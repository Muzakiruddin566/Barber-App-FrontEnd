import React,{useState,useRef} from "react";
import { Link } from 'react-router-dom';
import "../CSS/App.css";
export default function Navbar(props) {
 const ListElement = useRef('null');
  const [Color, setColor] = useState('transparent');
  const changeColor = ()=>{
    if(document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight){
      setColor("dark");
    }else{
      setColor("transparent");
    }
  }
  window.addEventListener('scroll', changeColor);

  return (
    <div className="container-fluid pad-0">
      <div className="row">
        <div className="col-12">
          <nav className={`navbar navbar-expand-lg navbar-dark  bg-${props.bg === 'dark' ? props.bg : Color} navbar bg-black`} id="nav" ref={ListElement}>
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <Link className="navbar-brand" to="/">
                The Barber Plus
              </Link>
              <div className="collapse navbar-collapse spacing" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link link-white" aria-current="page" to="/barber-Business">
                      Barbers Business
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link link-white" to="/About">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link  link-white" to="/Barbers">
                      Appoint Barbers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link link-white" to="/Barber/Register">
                      Become a Barber
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link link-white" to="/contactUs">
                      Contact us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link link-white" to="/client/login">
                      Sign in
                    </Link>
                  </li>
                  <li className="nav-item" style={{ paddingTop: "5px" }}>
                    <Link type="button" className="btn btn-outline-light" style={{ padding: "3px 10px" }} to="/client/register">Register</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

Navbar.defaultProps = {
  bg :"dark"
}