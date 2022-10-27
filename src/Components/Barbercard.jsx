import React from 'react'
import { Link } from 'react-router-dom';
import "../CSS/card.css";
import image1 from "../images/b1.jpg";
export default function Barbercard(props) {
    // `/shopImages/uploads/${props.obj.shopImage}`
    return (
        <div className='col-lg-3 col-md-4 mt-5'>
            <div className='barber-cards'>
                <div className='BarberPost-image'>
                    <img src={`/shopImages/uploads/${props.obj.shopImage}`} alt={props.obj._id} />
                </div>
                <Link className="nav-link link-dark" to={`/Barbers/Barber/${props.obj._id}`}>
                    <div className='Barber-Body'>
                        <h4>{props.obj.BusinessName}</h4>
                        <p>{props.obj.Name}</p>
                        <span>
                            <i className="fa-solid fa-star stars"></i>
                            <i className="fa-solid fa-star stars "></i>
                            <i className="fa-solid fa-star stars"></i>
                            <i className="fa-solid fa-star stars-half-stroke stars"></i>
                            <i className="fa-regular fa-star stars "></i>
                        </span>
                        <span style={{ "float": "right", "color": "red" }}>50% Discount</span>
                        <div>
                            <i className="fa-solid fa-circle-check" style={{ "color": "green" }}></i>
                            <span style={{ "marginLeft": "2px" }} >Best Barber</span>
                        </div>
                    </div>
                </Link>
                <div className='token-active'>
                    <span style={{ "paddingLeft": "0px" }}>
                        Status : {props.obj.shopStatus}
                    </span>
                </div>
            </div>
        </div>
    )
}
