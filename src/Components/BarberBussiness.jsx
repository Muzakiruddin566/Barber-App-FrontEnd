import React, { useEffect } from 'react';
import "../CSS/App.css";
import { Link } from "react-router-dom"
import video from '../images/video/Opt.webm';
import Navbar from './Navbar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import img7 from "../images/7.jpg";
import FooterBar from './FooterBar';


export default function BarberBussiness() {

    useEffect(() => {
        window.addEventListener('load', function (e) {
            var bg_video = document.getElementById('bg-video');
            bg_video.play();
        });
    }, []);
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div className='container-fluid'>
            <div className="row">
                <Navbar bg="transparent" />
            </div>
            <div className='row'>
                <section className="section main-banner pad-0" id="top" data-section="section1">
                    <video autoPlay muted loop id="bg-video">
                        <source src={video} type="video/mp4" />
                    </video>
                    <div className="video-overlay header-text">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="caption">
                                        <h2 >Welcome to the Barber Plus</h2>
                                        <p>The Barber Plus App is a platform where Barber can Register himself. Barber use The Barber for increasing  the profits and and provide their services through this app.</p>
                                        <div className="main-button-red">
                                            <div className="scroll-to-section"><Link type="button" className="text-uppercase btn btn-outline-light" style={{ padding: "12px 30px", fontSize: "13px", borderRadius: "22px", fontWeight: "500", display: "inline-block" }} to="/register">Join Us Now</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className='row'>
                <div className='col-12 mt-5 '>
                    <h1 className='headingFont'>Popular services for Barber Business </h1>
                </div>
                <div className='row'>
                    <Slider {...settings}>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card" style={{"width":"300px"}}>
                                <img src={img2} alt={"BreadCutting"} />
                                <div className="card-content">
                                    <h6> Hair and Bread Cutting </h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className="card" style={{"width":"300px"}}>
                                <img src={img3} alt={"BreadCutting"} />
                                <div className="card-content">
                                    <h6> Hair and Bread Cutting </h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className="card" style={{"width":"300px"}}>
                                <img src={img4} alt={"BreadCutting"} />
                                <div className="card-content">
                                    <h6> Hair and Bread Cutting </h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className="card" style={{"width":"300px"}}>
                                <img src={img5} alt={"BreadCutting"} />
                                <div className="card-content">
                                    <h6> Hair and Bread Cutting </h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className="card" style={{"width":"300px"}}>
                                <img src={img6} alt={"BreadCutting"} />
                                <div className="card-content">
                                    <h6> Hair and Bread Cutting </h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className="card" style={{"width":"300px"}}>
                                <img src={img7} alt={"BreadCutting"} />
                                <div className="card-content">
                                    <h6> Hair and Bread Cutting </h6>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 pad-0'>
                    <FooterBar/>
                </div>
            </div>
        </div>
    )
}