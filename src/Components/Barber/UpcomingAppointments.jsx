import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
export default function UpcomingAppointments() {
    const [Data, setData] = useState({
        data: {}
    })
    useEffect(async () => {
        const res = await axios.get('/barber/upcomingAppointment', { withCredentials: true })
        if (res.status === 201) {
            setData({
                data: res.data
            });
        }
    }, [Data]);
    const handlerOnConfirm = (Name,id,tokenNumber)=>{
        alert(Name);
        alert(id);
        alert(tokenNumber);
    }

    return (
        <>
            <div className='container text-center mt-5 tablebody'>
                <div className="row">
                    <div className="col-12">
                        <table className="table  table-striped table-hover">
                            <thead className="bg-dark" style={{ "color": "white" }}>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Number</th>
                                    <th scope='col'>Male</th>
                                    <th scope='col'>Token Number</th>
                                    <th scope='col'>status</th>
                                </tr>
                            </thead>
                            <tbody >
                            {Data.data.waitingToken?.map((item,i) => {
                                   
                                   return <tr key={item._id}>
                                       <th scope="row">{i++}</th>
                                       <td>{item.Name}</td>
                                       <td>{item.Email}</td>
                                       <td>{item.Number}</td>
                                       <td>{item.gender}</td>
                                       <td>{item.tokenNumber}</td>
                                       <td>
                                           <Button variant="warning" onClick={(e)=>handlerOnConfirm(item.Name,item._id,item.tokenNumber)}>
                                               confirm
                                           </Button>
                                       </td>
                                   </tr>
                              

                           })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
