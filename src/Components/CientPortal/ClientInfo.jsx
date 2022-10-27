import React, { useState, useEffect } from 'react'
import image2 from "../../images/person-icon.png";
export default function ClientInfo(props) {
  const [Disable, setDisable] = useState(true)
  const [ERROR, setERROR] = useState(false)
  const handleUpdate = () => {
    setDisable(false);
  }

  const handleBack = () => {
    setDisable(true);
  }


  


  return (
    <>
      <div className='container mt-5'>
        <div className="row">
          <div className='col-12'>
            <div className='client-detail'>
              <div className='client_image' style={{ "display": "inline-block" }}>
                <img src={image2} alt="barberImage" />
              </div>
              <div className='client-Name' style={{ "display": "inline-block", "marginLeft": "10px" }}>
               {props.name}
              </div>
              <hr />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label for="inputName">Name</label>
              <input type="text" className="form-control " id="inputName" value={props.name} disabled={Disable ? true : false} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              {/* {Text && <p className='text-danger'>Number is required</p>}
              {ERROR.validNumber && <p className='text-danger'>Number Must  be Valid</p>} */}
              <label for="inputNumber">Phone Number</label>
              <input type="text" className="form-control" id="inputNumber" value={props.number}  disabled={Disable ? true : false} />
            </div>
          </div>
          <div className="col-md-6 mt-3">
            <div className="form-group">
              <label for="inputName">Email</label>
              <input type="email" className="form-control" id="inputName" value={props.email} disabled />
            </div>
          </div>
          <div className="col-md-6 mt-3">
            <div className="form-group">
              <label for="inputName">Gender</label>
              <input type="text" className="form-control" id="inputName" value={props.gender} disabled />
            </div>
          </div>
          {/* <!-- Button trigger modal --> */}
          <div className='col-md-12 d-flex justify-content-between mt-5 '>
            <button type="button" className="btn btn-dark" onClick={handleBack}>
              Back
            </button>
            <button type="button" className={`btn btn-info ${Disable ? "" : "d-none"}`} data-toggle="modal" data-target="#exampleModal" onClick={handleUpdate}>
              Update
            </button>
            <button type="button" className={`btn btn-success ${Disable ? "d-none" : ""}`} data-toggle="modal" data-target="#exampleModal">
              Save
            </button>
          </div>
        </div>
      </div>

    </>
  )
}
