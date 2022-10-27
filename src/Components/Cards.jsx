import React from "react";
import "../CSS/App.css";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import img7 from "../images/7.jpg";
export default function Cards() {
    return (
        <div className="container">
            <div className="row">
                <section className="services col-sm-12">
                    <div className="cards-container">
                        <div className="card">
                            <img src={img1} alt={"HairCutting"} />
                            <div className="card-content">
                                <h2>Hair Cut</h2>
                                <p>Hair Cutting </p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={img2} alt={"BreadCutting"} />
                            <div className="card-content">
                                <h2>Hair Cut</h2>
                                <p>Hair Cutting </p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={img3} alt={"faceFresh"} />
                            <div className="card-content">
                                <h2>Hair Cut</h2>
                                <p>Hair Cutting </p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={img4} alt={"facial"} />
                            <div className="card-content">
                                <h2>Hair Cut</h2>
                                <p>Hair Cutting </p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={img5} alt={"Groom Barber"} />
                            <div className="card-content">
                                <h2>Hair Cut</h2>
                                <p>Hair Cutting </p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={img6} alt={"ChildHairCutting"} />
                            <div className="card-content">
                                <h2>Hair Cut</h2>
                                <p>Hair Cutting </p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={img7} alt={"Men face cream"} />
                            <div className="card-content">
                                <h2>Hair Cut</h2>
                                <p>Hair Cutting </p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={img1} alt={"women Hair cutting"} />
                            <div className="card-content">
                                <h2>Hair Cut</h2>
                                <p>Hair Cutting </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
