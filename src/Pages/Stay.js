import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../css/Logos.css';

import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

import Footer from '../Footer';

import Navbarr from '../Navbarr';
import img1 from '../images/restaurant.jpg';
import img2 from '../images/service.avif';

import restaurant from '../images/restaurant.jpg';

function Stay(){

    return (
        <>
        <Navbarr/>
        <h1 className='mt-5 text-center heading restaurant bar'>Stay</h1>
        <Container className='mt-3'>
            <Row>
                <Col className='left' xl={6} lg={6} md={12} sm={12}>
                    <div className='px-5 mt-5'>
                        <h4 className="subhead mb-3">Rooms</h4>
                        <p>With an option of King and Twin beds, these rooms have attached four fixture bathrooms. The contemporary ambience accompanied with facilities like free WiFi*, iPod dock, mini bar and electronic safe are specially designed to give you relaxed experience. <br />
                        <b>Area: 34 sq.mtr.</b>
                        </p>
                    </div>
                </Col>
                <Col className='right' xl={6} lg={6} md={12} sm={12}>
                    <img src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/201702231617337627-201374-d25a72c05ca611eb80830242ac110003.jpg" width="500px"/>
                </Col>
            </Row>
            <Row>
                <Col className='right' xl={6} lg={6} md={12} sm={12}>
                    <img src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/201702231617337627-201374-b9a15bda5ca711eb958b0242ac110006.jpg" width="500px"/>
                </Col>
                <Col className='left' xl={6} lg={6} md={12} sm={12}>
                    <div className='px-5 mt-5'>
                        <h4 className="subhead mb-3">Suites</h4>
                        <p>With an option of King and Twin beds, these rooms have attached four fixture bathrooms. The contemporary ambience accompanied with facilities like free WiFi*, iPod dock, mini bar and electronic safe are specially designed to give you relaxed experience. <br />
                        <b>Area: 34 sq.mtr.</b>
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
        
    );
}
export default Stay;