import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navbarr from '../Navbarr';
import Footer from '../Footer';

import { useState } from "react";
import axios from "axios";

function Add_item(){
    const [inputs,setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(inputs);
        axios.post("http://localhost/park-paradise/add_item.php",inputs)
    }

    return(
        <Container fluid className='add_itemm'>
            <Navbarr />
            <Container>
                <form method="post" className='form' id="add_itemm" onSubmit={handleSubmit}>
                    {/* <label>Enter the Item name: </label> */}
                    <h3 className='text-center'>Add Item</h3>
                    <input type="text" name="name" className='input p-3 m-1' onChange={handleChange} placeholder='Name'/><br />
                    {/* <label>Enter the Category: </label> */}
                    <input type="text" name="category" className='input p-3 m-1' onChange={handleChange} placeholder='Category'/><br />
                    {/* <label>Enter the price: </label> */}
                    <input type="number" name="price" className='input p-3 m-1' onChange={handleChange} placeholder='Price'/><br />
                    <input type="submit" className='input m-1 sub'/>
                </form>
            </Container>
            <Footer />
        </Container>
    );
}
export default Add_item;