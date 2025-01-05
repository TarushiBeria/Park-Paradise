import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../css/Logos.css';

import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Home_delivery(){

    const navigate = useNavigate();
    const ChooseItem = (event) => {
        navigate("/home_add_menu");
    }

    const [inputs2,setInputs2] = useState({});

    const location = useLocation();
    const { order } = location.state || {};
    const a1 = JSON.stringify(order);
    if(a1!=undefined){
        var start1 = a1.indexOf('"');
        var end1 = a1.lastIndexOf('"');
        var part1 = a1.slice(start1+1,end1);    
        var price1 = '₹ '+a1.slice(end1+2,a1.length-1);
        // console.log(price);
    }
    else{
        var part1 = '';
        var price1 = '';
    }

    const handleHomeChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs2(values => ({...values, [name]:value}));
        setInputs2(values => ({...values, ["price"]:price1}));
        setInputs2(values => ({...values, ["order"]:part1}));
    }

    const handleHomeSubmit = (event) => {
        event.preventDefault();

        // empty in general validation
        if(inputs2.name!=undefined && inputs2.price!=undefined && inputs2.order!=undefined && inputs2.time!=undefined && inputs2.date!=undefined && inputs2.house_no!=undefined && inputs2.locality!=undefined){

            // Phone number validation
            if(inputs2.number.length==10 && String(inputs2.number)[0]!=0){

                // date validation
                const d_curr = new Date;
                const d = new Date(inputs2.date)
                var month = d_curr.getMonth();
                if(month==11){
                    month = -1
                }
                if(d>=d_curr){
                    if (d.getMonth()<=month+1 || (d.getMonth()==11 && month==-1)){
                        
                        // Time validation
                        if(d_curr == d){
                            if(inputs2.time>d.getTime()){
                                axios.post("http://localhost/park-paradise/Home.php",inputs2);
                                    alert("Booking made");
                            }
                        }
                        axios.post("http://localhost/park-paradise/Home.php",inputs2);
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
        console.log(inputs2);
    }
    return(
                <div id="home-delivery" className='text-center'>
                    <form onSubmit={handleHomeSubmit} className='form'>
                        <h2>Home Delivery</h2>
                        <Container className='home-deliveryy'>
                            <Row>
                                <Col xl={12} lg={12} md={12} sm={12}>
                                    <input type="text" placeholder='Name' name="name" onChange={handleHomeChange} className='input p-3 m-1' />
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={6} lg={6} md={12} sm={12}>
                                    <input type="time" name="time" onChange={handleHomeChange} className='input p-3 smm m-1'/>
                                </Col>
                                <Col xl={6} lg={6} md={12} sm={12}>
                                    <input type="date" name="date" onChange={handleHomeChange} className='input p-3 m-1'/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={6} lg={6} md={12} sm={12}>
                                    <input type="text" placeholder='Flat, House No, Apartment' name="house_no" onChange={handleHomeChange} className='input p-3 smm m-1'/>
                                </Col>
                                <Col xl={6} lg={6} md={12} sm={12}>
                                    <input type="text" placeholder='Locality, Area, Landmark' name="locality" onChange={handleHomeChange} className='input p-3 m-1'/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={6} lg={6} md={12} sm={12}>
                                    <input type="number" placeholder='Phone Number' name="number" onChange={handleHomeChange} className='input p-3 smm m-1'/>
                                </Col>
                                <Col xl={6} lg={6} md={12} sm={12}>
                                    <input type="text" placeholder='Your Order' onFocus={ChooseItem} value={part1} name="order" onChange={handleHomeChange} className='input p-3 m-1'/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={12} lg={12} md={12} sm={12}>
                                    <input type="text" placeholder='Total Payable amount' value={price1} name="price" onChange={handleHomeChange} className='input p-3 m-1'/>
                                </Col>
                            </Row>
                            <Row>
                                <input type="submit" className='input p-3 sub m-1'/>
                            </Row>
                        </Container>
                    </form>
                </div>
    );
}
export default Home_delivery;