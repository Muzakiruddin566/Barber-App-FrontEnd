import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
export default function Appointments() {
    const [Data, setData] = useState({
        data: []
    })
    useEffect(async () => {
        const res = await axios.get('/barber/client/Appointments', { withCredentials: true })
        if (res.status === 201) {
            setData({
                data: res.data.Data
            });
        }
        console.log(res);
    }, []);
    const handlerOnConfirm = () => {
        console.log(Data.data);
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
                                    <th scope='col'>Token Number</th>
                                    <th scope='col'>status</th>
                                </tr>
                            </thead>
                            <tbody >
                                {Data.data?.map((item, i) => {

                                    return <tr key={item._id}>
                                        <th scope="row">{i++}</th>
                                        <td>{item.barber[0].Name}</td>
                                        <td>{item.barber[0].Email}</td>
                                        <td>{item.barber[0].Number}</td>
                                        <td>{item.tokenNumber}</td>
                                        <td>{item.status}</td>
                                    </tr>


                                })}
                                {/* <Button variant="warning" onClick={handlerOnConfirm}>
                                    confirm
                                </Button> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
