import React from "react";
import "../CSS/App.css";
export default function FooterBar() {
    return (
        <div>
            <div className="container-fluid mt-5 pad-0">
                <footer
                    className="text-center text-lg-start text-white"
                    style={{backgroundColor: "rgb(24 23 23)"}}
                >
                    <div className="container p-4 pb-0">
                        <section className="">
                            <div className="row">
                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                       The Barber Plus 
                                    </h6>
                                    <p>
                                        The Barber Plus APP is an Appointment APP where we see Best Barber and get  their Best  services in your comfortable Time.

                                    </p>
                                </div>
                                <hr className="w-100 clearfix d-md-none" />
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                        Services
                                    </h6>
                                    <p>
                                        <a className="text-white text-decoration-none">Hair</a>
                                    </p>
                                    <p>
                                        <a className="text-white text-decoration-none"> custom shaves</a>
                                    </p>
                                    <p>
                                        <a className="text-white text-decoration-none"> clippers</a>
                                    </p>
                                    <p>
                                        <a className="text-white text-decoration-none">combs</a>
                                    </p>
                                </div>
                                <hr className="w-100 clearfix d-md-none" />
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                         Information
                                    </h6>
                                    <p>
                                        <a className="text-white text-decoration-none">Appoint Nearest Barber at your location</a>
                                    </p>
                                    <p>
                                        <a className="text-white text-decoration-none">Managed Customer</a>
                                    </p>
                                    <p>
                                        <a className="text-white text-decoration-none">Don't Need to wait</a>
                                    </p>
                                    <p>
                                        <a className="text-white text-decoration-none">Reminder</a>
                                    </p>
                                </div>
                                <hr className="w-100 clearfix d-md-none" />
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                        Contact
                                    </h6>
                                    <p>
                                        <i className="fas fa-home mr-3"></i> Lahore Lead University , Pakistan
                                    </p>
                                    <p>
                                        <i className="fas fa-envelope mr-3"></i> F181039@leads.edu.pk
                                    </p>
                                    <p>
                                        <i className="fas fa-phone mr-3"></i> + 92 307 76 74 641 
                                    </p>
                                    <p>
                                        <i className="fas fa-print mr-3"></i> +  92 307 76 74 641 
                                    </p>
                                </div>
                            </div>
                        </section>
                        <hr className="my-3" />
                        <section className="p-3 pt-0">
                            <div className="row d-flex align-items-center">
                                <div className="col-md-7 col-lg-8 text-center text-md-start">
                                    <div className="p-3">
                                        © 2021 Copyright:
                                        <a className="text-white" >
                                            TheBarberPlus.com
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                    <a
                                        className="btn btn-outline-light btn-floating m-1 text-white"
                                        
                                        role="button"
                                        style={{marginRight:"5px"}}
                                    >
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a
                                        className="btn btn-outline-light btn-floating m-1 text-white"
                                        
                                        style={{marginRight:"5px"}}
                                        role="button"
                                    >
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a
                                        className="btn btn-outline-light btn-floating m-1 text-white"
                                      
                                        style={{marginRight:"5px"}}
                                        role="button"
                                    >
                                        <i className="fab fa-google"></i>
                                    </a>
                                    <a
                                        className="btn btn-outline-light btn-floating m-1 text-white"
                                        
                                        style={{marginRight:"5px"}}
                                        role="button"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                </footer>
            </div>
        </div>
    );
}
