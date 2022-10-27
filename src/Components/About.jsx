import React from 'react'
import Navbar from './Navbar';
import "../CSS/About.css";
import img1 from "../images/1.jpg";
import m1 from "../images/m2.jpg";
import "../CSS/MainSlider.css";
import "../CSS/App.css";
import FooterBar from './FooterBar';
export default function About() {
    return (
        <div className='container-fluid'>
            <div className="row">
                <Navbar bg="transparent" />
            </div>
            <div className='row '>
                <div className='col-12 pad-0'>
                    <div className="image-aboutus-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="lg-text">About Us</h1>
                                    <p className="image-aboutus-para">The Barber Plus App is a platform where Barber can Register himself. Barber use The Barber for increasing the profits and and provide their services through this app..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="aboutus-secktion paddingTB60">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1 className="strong">Who we are and<br />what we do</h1>
                                <p className="lead">The Barber Plus is the world's largest Barbers Application<br /> for easy and quickly find Best Barbers shops </p>
                            </div>
                            <div className="col-md-6">
                                <p>It’s going to be very convenient for the customer because due to this customer can easily approaches the Barber and fix his appointment online according to his schedule.</p>
                                <p>This App deals with developing an online barber’s web app for customer convenience. It provides the user a list of services and customer can choose the service which he needed and in this app customer provided with a time schedule according to which customer can book their appointment and easily get the services in his free slot. In order to facilitate online booking an ID is provided to the user.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container team-sektion paddingTB60">
                <div className="row">
                    <div className="site-heading text-center">
                        <h3>Our Team</h3>
                        <p>We are all very different. We were born in different cities, at different times, <br /> we love different music, food, movies. But we have something that unites us all. It is our company. We are its heart. We are not just a team, we are a family.</p>
                        <div className="aboutus-border"></div>
                    </div>
                </div>
            </div>
            <div className="container shadow-lg p-3 mb-5 bg-body rounded">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000" >
                            <div class="carousel-caption">
                                <p className='mt-1' style={{ "color": "black" }}>Full Stack Developer</p>
                                <p>All issues are resolved promptly. In communication, the employees are pleasant, helpful. Always offer new ideas, new ways to develop, improve our project. </p>
                                <img src={m1} alt="text img" />
                                <div id="image-caption" style={{ "color": "#383434" }}>Muzakir uddin</div>
                                <p style={{ "fontSize": "12px", "fontFamily": "cursive", "color": "black" }}>Team Leader</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="10000" >
                            <div class="carousel-caption">
                                <p className='mt-1' style={{ "color": "black" }}>Developer</p>
                                <p>Excellent client manager. He is always accurate, all promises are fulfilled, all questions get answers, the company presents very attentive and positive approach.</p>
                                <img src={img1} class="img-fluid" alt="text2 img" />
                                <div id="image-caption">Ghulam Rasool</div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="10000">
                            <div class="carousel-caption">
                                <p className='mt-1' style={{ "color": "black" }}>Designer</p>
                                <p>I am very pleased with the quality of the work of your employee representing your wonderful company.</p> 
                                <img src={img1} class="img-fluid" alt="text3 img" />
                                <div id="image-caption">Hafiz Ishaq</div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="10000">
                            <div class="carousel-caption">
                                <p className='mt-1' style={{ "color": "black" }}>Designer</p>
                                <p>I am very pleased with the quality of the work of your employee representing your wonderful company.</p> 
                                <img src={img1} class="img-fluid" alt="text3 img" />
                                <div id="image-caption">Mudasir Satter</div>
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
            <div className='row'>
                <div className='col-12 pad-0'>
                    <FooterBar />
                </div>
            </div>
        </div>
    )
}
