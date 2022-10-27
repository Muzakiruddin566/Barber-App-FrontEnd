import React,{useState} from "react";
import { handleCheckBoxYES, handleCheckBoxNO } from "../../action/index";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
export default function HomServices() {
    const [Show, setShow] = useState(true);
    const myState = useSelector((state) => state.handleCheckReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const onSubmit = (event) => {
        event.preventDefault();
        if(Show){
            return setShow(true);
        }else{
            console.log(myState);
            navigate("/Barber/Register/Location");
        }
    }

    const handleCheckBoxYes = (e) => {
        dispatch(handleCheckBoxYES(true));
        setShow(false);
    }

    const handleCheckBoxNo = (e) => {
        dispatch(handleCheckBoxNO(false));
        setShow(false);
    }

    return (
        <div className="container-fluid">
            <section className="h-100 h-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-8 col-xl-6">
                            <div className="card card-md rounded-3">
                                {/* <img src={img1} className="w-100" style={{ "borderTopLeftRadius": ".3rem", "borderTopRightRadius": ".3rem" }} alt="Sample photo" /> */}
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4  text-center pb-2 pb-md-0 mb-md-5 px-md-2">
                                        Select Service
                                    </h3>

                                    <form className="px-md-2" onSubmit={onSubmit}>
                                        <label className="input-container">
                                            YES
                                            <input
                                                type="checkbox"
                                                name="YES"
                                                onClick={handleCheckBoxYes}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="input-container">
                                            NO
                                            <input
                                                type="checkbox"
                                                name="=NO"
                                                onClick={handleCheckBoxNo}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                        <div className="d-flex justify-content-center">

                                            <button type="submit" className="btn btn-dark btn-block btn-lg mt-3 gradient-custom-4 text-body cardButton color">NEXT</button>
                                        </div>
                                        {Show && <p className='text-danger'>Please Choose Yes OR Not</p>}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
