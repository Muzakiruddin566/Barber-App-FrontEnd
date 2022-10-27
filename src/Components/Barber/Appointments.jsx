import React, { useEffect, useState } from 'react'
import BarberPortal from './BarberPortal';
import "../../CSS/Barber/portal.css";
import axios from 'axios';
import { Button } from 'react-bootstrap';
export default function Appointments(props) {
    var i = 1;
    const [Data, setData] = useState({
        data: {}
    });
    useEffect(async () => {
        const res = await axios.get('/barber/getAppointment', { withCredentials: true })
        if (res.status === 201) {
            setData({
                data: res.data
            });
        }
    }, [Data]);
    const handlerOnComplete = async(Name,id,tokenNumber)=>{
        try {
            const res = await axios.put('/barber/completeTask/'+Data.data._id+"/"+id);
            if(res.status === 201){
                alert(res.data);
            }
        } catch (error) {
            console.log(error);
        }
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
                                    <th scope='col'>Action</th>
                                </tr>
                            </thead>
                            <tbody >
                                {Data.data.confirmToken?.map((item,i) => {
                                   
                                        return <tr key={item._id}>
                                            <th scope="row">{i++}</th>
                                            <td>{item.client.Name}</td>
                                            <td>{item.client.Email}</td>
                                            <td>{item.client.Number}</td>
                                            <td>{item.client.gender}</td>
                                            <td>{item.tokenNumber}</td>
                                            <td>{item.status}</td>
                                            <td>
                                                <Button variant={`${item.status === 'confirm'?"success":"warning"}`} onClick={(e)=>handlerOnComplete(item.Name,item._id,item.tokenNumber)}>
                                                   {item.status === 'confirm'? "complete":"cancel"}
                                                </Button>
                                                {
                                                    item.status === 'confirm'?<Button variant="danger" >cancel</Button>:<Button variant="primary" onClick={(e)=>handlerOnComplete(item.Name,item._id,item.tokenNumber)}>Remained</Button>
                                                }
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
