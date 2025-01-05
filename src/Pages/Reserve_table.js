import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import axios from 'axios';

function Reserve_table(){

    const [inputs,setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // empty in general validation
        if(inputs.name!=undefined && inputs.number!=undefined && inputs.date!=undefined && inputs.time!=undefined && inputs.number_people!=undefined){

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

                                // Number of People validation
                                if(inputs.number_people>0 && inputs.number_people<=10){
                                    axios.post("http://localhost/park-paradise/book_table.php",inputs);
                                    alert("Booking made");
                                }
                                else{
                                    alert("The number of people should be greater than 0 or less than or equal to 10");
                                }
                            }
                        }

                        // Number of People validation
                        if(inputs.number_people>0 && inputs.number_people<=10){
                            axios.post("http://localhost/park-paradise/book_table.php",inputs);
                            alert("Booking made");
                        }
                        else{
                            alert("The number of people should be greater than 0 or less than or equal to 10");
                        }
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
    }

    return(
        <>
                {/* Reserve a table */}
                <div id="table" className='text-center form'>
                    <form method="post" onSubmit = {handleSubmit}>
                        <h2>Reserve a Table</h2>
                        <Container className='tablee'>
                            <Row>
                                <Col xl={12} lg={12} md={12} sm={12}>
                                    <input className='input p-3 m-1' type="text" placeholder='Name' name="name" onChange = {handleChange}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={6} lg={6} md={12} sm={12}>
                                    <input className='input p-3 m-1 smm' type="number" placeholder='Phone Number' name="number" onChange = {handleChange}/>
                                </Col>
                                <Col xl={6} lg={6} md={12} sm={12}>
                                    <input className='input p-3 m-1' type="date" onChange = {handleChange} name="date"/>
                                </Col>
                            </Row>
                            <Row className='d-flex justify-content-evenly'>
                                <Col xl={6} lg={6} md={12} sm={12}>
                                    <input className='input p-3 m-1 smm' type="time" min="10:00" max="20:00" onChange = {handleChange} name="time" />
                                </Col>
                                <Col xl={6} lg={6} md={12} sm={12}>
                                    <input className='input p-3 m-1' type="number" placeholder='Number of People' name="number_people" onChange = {handleChange}/>
                                </Col>
                            </Row>
                            <Row>
                                <input className='input m-1 sub' type="submit"/>
                            </Row>
                        </Container>
                    </form>
                </div>
        </>
    );
}
export default Reserve_table;