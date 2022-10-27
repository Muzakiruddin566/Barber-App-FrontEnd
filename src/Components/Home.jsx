import React,{useEffect} from "react";
import "../CSS/MainSlider.css";
import "../CSS/App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from "../images/1.jpg";
import img7 from "../images/7.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import barberShop from "../images/b3.jpg";
import client from "../images/c2.jpg";
import FooterBar from "./FooterBar";
import Navbar from "./Navbar";
export default function Home() {
        useEffect(() => {
          AOS.init();
          AOS.refresh();
        }, []);


    return (
        <>
        {/* // NavBar */}
            <Navbar bg = "transparent"/>
            {/* // Slider */}
            <div className="container-fluid pad-0">
                <div className="row">
                    <div className="col-12">
                        <div
                            id="carouselExampleSlidesOnly"
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner H-500">
                                <div className="carousel-item active" data-bs-interval="1000">
                                    <img src={img1} className="d-block w-100 H-100"alt="img1" />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src={img3}
                                        className="d-block w-100 H-100"
                                        data-bs-interval="10000"
                                        alt = "cutting"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src={img4}
                                        className="d-block w-100 H-100"
                                        data-bs-interval="10000"
                                        alt="img4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Text box */}
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="searchBar" data-aos="fade-up" data-aos-duration="3000">
                            <h1>
                                <span>
                                    Find the Best <i>Barber</i> <br /> services for you
                                </span>
                            </h1>
                            <div className="height">
                                <div className="search">
                                    <i className="fa fa-search"></i>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Have a question? Ask Now"
                                    />
                                    <button className="btn btn-dark">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Features */}
                <div className="container mt-4">
                    <p className="text-center fs-6 mt-5 text-uppercase fw-light" style={{ color: "red", fontFamily: "auto" }}>
                        services for <br /> barber's and clients
                    </p>
                    <div className="row">
                        <div className=" col-lg-5 col-md-4">
                            <hr className="heading-featurette-divider" />
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <h2 className="text-center" style={{ fontFamily: "auto", fontSize: "3rem", paddingTop: "0rem" }}>Services</h2>
                        </div>
                        <div className="col-lg-5 col-md-4">
                            <hr className="heading-featurette-divider" />
                        </div>

                    </div>
                </div>
                {/* services */}
                <div className="row" data-aos="fade-down" data-aos-delay='1000' data-aos-duration="3000">
                    <div className="container px-4 py-1" id="custom-cards">
                        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                            <div className="col">
                                <div
                                    className="card card-md card-cover h-100 overflow-hidden text-white bg-img bg-dark rounded-5 shadow-lg"
                                    style={{
                                        backgroundImage: `url(${img6})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <div className="d-flex flex-column h-100 p-5 pb-3  text-white text-shadow-1">
                                        <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                                            Online Barber Appointment{" "}
                                        </h2>
                                        <ul className="d-flex list-unstyled mt-auto">
                                            <li className="me-auto">
                                                <i className="fas fa-globe-europe"></i>
                                            </li>
                                            <li className="d-flex align-items-center me-3">
                                                <i
                                                    className="fas fa-map-pin"
                                                    style={{ paddingRight: "10px" }}
                                                ></i>
                                                <small>World</small>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div
                                    className="card  card-md card-cover h-100 overflow-hidden text-white bg-dark rounded-5 bg-img shadow-lg"
                                    style={{
                                        backgroundImage: `url(${img5})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                        <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                                            Now Barber's At Door
                                        </h2>
                                        <ul className="d-flex list-unstyled mt-auto">
                                            <li className="me-auto">
                                                <i className="fas fa-house-user"></i>
                                            </li>
                                            <li className="d-flex align-items-center me-3">
                                                <i
                                                    className="fas fa-map-pin"
                                                    style={{ paddingRight: "10px" }}
                                                ></i>
                                                <small>Pakistan</small>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div
                                    className="card card-md card-cover h-100 overflow-hidden bg-img text-white bg-dark rounded-5 shadow-lg"
                                    style={{
                                        backgroundImage: `url(${img7})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <div className="d-flex flex-column h-100 p-5 pb-3  text-shadow-1">
                                        <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                                            Get Best Services from Best Barber
                                        </h2>
                                        <ul className="d-flex list-unstyled mt-auto">
                                            <li className="me-auto">
                                                <i className="fas  fa-child"></i>
                                            </li>
                                            <li className="d-flex align-items-center me-3">
                                                <i
                                                    className="fas fa-map-pin "
                                                    style={{ paddingRight: "10px" }}
                                                ></i>
                                                <small>world</small>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-center fs-6  text-uppercase fw-light" style={{ color: "red", fontFamily: "auto" }}>Our latest features</p>
                {/* Barber's features */}
                {/* divider */}
                <div className="container">
                    <div className="row">
                        <div className=" col-lg-5 col-md-4">
                            <hr className="heading-featurette-divider" />
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <h2 className="text-center" style={{ fontFamily: "auto", fontSize: "3rem", paddingBottom: "1.5rem" }}>Features</h2>
                        </div>
                        <div className="col-lg-5 col-md-4">
                            <hr className="heading-featurette-divider" />
                        </div>
                    </div>
                </div>
                <div className="container marketing">
                    <div className="row featurette" data-aos="fade-right"data-aos-duration="3000">
                        <div className="col-md-7 order-md-2">
                            <h2 className="featurette-heading">Feature for Barber's</h2>
                            <p className="lead">
                                <li>Get appointments while you work! </li>
                                <li>Reduce No Shows with the reminders feature</li>
                                <li>Client Management (unlimited number of clients)</li>
                                <li>Services (categories, services, costs, duration)</li>
                                <li>
                                    Reminders: Text Messages (sms), Push Notifications, and Emails
                                </li>
                                <li>Confirm, Decline, Reschedule appointments</li>
                                <li>
                                    Free Portfolio page (build based on your profile and your
                                    pictures)
                                </li>
                                <li>
                                    Notifications (emails, push notifications, SMS notifications)
                                </li>
                                <li>Get Best Baber award</li>
                            </p>
                        </div>
                        <div className="col-md-5 order-md-1">
                            <img
                                src={barberShop}
                                className="img-fluid mx-auto"
                                width="500"
                                height="500"
                                alt="BarberShop"
                            />
                        </div>
                    </div>
                    <hr className="featurette-divider" />
                    {/*  clients features */}
                    <div className="row featurette"  data-aos="fade-left" data-aos-duration="3000" >
                        <div className="col-md-7">
                            <h2 className="featurette-heading">Feature for Clients</h2>
                            <p className="lead">
                                <li>Free access of The barber's Plus</li>
                                <li>Free mobile app</li>
                                <li>Free access from the web to your barber's profile</li>
                                <li>Book your appointments, no need to call your barber for</li>
                                <li>Confirm, Decline, Reschedule appointments in limited Time</li>
                                <li>Receive reminders, never miss your appointment</li>
                                <li>Review your services, rate your barber</li>
                                <li>search nearest barber's </li>
                                <li>Book verified best barber's from The Barber plus</li>
                            </p>
                        </div>
                        <div className="col-md-5">
                            <img
                                src={client}
                                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                                width="500"
                                height="500"
                                alt="Client"
                            />
                        </div>
                    </div>
                </div>
                <div className="container"><hr className="featurette-divider" />
                    <h2 className="py-2" style={{ fontFamily: "auto" }}>What Our Customer Says</h2></div>
                {/* our customer */}
                <div className="container shadow-lg p-3 mb-5 bg-body rounded" data-aos="flip-down"data-aos-duration="3000">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000" >
                                <div className="carousel-caption">
                                    <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen. </p> <img src={img1} alt="text img" />
                                    <div id="image-caption">Nick Doe</div>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="10000" >
                                <div className="carousel-caption">
                                    <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen.</p> <img src={img1} className="img-fluid" alt="text2 img" />
                                    <div id="image-caption">Cromption Greves</div>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="10000">
                                <div className="carousel-caption">
                                    <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen.</p> <img src={img1} className="img-fluid" alt="text3 img" />
                                    <div id="image-caption">Harry Mon</div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" style={{ backgroundColor: "#ad7878b3" }} aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" style={{ backgroundColor: "#ad7878b3" }} aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Accounts Type */}
                <div className="container"><hr className="featurette-divider" /></div>
                <div className="container py-4">
                    <div className="row align-items-md-stretch " data-aos="zoom-in-up" data-aos-duration="3000">
                        <div className="col-md-6">
                            <div className="h-100 p-5 text-white bg-account-img rounded-3">
                                <h2>Account for Barber</h2>
                                <p>
                                    This Account is only for Barbers.The Barbers register yourself.
                                    Click on Register Barber and for get our  Best services
                                </p>
                                <button className="btn btn-outline-danger text-white" type="button">
                                    Register Barber
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="h-100 p-5 text-white bg-client-account-img border rounded-3">
                                <h2>Customer Account</h2>
                                <p>
                                    The Customer Come here and register yourself for get Best Barber Services.
                                    Click on Register Client button For appoint the Barbers and get Best services.
                                </p>
                                <button className="btn btn-outline-danger text-white" type="button">
                                    Register Client
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterBar />
            </div>
        </>
    );
}
