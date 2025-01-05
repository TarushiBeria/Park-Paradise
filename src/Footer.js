import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import "./css/Logos.css";

import { FaLocationDot } from "react-icons/fa6";

function Footer(){
    return (
        <div className='bg-dark text-white footer'>
        <Container className='mt-5 py-5'>
            <Row>
                <Col>
                    <p className='text-center'> 
                        <Link className='Link' to="/">Home</Link>
                        <Link className='Link' to="/stay">Stay</Link>
                        <Link className='Link' to="/restaurant">Restaurant</Link>
                        <Link className='Link' to="/refresh">Refresh</Link>
                        <Link className='Link' to="/event_celebration">Celebration</Link>
                        <Link className='Link' to="/our_projects">Gallery</Link>
                    </p>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col xl={6} lg={6} md={12} sm={12}>
                    <p className='text-end m-2'>Write Us At <a href="mailto:tarushi.beria183@nmims.edu.in">Send Mail</a></p>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12}>
                    <p className='text-start m-2'>Contact Us At <a href="tel:+1234567890">+911234567890</a></p>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col xl={12} lg={12} md={12} sm={12}>
                    <p className='m-2 text-center'><FaLocationDot /> 25-26, Road No. 4,, The park paradise Hotel, Rani Bazar Industrial Area,, Bikaner, Rajasthan 334001</p>
                </Col>
            </Row>
        </Container>
        </div>
    );
}
export default Footer;