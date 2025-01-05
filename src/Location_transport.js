import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/Logos.css';

import { CiLocationOn } from "react-icons/ci";

function Location_transport(){
    // document.getElementById("btn1").style.borderBottom = "1px solid black";
    const nearby = () => {
        document.getElementById("btn1").style.borderBottom = "5px solid gray";
        document.getElementById("btn2").style.borderBottom = "none";
        document.getElementById("nearby").style.display = "block";
        document.getElementById("stations").style.display = "none";
    }
    const stations = () => {
        document.getElementById("btn1").style.borderBottom = "none";
        document.getElementById("btn2").style.borderBottom = "5px solid gray";
        document.getElementById("nearby").style.display = "none";
        document.getElementById("stations").style.display = "block";
    }

    return (
        <Container className='location_transport py-3 mt-5'>
            <Row><h1 className='text-center heading mb-3'>Routes and Destination</h1></Row>
            <Row>
                <Col xl={6} lg={6} md={12} sm={12}>
                <Container fluid>
                <Row>
                    <Col><button id="btn1" className='p-3' onClick={nearby}>What's nearby</button></Col>
                    <Col><button id="btn2" className='p-3' onClick={stations}>Airport and Stations</button></Col>
                </Row>
                </Container>
                <Container fluid id="nearby">
                    <Row className="nearby">
                        <p className='mt-1'><CiLocationOn className='me-2 ms-2' />abc<span className='me-2'>8 Kilometers</span></p>
                    </Row>
                    <Row className="nearby">
                        <p className='mt-1'><CiLocationOn className='me-2 ms-2' />abc<span className='me-2'>8 Kilometers</span></p>
                    </Row>
                    <Row className="nearby">
                        <p className='mt-1'><CiLocationOn className='me-2 ms-2' />abc<span className='me-2'>8 Kilometers</span></p>
                    </Row>
                    <Row className="nearby">
                        <p className='mt-1'><CiLocationOn className='me-2 ms-2' />abc<span className='me-2'>8 Kilometers</span></p>
                    </Row>
                    <Row className="nearby">
                        <p className='mt-1'><CiLocationOn className='me-2 ms-2' />abc<span className='me-2'>8 Kilometers</span></p>
                    </Row>
                </Container>
                <Container fluid id="stations">
                    <Row className="stations">
                        <p className='mt-1'><CiLocationOn className='me-2 ms-2' />def<span className='me-2'>5 Kilometers</span></p>
                    </Row>
                    <Row className="stations">
                        <p className='mt-1'><CiLocationOn className='me-2 ms-2' />def<span className='me-2'>5 Kilometers</span></p>
                    </Row>
                    <Row className="stations">
                        <p className='mt-1'><CiLocationOn className='me-2 ms-2' />def<span className='me-2'>5 Kilometers</span></p>
                    </Row>
                    <Row className="stations">
                        <p className='mt-1'><CiLocationOn className='me-2 ms-2' />def<span className='me-2'>5 Kilometers</span></p>
                    </Row>
                    <Row className="stations">
                        <p className='mt-1'><CiLocationOn className='me-2 ms-2' />def<span className='me-2'>5 Kilometers</span></p>
                    </Row>
                </Container>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12}>
                    <Container fluid className='map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.9122094865893!2d73.32146547493342!3d27.99658221267643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393fdd7bd90bbb89%3A0x3450e03189c7663d!2sThe%20Park%20Paradise!5e0!3m2!1sen!2sin!4v1734629136504!5m2!1sen!2sin" 
                        allowFullScreen
                        loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                        title="Responsive Google Map"></iframe>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default Location_transport;