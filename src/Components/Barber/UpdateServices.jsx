import React, { useState ,useEffect} from 'react'
import { Form, Row, Button } from 'react-bootstrap';
import axios from 'axios';
export default function UpdateServices(props) {
    const [Data, setData] = useState({
        result:{}
    })
    const [Service, setService] = useState({
        service: "",
        price: ""
    });
    const handleService = (e) => {
        setService(Service => ({
            ...Service,
            service: e.target.value
        }));
    }
    const handlePrice = (e) => {
        setService(Service => ({
            ...Service,
            price: e.target.value
        }));
    }
    const handleOnsubmit = async(e) => {
        e.preventDefault();
        alert("Update Successfully");
        // if (Service.service === "0" || !Service.price) {
        //     return alert("Enter Service OR Price");
        // }
        // try {
        //     const res = await axios.put('/barber/allServices/'+props.data._id+"/"+Data.result.services,Service);
        //     if(res.status === 201){
        //         alert(res.data);
        //     }
        // } catch (error) {
        //     console.log(error);
        // }
       console.log(Data.result);
    }
    const getService = async()=>{
        try {
          const res = await axios.get('/barber/allServices',{ withCredentials: true });
          if(res.status === 201){
              setData({
                  result:res.data
              });
          }
        } catch (error) {
            console.log(error);
        }
        
    }
    useEffect(async() => {
        getService()
    }, [Data.result]);
    
    return (
        <div className='container mt-5'>
            <Form onSubmit={handleOnsubmit}>
                <Row>
                    <div className='col-lg-6 col-md-4 col-sm-12 mt-3'>
                        <Form.Select onChange={handleService}>
                            <option selected value={"0"}>Services Name</option>
                            {
                                Data.result.services?.map((item)=>{
                                    return <option value={item.serviceName}>{item.serviceName}</option>
                                })
                            }
                        </Form.Select>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 mt-3'>
                        <Form.Control placeholder="Price" onChange={handlePrice} />
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-6 text-center mt-3'>
                        <Button type="submit" className="mb-2">
                            ADD
                        </Button>
                    </div>
                </Row>
            </Form>
        </div>
    )
}

