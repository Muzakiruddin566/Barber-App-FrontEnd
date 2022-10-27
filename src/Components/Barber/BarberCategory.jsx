import React, { useState} from 'react'
import { handleCheckBoxBarberShopForBoys, handleCheckBoxBeautySaloonForGirls, handleCheckBoxBeautySaloonForBoysAndGirls, handleCheckBoxWeddingMakeUpArtist, handleCheckBoxMakeUpArtist, handleCheckBoxMassage } from "../../action/index";
import { useSelector, useDispatch } from "react-redux";
import {  useNavigate } from 'react-router-dom';

export default function BarberCategory() {
  const myState = useSelector((state)=>state.handleCheckReducer);
  const dispatch = useDispatch();
  const [valid, setvalid] = useState(true);
  const [Show, setShow] = useState(false);
  // const [Category, setCategory] = useState([]);
  const navigate = useNavigate();
  
  const  onSubmit = (e)=>{
    e.preventDefault();
    if(!myState.BarbershopForBoys && !myState.BeautySalonForGirls && !myState.BeautySalonForGirlsAndBoys && !myState.WeddingMakeUpArtist && !myState.MakeUpArtist && !myState.Massage ){
      return (setvalid(true),
      setShow(true));
      
    }else{
      console.log(myState);
      navigate("/Barber/Register/Services");
    }
  }

  const handleCheckBarberShop=(e)=>{
   dispatch(handleCheckBoxBarberShopForBoys(e.target.checked));
   setvalid(false);
   setShow(false);
  }

 const handleCheckBeautySalon = (e)=>{
   dispatch(handleCheckBoxBeautySaloonForGirls(e.target.checked));
   setvalid(false);
   setShow(false);
 }

  const handleCheckBeautySalonForBoth = (e)=>{
    dispatch(handleCheckBoxBeautySaloonForBoysAndGirls(e.target.checked));
    setvalid(false);
    setShow(false);
  }
  
  const handleCheckWeddingMakeup = (e)=>{
    dispatch(handleCheckBoxWeddingMakeUpArtist(e.target.checked));
    setvalid(false);
    setShow(false);
  }

  const  handleCheckMakeUp = (e)=>{
    dispatch(handleCheckBoxMakeUpArtist(e.target.checked));
    setvalid(false);
    setShow(false);
  }
  const handleMassage = (e)=>{
    dispatch(handleCheckBoxMassage(e.target.checked));
    setvalid(false);
    setShow(false);
  }
  return (
    <div className='container-fluid'>
      <section className="h-100 h-custom" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card card-md rounded-3">
                {/* <img src={img1} className="w-100" style={{ "borderTopLeftRadius": ".3rem", "borderTopRightRadius": ".3rem" }} alt="Sample photo" /> */}
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4  text-center pb-2 pb-md-0 mb-md-5 px-md-2">Select Category </h3>

                  <form className="px-md-2" onSubmit={onSubmit}>


                    <label className="input-container">BarberShop For Boys
                      <input type="checkbox" name= "BarberShopForBoys"  onClick={handleCheckBarberShop}  />
                      <span className="checkmark" ></span>
                    </label>
                    <label className="input-container">Beauty Salon For Girl
                      <input type="checkbox" name="BeautySalonForGirl"   onClick={handleCheckBeautySalon} />
                      <span className="checkmark"></span>
                    </label>
                    <label className="input-container"> Beauty Salon For Girls and Boys
                      <input type="checkbox" name="BeautySalonForGirlsAndBoys"   onClick={handleCheckBeautySalonForBoth} />
                      <span className="checkmark"></span>
                    </label>
                    <label className="input-container">Wedding Makeup Artist
                      <input type="checkbox"  name="WeddingMakeupArtist"  onClick={handleCheckWeddingMakeup}  />
                      <span className="checkmark"></span>
                    </label>
                    <label className="input-container">Makeup Artist
                      <input type="checkbox" name="MakeupArtist" onClick={handleCheckMakeUp}  />
                      <span className="checkmark"></span>
                    </label>
                    <label className="input-container">Massage
                      <input type="checkbox"  name="Massage"  onClick={handleMassage} />
                      <span className="checkmark"></span>
                    </label>
                    <div className="d-flex justify-content-center">
                      
                      <button type="submit" className="btn btn-dark btn-block btn-lg mt-3 gradient-custom-4 text-body cardButton color" disabled={valid}>NEXT</button>
                    </div>
                    {Show && <p className='text-danger'>Please Choose At Least One Category</p>}

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
