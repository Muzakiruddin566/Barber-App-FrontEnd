import React, { useEffect, useState } from 'react'
import "../../CSS/Barber/portal.css";
import axios from 'axios';
export default function AllServices(props) {
    const [first, setfirst] = useState(0)
    const [Data, setData] = useState({
        result: {}
    });

    const getService = async () => {
        try {
            const res = await axios.get('/barber/allServices', { withCredentials: true });
            if (res.status === 201) {
                setData({
                    result: res.data
                });
            }
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(async () => {
        getService();
        // console.log(Data.result);
    }, [Data.result]);


    var  i = 1;
    return (
        <>
            <div className='container text-center mt-5 tablebody'>
                <div className="row">
                    <div className="col-12">
                        <table className="table  table-striped table-hover">
                            <thead className="bg-dark" style={{ "color": "white" }}>
                                <tr>
                                    <th scope="col">Row</th>
                                    <th scope="col">Service Name</th>
                                    <th scope="col">Prices</th>
                                </tr>
                            </thead>
                            <tbody >
                                { 
                                    Data.result.services?.map(item => {
                                        return (
                                            <tr>
                                                <th scope="row">{i++}</th>
                                                <td>{item.serviceName}</td>
                                                <td>{item.servicePrice}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}