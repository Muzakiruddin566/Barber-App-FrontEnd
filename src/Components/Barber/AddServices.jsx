import React,{useState} from 'react'
import { Form, Col, Row ,Button} from 'react-bootstrap';
import axios from 'axios'
export default function AddServices(props) {
    const [Service, setService] = useState({
        service:"",
        price:""
    });
    const handleService=(e)=>{
        setService(Service=>({
            ...Service,
            service:e.target.value
        }));
    }
    const handlePrice=(e)=>{
        setService(Service=>({
            ...Service,
            price:e.target.value
        }));
    }
    const handleOnsubmit=async(e)=>{
        e.preventDefault();
        // alert(props.data);
        if(!Service.service || !Service.price){
            return alert("Enter Service OR Price");
        }
        try {
            const res = await axios.put('/barber/addServices/'+props.data._id,Service);
            if(res.status === 201){
                alert(res.data);
            }
        } catch (error) {
            // if(error.response.status === 401){
            //     alert(error.response.data);
            // }
            // else{
                console.log(error);
            // }
        }
        
    }
    return (
        <div className='container mt-5'>
            <Form onSubmit={handleOnsubmit}>
                <Row>
                    <div className='col-lg-6 col-md-4 col-sm-12 mt-3'> 
                        <Form.Control placeholder="Service Name"  onChange={handleService}/>
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
