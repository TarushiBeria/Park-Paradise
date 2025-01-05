import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from "react";
import axios from "axios";

import Navbarr from './Navbarr';
import Footer from './Footer';

import "./css/Logos.css";

function Add(){
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("http://localhost/park-paradise/employee-details.php",inputs);
        // console.log(inputs);
    }

    return(
        <div className='add'>
        <Navbarr />
        <Container>
            <form onSubmit={handleSubmit} className="form px-5 mx-5" method="post" id="add">
                {/* <label>Enter the Name: </label> */}
                <h3 className='text-center'>Add a new member</h3>
                <input type="text" onChange={handleChange} name="name" className="input p-3 m-1" placeholder='Name' />
                {/* <label>Enter the Role: </label> */}
                <select onChange={handleChange} name="role" className="input p-3 m-1">
                    <option value="">Select</option>
                    <option value="admin">Admin</option>
                    <option value="editor">Editor</option>
                </select>
                <input type="submit" className="input sub m-1"/>
            </form>
        </Container>
        <Footer />
        </div>
    );
}
export default Add;