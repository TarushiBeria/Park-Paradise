import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../css/Logos.css';

import Navbarr from '../Navbarr';
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

import Footer from '../Footer';

import img1 from '../images/restaurant.jpg';
import img2 from '../images/service.avif';

import restaurant from '../images/restaurant.jpg';

function Refresh(){

    return (
        <>
        <Navbarr />
        <h1 className='mt-5 text-center heading restaurant bar'>Refresh</h1>
        <Container className='mt-3'>
            <Row>
                <Col className='left' xl={6} lg={6} md={12} sm={12}>
                    <div className='px-5 mt-5'>
                        <h4 className="subhead mb-3">Bar</h4>
                        <p>The Crystal Bar at Park Paradise offers a stylish and welcoming atmosphere, serving expertly crafted cocktails and premium drinks. Set in a scenic location, it boasts stunning views that elevate the experience. With its elegant design and cozy ambiance, it’s ideal for both relaxation and socializing. Guests can also enjoy gourmet snacks, making the Crystal Bar a unique blend of luxury and nature.</p>
                    </div>
                </Col>
                <Col className='right' xl={6} lg={6} md={12} sm={12}>
                    <img src="https://i.pinimg.com/736x/1e/e1/bc/1ee1bcc6c6f99a50095b976ce9dac73f.jpg" width="500px"/>
                </Col>
            </Row>
            <Row>
                <Col className='right' xl={6} lg={6} md={12} sm={12}>
                    <img src="https://eb-prod-business-images-thumbnail.s3.amazonaws.com/3451806_1540796604_0night-club-2.jpg" width="500px"/>
                </Col>
                <Col className='left' xl={6} lg={6} md={12} sm={12}>
                    <div className='px-5 mt-5'>
                        <h4 className="subhead mb-3">Dance Floor</h4>
                        <p>The dance floor at the Crystal Bar in Park Paradise is a lively space where guests can dance to energetic beats. With dynamic lighting and a vibrant atmosphere, it’s perfect for both casual nights and special celebrations. Surrounded by the elegance of the bar, it blends music and luxury seamlessly. It’s the ultimate destination for fun and entertainment within Park Paradise.</p>
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer/>
        </>
        
    );
}
export default Refresh;