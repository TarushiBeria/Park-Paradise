import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Navbarr from './Navbarr';
import Footer from './Footer';

function Join(){
    const [record,setRecord] = useState([]);
    const [inputs,setInputs] = useState({});

    const Navigate = useNavigate();

    var arr;
    var flag = 0;

    useEffect(() => {
        getData();
    },[])

    var reqData,resData;
    const getData = async()=> {
        reqData = await fetch("http://localhost/park-paradise/employee-details.php");
        resData = await reqData.json();
        // console.log(resData);
        setRecord(resData);
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}));
        // console.log(inputs);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        var i = 0;
        for(i=0;i<record.length;i++){
            if(record[i].Name == inputs.name && record[i].ID == inputs.id && record[i].Role==inputs.role){
                flag = 1;
                sessionStorage.setItem("name", record[i].Name);
                sessionStorage.setItem("role", record[i].Role);
                break;
            }
        }
        if(flag==0){
            Navigate('/join');
        }
        else{
            Navigate('/');
        }
        // console.log(record[0].Name);
        // console.log(inputs.name);

    }

    return (
        <div className='join'>
        <Navbarr/>
        <Container>
            <form method="post" className='form px-5 mx-5' onSubmit={handleSubmit} id="join">
                    <h3 className='text-center'>Log In</h3>
                    <input type="text" name="name" className="input p-3 m-1" onChange={handleChange} placeholder='Name'/><br/>
                    <input type="number" name="id" className="input p-3 m-1" onChange={handleChange} placeholder='ID'/><br/>
                    <select name="role" className="input p-3 m-1" onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="admin">Admin</option>
                        <option value="editor">Editor</option>
                    </select><br/>
                    <input type="submit" className='input sub m-1'/>
            </form>
        </Container>
        <Footer/>
        </div>
    );
}
export default Join;