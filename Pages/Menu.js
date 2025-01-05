import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import '../css/Logos.css';

import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Menu(){

    const [record,setRecord] = useState([]);
    const [items, setItems] = useState([]);
    const Navigate = useNavigate();

    useEffect(() => {
        getData();
    },[])

    const getData = async()=> {
        const reqData = await fetch("http://localhost/park-paradise/add_item.php");
        const resData = await reqData.json();
        // console.log(resData);
        setRecord(resData);
        
        const itemData = await fetch("http://localhost/park-paradise/List_item.php");
        const item_res = await itemData.json();
        // console.log(item_res);
        setItems(item_res);
        // console.log(items);
    }

    var arr = [];
    // var arr2 = [[],[]];
    var i, j;
    for(i=0;i<record.length;i++){
        var arr1 = [];
        // var arr2 = [];
        // arr2.push(record[i]);
        // arr2.push(record[i]);
        for(j=0;j<items.length;j++){
            if(items[j]["Category"] == record[i]["Category Name"]){
                // console.log(j);
                // console.log(items[j]["Category"]);
                arr1.push(items[j]["Item Name"]);
                arr1.push(items[j]["Price"]);
                // arr[i][j].push(items[j]["Price"]);
            }
            
        }
        arr.push(arr1);
        // console.log(arr1);
    }
    console.log(arr);
    // console.log(arr2);
    
    if(sessionStorage.getItem("role")=="admin" || sessionStorage.getItem("role")=="editor"){
        return(
            <Container fluid>
                <Col className="text-center m-4">
                    <Link className="menu_add p-3 bg-body-tertiary text-secondary" to="/add_item">Add Item</Link>
                </Col>
                <Accordion defaultActiveKey="0" className='mt-5'>
    {
        record.map((udata,index)=>(
        <Accordion.Item eventKey={index}>
            <Accordion.Header className='acc-header'>{udata["Category Name"]}</Accordion.Header>
            <Accordion.Body>
            <Container fluid>
        <Row>
        {
            arr[index].map((items) => (
                <>
                <Col xl={6} lg={6} md={6} sm={6}>
                    <span>{items}</span>
                </Col>
                </>
            ))
        }
        </Row>
        </Container>
            
            </Accordion.Body>
          </Accordion.Item>
        ))
    }                     
    </Accordion>
            </Container>
        );
    }
    else{
        return(
            <>
    <Accordion defaultActiveKey="0">
    {
        record.map((udata,index)=>(
        <Accordion.Item eventKey={index}>
            <Accordion.Header className='acc-header'>{udata["Category Name"]}</Accordion.Header>
            <Accordion.Body>
            <Container fluid>
        <Row>
        {
            arr[index].map((items) => (
                <>
                <Col xl={6} lg={6} md={6} sm={6}>
                    <span>{items}</span>
                </Col>
                </>
            ))
        }
        </Row>
        </Container>
            
            </Accordion.Body>
          </Accordion.Item>
        ))
    }                     
    </Accordion>
            </>
        );
    }
}
export default Menu;