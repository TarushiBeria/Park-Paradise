import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Outlet, Link, useNavigate } from "react-router-dom";

function Pick_up(){
    const[inputs,setInputs] = useState({});

    const navigate = useNavigate();
    const ChooseItem = (event) => {
        navigate("/add_menu");
    }

    const location = useLocation();
    const { order } = location.state || {};
    const a = JSON.stringify(order);
    if(a!=undefined){
        var start = a.indexOf('"');
        var end = a.lastIndexOf('"');
        var part = a.slice(start+1,end);    
        var price = '₹ '+a.slice(end+2,a.length-1);
        // console.log(price);
    }
    else{
        var part = '';
        var price = '';
    }

    const handlePickChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}));
        setInputs(values => ({...values, ["price"]:price}));
        setInputs(values => ({...values, ["order"]:part}));
    }

    var pricee;
    const handlePickSubmit = (event) => {
        event.preventDefault();

        // empty in general validation
        if(inputs.name!=undefined && inputs.price!=undefined && inputs.order!=undefined && inputs.time!=undefined && inputs.date!=undefined){

            // Phone number validation
            if(inputs.number.length==10 && String(inputs.number)[0]!=0){

                // date validation
                const d_curr = new Date;
                const d = new Date(inputs.date)
                var month = d_curr.getMonth();
                if(month==11){
                    month = -1
                }
                if(d>=d_curr){
                    if (d.getMonth()<=month+1 || (d.getMonth()==11 && month==-1)){
                        
                        // Time validation
                        if(d_curr == d){
                            if(inputs.time>d.getTime()){
                                axios.post("http://localhost/park-paradise/pick.php",inputs);
                                    alert("Booking made");
                            }
                        }
                        axios.post("http://localhost/park-paradise/pick.php",inputs);
                            alert("Order Placed");
                    }
                    else{
                        alert("Bookings can be made till next month only");
                    }
                }
            }
            else{
                alert("Please Enter the correct phone number");
            }
        }
        else{
            alert("Plase fill up all the fields");
        }
        
        // console.log(inputs);
    }

    return (
            <div id="pick-up" className='text-center'>
                    <form onSubmit={handlePickSubmit} className='form'>
                        <h2>Pick Up Food</h2>
                        <Container className='pick-upp'>
                            <Row>
                                <Col xl={12} lg={12} md={12} sm={12}>
                                    <input type="text" className="input p-3 m-1" placeholder='Name' name="name" onChange={handlePickChange} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={6} lg={6} md={12} sm={12}>
                                    <input type="time" className="input p-3 m-1 smm" name="time" min="10:00" max="20:00" onChange={handlePickChange}/>
                                </Col>
                                <Col xl={6} lg={6} md={12} sm={12}>
                                    <input type="date" className="input p-3 m-1" name="date" onChange={handlePickChange}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={6} lg={6} md={12} sm={12}>
                                    <input type="number" className="input p-3 m-1 smm" placeholder='Phone Number' name="number" onChange={handlePickChange} />
                                </Col>
                                <Col xl={6} lg={6} md={12} sm={12}>
                                    <input type="text" className="input p-3 m-1" placeholder='Your Order' name="order" value={part} onFocus={ChooseItem} onChange={handlePickChange}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={12} lg={12} md={12} sm={12}>
                                    <input type="text" className="input p-3 m-1" value={price} name="price" placeholder='Total Payable amount' onChange={handlePickChange}/>
                                </Col>
                            </Row>
                            <Row>
                                <input type="submit" className="input sub m-1"/>
                            </Row>
                        </Container>
                    </form>
                </div>
    );
}
export default Pick_up;