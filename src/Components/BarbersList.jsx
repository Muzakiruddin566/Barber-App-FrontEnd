import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import "../CSS/card.css";
import axios from 'axios';
import image1 from "../images/b1.jpg";
import Barbercard from './Barbercard';
export default function BarbersList() {
    const [Newarray, setNewarray] = useState({
        Array: []
    })
    const [Location, setLocation] = useState({
        lang:0,
        long:0
    })
    const [Show, setShow] = useState(true);


    const [Select, setSelect] = useState({
        Home: false,
        Cat: "BarberShopForBoys",
        Location: "Lahore",
        kilometer:0
    });
    const [Barbers, setBarbers] = useState({
        Barber: []
    });
    const handleLocation = (e) => {
        setSelect((Select) => ({
            ...Select,
            Location: e.target.value
        }));

    }
    const handleHome = (e) => {
        const HomeSer = e.target.value;
        if (HomeSer == "true") {
            setSelect((Select) => ({
                ...Select,
                Home: true
            }));
        }
        else {
            setSelect((Select) => ({
                ...Select,
                Home: false
            }));
        }

    }

    const handlecat = (e) => {
        setSelect((Select) => ({
            ...Select,
            Cat: e.target.value
        }));

    }

    const handleKilometer = (e)=>{       
        setSelect((Select) => ({
            ...Select,
            kilometer: parseInt(e.target.value)
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(Location.lang,Location.long);
        setShow(false);
        const newArray = Barbers.Barber.filter((res) => {
            let earth = 6378.137;
            let pi = Math.PI,
            cos = Math.cos,
            m = (1 / ((2 * pi / 360) * earth)) / 1000;
            let new_latitude = Location.lang + (Select.kilometer * m);
            let new_longitude = Location.long + (Select.kilometer * m) / cos(res.latitude * (pi / 180));
            return res.latitude <= new_latitude && res.city === Select.Location && res[Select.Cat] === true && res.HomeServices === Select.Home
        });
        if (newArray.length === 0) {
            alert("No Content is Available");
            return setShow(true);
        }
        setNewarray({
            Array: newArray
        });
        console.log(Newarray.Array);
    }




    const BarberList = async () => {
        try {
            const Barber = await axios.get('/barber');
            if (Barber.status === 201) {
                setBarbers({
                    Barber: Barber.data
                });
            }
        } catch (error) {
            console.log("Error", error);
        }
    }

    useEffect(() => {
        BarberList();
    }, [Barbers]);

    useEffect(() => {
        var xmlhttp = new XMLHttpRequest();
        var url = "https://api.ipfind.com/me?auth=2d8ae7ab-9cc2-4d00-962b-cf2234af4699";
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var result = JSON.parse(this.responseText);
                setLocation((Location) => ({
                    lang: result.latitude,
                    long: result.latitude,
                }));
            }
        };

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }, [])
    




    return (
        <div className='container-fluid'>
            <div className="row">
                <Navbar bg="dark" />
            </div>
            <hr className='pad-0' style={{ "marginTop": "5rem", "padding": "0px !important" }} />
            <div className="container" style={{ "marginTop": "2.5rem" }}>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-sm">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Barber Name</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Barber-Name, or Company Name" />
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">City</label>
                                <select className="form-control" id="exampleFormControlSelect1" onChange={handleLocation}>
                                    <option value="Lahore" selected>Lahore</option>
                                    <option value="Islamabad">Islamabad</option>
                                    <option value="Karachi">Karachi</option>
                                    <option value="Multan">Multan</option>
                                    <option value="Rawalpindi">Rawalpindi</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-2 mt-4">
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label htmlFor="inputState">Distance</label>
                                <select id="inputState" className="form-control" onChange={handleKilometer}>
                                    {/* <option >Distance</option> */}
                                    <option selected value={2}>Exact Location</option>
                                    <option value={3}>3 KiloMeter</option>
                                    <option value={4}>4 KiloMeter</option>
                                    <option value={5}>5 KiloMeter</option>
                                    <option value={6}>6 KiloMeter</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label htmlFor="inputStateCat">Category</label>
                                <select id="inputStateCat" className="form-control" onChange={handlecat}>
                                    <option selected value="BarberShopForBoys">BarberShop For Boys</option>
                                    <option value="BeautySalonForGirlsAndBoys">BeautySalon For Girls And Boys</option>
                                    <option value="BeautySalonForGirl">BeautySalon For Girls </option>
                                    <option value="MakeupArtist">Make Up Artist</option>
                                    <option value="WeddingMakeupArtist">Wedding MakeUp Artist</option>
                                    <option value="Massage">Massage</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="form-group">
                                <label htmlFor="inputStateHome">Home Service</label>
                                <select id="inputStateHome" className="form-control" onChange={handleHome}>
                                    {/* <option selected></option> */}
                                    <option selected value={Boolean(false)}>No</option>
                                    <option value={Boolean(true)}>Yes</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <hr className='mt-5' />
            <div className='row'>
                {
                    Show && Barbers.Barber.map((res) => {
                        return <Barbercard obj={res} key={res._id} />
                    })
                }
                {
                    !Show && Newarray.Array.map((res) => {
                        return <Barbercard obj={res} key={res._id} />
                    })
                }
            </div>
        </div>
    )
}
