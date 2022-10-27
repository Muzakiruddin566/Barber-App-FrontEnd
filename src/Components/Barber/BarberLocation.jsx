import React, { useState, useEffect } from 'react'
// import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "@react-google-maps/api";
// import Geocode from "react-geocode";
import { useSelector } from "react-redux";
import axios from "axios";
export default function BarberLocation() {
    // https://www.googleapis.com/geolocation/v1/geolocate?key
    // AIzaSyDR9zDek6kkrgrggk-MUL5-tiC9qa7aCIk
    // 948ff663-5b00-4b9f-8271-4d8a437107f2
    // Geocode.setApiKey("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDR9zDek6kkrgrggk-MUL5-tiC9qa7aCIk");
    // Geocode.enableDebug();    
    const myState = useSelector((state) => state.handleFormReducer);
    const catState = useSelector((state) => state.handleCheckReducer);

    const [Location, setLocation] = useState({
        // BusinessName: "",
        // Name: "",
        // Number: "",
        // Email: "",
        // password: "",
        // ConfirmPassword: "",
        // ShopImage: "",
        // BarberShopForBoys: "",
        // BeautySalonForGirl: "",
        // BeautySalonForGirlsAndBoys: "",
        // WeddingMakeupArtist: "",
        // Massage: "",
        // HomeServices: "",
        city: "",
        postal_code: "",
        country: "",
        region: "",
        lat: "",
        long: ""
    })

    const [Response, setResponse] = useState({
        submission: false,
        error: false,
        Message: ""
    })


    const onSubmit = async (event) => {
        // event.stopImmediatePropagation();
        event.preventDefault();
        // setLocation(Location=>({
        //     ...Location,
        //     BusinessName: myState.BusinessName,
        //     Name: myState.BarberName,
        //     Number: myState.PhoneNumber,
        //     Email: myState.Email,
        //     password: myState.Password,
        //     ConfirmPassword: myState.ConfirmPassword,
        //     ShopImage: myState.ShopImage,
        //     BarberShopForBoys: catState.BarbershopForBoys,
        //     BeautySalonForGirl: catState.BeautySalonForGirls,
        //     BeautySalonForGirlsAndBoys: catState.BeautySalonForGirlsAndBoys,
        //     WeddingMakeupArtist: catState.WeddingMakeUpArtist,
        //     Massage: catState.Massage,
        //     HomeServices: catState.HomeServices
        // }))

        // event.stopPropagation();
        //    console.log("submit");
        const formData = new FormData();
        formData.append('BusinessName', myState.BusinessName);
        formData.append('Name', myState.BarberName);
        formData.append('Number', myState.PhoneNumber);
        formData.append('Email', myState.Email);
        formData.append('password', myState.Password);
        formData.append('ConfirmPassword', myState.ConfirmPassword);
        formData.append('ShopImage', myState.ShopImage);
        formData.append('BarberShopForBoys', catState.BarbershopForBoys);
        formData.append('BeautySalonForGirl', catState.BeautySalonForGirls);
        formData.append('BeautySalonForGirlsAndBoys', catState.BeautySalonForGirlsAndBoys);
        formData.append('WeddingMakeupArtist', catState.WeddingMakeUpArtist);
        formData.append('MakeupArtist', catState.MakeUpArtist);
        formData.append('Massage', catState.Massage);
        formData.append('HomeServices', catState.HomeServices);
        formData.append('city', Location.city);
        formData.append('country', Location.country);
        formData.append('region', Location.region);
        formData.append('lat', Location.lat);
        formData.append('long', Location.long);
        formData.append('postal_code', Location.postal_code);
        try {
            const response = await axios.post('http://localhost:4000/Barber/Register', formData)
            if (response.status === 201) {
                setResponse(Response => ({
                    ...Response,
                    submission: true,
                    Message: response.data
                }))
            }
        }
        catch (error) {
            if (error.response) {
                setResponse(Response => ({
                    ...Response,
                    error: true,
                    Message: error.response.data

                }))
                console.log(error.response.data);
            }

            else {
                console.log(error);
            }
        }


    }


    useEffect(() => {
        // if(navigator.geolocation){
        //     navigator.geolocation.getCurrentPosition(showPosition);
        // }
        var xmlhttp = new XMLHttpRequest();
        var url = "https://api.ipfind.com/me?auth=bc87cd39-844c-41ab-89a5-185cde093e40";
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var result = JSON.parse(this.responseText);
                // console.log(result.ip_address,result.city)
                // console.log(result.latitude,result.latitude)
                setLocation((Location) => ({
                    ...Location,
                    city: result.city,
                    country: result.country,
                    postal_code: result.postal_code,
                    lat: result.latitude,
                    long: result.latitude,
                    region: result.region
                }));
            }
        };

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }, [])

    // const showPosition = (position) => {
    //     console.log(position.coords.latitude);
    //     console.log(position.coords.longitude);
    //     setLocation((Location) => ({
    //         ...Location,
    //         lat: position.coords.latitude,
    //         long: position.coords.longitude
    //     }));
    // }

    return (
        <div className='container-fluid'>
            <section className="h-100 h-custom" >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-8 col-xl-6">
                            <div className="card card-md rounded-3">
                                {/* <img src={img1} className="w-100" style={{ "borderTopLeftRadius": ".3rem", "borderTopRightRadius": ".3rem" }} alt="Sample photo" /> */}
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4  text-center pb-2 pb-md-0 mb-md-5 px-md-2">Select Location </h3>

                                    <form className="px-md-2" method='POST' encType="multipart/form-data" onSubmit={onSubmit}>
                                        <address> Your Country {Location.country}, region {Location.region}, City {Location.city} and postal code {Location.postal_code} Latitude {Location.lat} and Longitude {Location.long}  </address>
                                        <div className="d-flex justify-content-center">
                                            <button type="submit" className="btn btn-dark btn-block btn-lg mt-3 gradient-custom-4 text-body cardButton color" >Choose My Current Location</button>
                                        </div>
                                    </form>

                                    {

                                        Response.submission && <div className="alert alert-success mt-5" role="alert">
                                            <i className="fa-solid fa-circle-check mr-1"></i>
                                            {Response.Message}
                                        </div>
                                    }
                                    {

                                        Response.error && <div className="alert alert-warning mt-5" role="alert">
                                            <i className="fa-solid fa-triangle-exclamation mr-1"></i>
                                            {Response.Message}
                                        </div>


                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
