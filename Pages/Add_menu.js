import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import '../css/Logos.css';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Add_menu(){

    const [order,setOrder] = useState([]);

    const [record,setRecord] = useState([]);
    const [items, setItems] = useState([]);
    const Navigate = useNavigate();

    useEffect(() => {
        getData();
    },[])

    const getData = async()=> {
        const reqData = await fetch("http://localhost/park-paradise/add_item.php");
        const resData = await reqData.json();
        setRecord(resData);
        
        const itemData = await fetch("http://localhost/park-paradise/List_item.php");
        const item_res = await itemData.json();
        setItems(item_res);
    }

    var arr = [];
    var i, j;
    for(i=0;i<record.length;i++){
        var arr1 = [];
        for(j=0;j<items.length;j++){
            if(items[j]["Category"] == record[i]["Category Name"]){
                arr1.push(items[j]["Item Name"]);
                arr1.push(items[j]["Price"]);
            }
            
        }
        arr.push(arr1);
    }
      
    var element = document.getElementsByClassName("add_btn");
    for(i=0;i<element.length;i++){
        document.getElementsByClassName("minus")[i].style.display = "none";
        if(i%2!=0){
            document.getElementsByClassName("add_btn")[i].innerHTML = "Add Item";
        }
        else{
            document.getElementsByClassName("add_btn")[i].style.display = "none";
        }
    }

    var order_items = "",price = 0,j,k;
    const display = function(index,index1,i,p){
        var number = 0;
        for(j=0;j<index;j++){
            for(k=0;k<arr[j].length;k++){
                number++;
            }
        }
        for(j=0;j<index1;j++){
            number++;
        }
        // console.log(number);
        document.getElementsByClassName("add_btn")[number].innerHTML = "+";
        document.getElementsByClassName("minus")[number].style.display = "block";
        order_items += i+", ";
        document.getElementById("order_items").innerHTML = order_items;
        price += p;
        document.getElementById("price").innerHTML = '₹ '+price;
        order.push(order_items);
        order.push(price);
        if(order.length==4){
            order.shift();
            order.shift();
        }
        // console.log(order);
    }

    const navigatePage = function(){
        Navigate('/pick_food',{state: {order}});
    }

    const display_less = function(index,index1,i,p){
    if(order_items.includes(i)){
        var start = order_items.indexOf(i);
        var last = order_items.indexOf(',', start);
        var part = order_items.slice(0,start) + order_items.slice(last+2,order_items.length);
        // console.log(order_items);
        var part_price = price-p;
        price = part_price;
        order_items = part;
        document.getElementById("order_items").innerHTML = order_items;
        document.getElementById("price").innerHTML = '₹ '+price;
        if(!order_items.includes(i)){
            var number = 0;
            for(j=0;j<index;j++){
                for(k=0;k<arr[j].length;k++){
                    number++;
                }
            }
            for(j=0;j<index1;j++){
                number++;
            }
            document.getElementsByClassName("add_btn")[number].innerHTML = "Add Item";
            document.getElementsByClassName("minus")[number].style.display = "none";

        }
    }
    else{
        var number = 0;
        for(j=0;j<index;j++){
            for(k=0;k<arr[j].length;k++){
                number++;
            }
        }
        for(j=0;j<index1;j++){
            number++;
        }
        document.getElementsByClassName("add_btn")[number].innerHTML = "Add Item";
        document.getElementsByClassName("minus")[number].style.display = "none";
    }
        
    }
    return(
        <>
<Accordion defaultActiveKey="0">
{
    record.map((udata,index)=>(
    <Accordion.Item eventKey={index}>
        <Accordion.Header>{udata["Category Name"]}</Accordion.Header>
        <Accordion.Body>
        <Container fluid>
        <Row>
        {
            arr[index].map((items,index1) => (
                <>
                <Col xl={3} lg={3} md={3} sm={3}>
                    <>
                        <span>{items}</span>
                    </>
                </Col>
                <Col xl={3} lg={3} md={3} sm={3}>
                    <>
                    <Button variant="outline-secondary" className="add_btn" onClick={() => display(index, index1, arr[index][index1-1], arr[index][index1])}></Button>
                    <Button  variant="outline-secondary" className="minus" onClick={() => display_less(index, index1, arr[index][index1-1], arr[index][index1])}>-</Button>
                    </>
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
    <div className='bg-body-tertiary p-3'>
        <Container>
            <Row>
                <Col xl={6} lg={6} md={12} sm={12} id="order_items"></Col>
                <Col xl={4} lg={4} md={6} sm={6} id="price"></Col>
                <Col xl={2} lg={2} md={6} sm={6}><Button variant="outline-dark" onClick={navigatePage}>Confirm Order</Button></Col>
            </Row>
        </Container>
    </div>
        </>
    );
}
export default Add_menu;