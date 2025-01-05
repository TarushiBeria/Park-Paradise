import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../css/Logos.css';

import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import Footer from '../Footer';

import img1 from '../images/food1.jpg';
import img2 from '../images/restaurant.jpg';
import img3 from '../images/food2.jpg';
import img4 from '../images/food 3.jpg';

import restaurant from '../images/restaurant.jpg';

function Restaurant(){

    return (
        <>
        <h1 className='mt-5 text-center heading restaurant'>Restaurant</h1>
        <Container className='mt-3'>
            <Row>
                <Col className='right' xl={6} lg={6} md={12} sm={12}>
                    <img src={img1} width="500px"/>
                </Col>
                <Col className='left' xl={6} lg={6} md={12} sm={12}>
                    <div className='px-5 mt-5'>
                        <p>DISCOVER</p>
                        <h4 className="subhead">The Menu</h4>
                        <p>Rajasthan, the land of kings and queens, is not just known for its majestic forts and palaces but also its rich culinary heritage. With a diverse range of flavors, spices, and traditional cooking techniques, Rajasthani cuisine offers a gastronomic delight for food lovers.</p>
                        <Link to="/menu" className="bg-dark text-white link">View Menu</Link>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className='left' xl={6} lg={6} md={12} sm={12}>
                    <div className='px-5 mt-5'>
                        <p>DISCOVER</p>
                        <h4 className="subhead">Reserve a Table</h4>
                        <p>Step into our restaurant, where each dish is a celebration of rich heritage and bold flavors. Savor a selection of authentic curries, tandoori delights, and fragrant biryanis, all made with the finest spices. Enjoy a unique dining experience filled with warmth, hospitality, and unforgettable taste in every bite.</p>
                        <Link to="/reserve_table" className="bg-dark text-white link">Reserve a Table</Link>
                    </div>
                </Col>
                <Col className='right' xl={6} lg={6} md={12} sm={12}>
                    <img src={img2} width="500px"/>
                </Col>
            </Row>
            <Row>
                <Col className='right' xl={6} lg={6} md={12} sm={12}>
                    <img src={img3} width="500px"/>
                </Col>
                <Col className='left' xl={6} lg={6} md={12} sm={12}>
                    <div className='px-5 mt-5'>
                        <p>DISCOVER</p>
                        <h4 className="subhead">Pick Up Food</h4>
                        <p>We are excited to offer a convenient pick-up food service, allowing you to enjoy your favorite dishes from our restaurant at home. Simply place your order, and our team will have it ready for you to pick up in no time. Experience the same great taste and quality, now available for your convenience!</p>
                        <Link to="/pick_food" className="bg-dark text-white link">Order Here</Link>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className='left' xl={6} lg={6} md={12} sm={12}>
                    <div className='px-5 mt-5'>
                        <p>DISCOVER</p>
                        <h4 className="subhead">Home Delivery</h4>
                        <p>Enjoy the convenience of our home delivery service, bringing your favorite dishes right to your doorstep. Simply place your order, and we'll deliver freshly prepared meals straight to you. Relish the authentic taste of our restaurant from the comfort of your home!</p>
                        <Link to="/home_Delivery" className="bg-dark text-white link">Order Here</Link>
                    </div>
                </Col>
                <Col className='right' xl={6} lg={6} md={12} sm={12}>
                    <img src={img4} width="500px"/>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
        
    );
}
export default Restaurant;