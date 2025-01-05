import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../css/Logos.css';

import Navbarr from '../Navbarr';
import Footer from '../Footer';

import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

import img1 from '../images/restaurant.jpg';
import img2 from '../images/service.avif';

import restaurant from '../images/restaurant.jpg';

function Event_celebration(){

    return (
        <>
        <Navbarr/>
        <h1 className='mt-5 text-center heading restaurant bar'>Event Celebration</h1>
        <Container className='mt-3'>
            <Row>
                <Col className='left' xl={6} lg={6} md={12} sm={12}>
                    <div className='px-5 mt-5'>
                        <h4 className="subhead mb-3">Garden</h4>
                        <p>A particular garden can host up to 500 people for celebrations such as weddings, corporate events, and outdoor concerts. The venue provides a beautiful natural setting with catering, event planning, and decor services. Additional facilities like tents, sound systems, and restrooms are available depending on the event. Guests must adhere to local noise and security regulations for a safe celebration.</p>
                    </div>
                </Col>
                <Col className='right' xl={6} lg={6} md={12} sm={12}>
                    <img src="https://files.yappe.in/place/full/the-park-paradise-31551.webp" width="500px"/>
                </Col>
            </Row>
            <Row>
                <Col className='right' xl={6} lg={6} md={12} sm={12}>
                    <img src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH71061221268520/QS1042/QS1042-Q1/20220818_083407.jpg" width="500px"/>
                </Col>
                <Col className='left' xl={6} lg={6} md={12} sm={12}>
                    <div className='px-5 mt-5'>
                        <h4 className="subhead mb-3">Celebration Hall 1</h4>
                        <p>A marriage hall can host up to 500 people on its spacious lawn for weddings, receptions, and other large celebrations. The venue also accommodates corporate events, social gatherings, and family reunions. Services like catering, event planning, and facilities such as tents and sound systems are provided. Guests must adhere to noise and security regulations to ensure a safe event.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className='left' xl={6} lg={6} md={12} sm={12}>
                    <div className='px-5 mt-5'>
                        <h4 className="subhead mb-3">Celebration Hall 2</h4>
                        <p>A marriage hall can accommodate up to 500 guests on its large lawn, making it perfect for weddings, receptions, and other grand celebrations. The venue is also suitable for corporate events, social gatherings, and family reunions. It offers services like catering, event planning, and amenities such as tents and sound systems. To ensure a smooth and safe event, guests must follow noise and security guidelines.</p>
                    </div>
                </Col>
                <Col className='right' xl={6} lg={6} md={12} sm={12}>
                    <img src="https://images.trvl-media.com/lodging/33000000/32070000/32068800/32068709/ada209c4.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill" width="500px"/>
                </Col>
            </Row>
        </Container>
        <Footer/>
        </>
        
    );
}
export default Event_celebration;