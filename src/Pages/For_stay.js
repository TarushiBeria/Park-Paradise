import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { FaParking } from "react-icons/fa";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import { MdOutlineSmokeFree } from "react-icons/md";
import { MdFreeBreakfast } from "react-icons/md";
import { MdOutlinePets } from "react-icons/md";

function For_stay(){
    return (
        <Container fluid className='hotel_infoo py-3 mt-4 mb-4'>
            <Container>
                <Row>
                    <Col><h3 className='my-2 heading'>Hotel Information</h3></Col>
                    <Col className='d-flex flex-row-reverse bd-highlight'><Button variant="outline-dark" className="btn"><b>Find a Room</b></Button></Col>
                </Row>
                <Row>
                    <Col className='my-4'><p>Check-in <b>2 pm</b> -> Check-out <b>12pm</b></p></Col>
                    <Col className='d-flex flex-row-reverse bd-highlight'></Col>
                </Row>
                <Row></Row>
                <Row className='d-flex justify-content-evenly'>
                    <Col xl={4} lg={4} md={12} sm={12}>
                        <div className='box py-4'>
                            <h4 className='mb-2 mt-1 heading'><FaParking /> Parking</h4>
                            <p className='mb-1'><b>Self-Parking: </b>Complimentary</p>
                            <p className='mb-1'><b>Valet-Parking: </b>Complimentary</p>
                            <p className='mb-1'><b>EV Charging: </b>Not available</p>
                            <p className='mb-1'><b>Secured: </b>Not available</p>
                            <p className='mb-1'><b>Covered: </b>Not available</p>
                            <p className='mb-1'><b>In-out privileges: </b>Not available</p>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={12} sm={12} className='d-flex justify-content-center'>
                        <div className='box py-4'>
                            <h4 className='mb-2 mt-1 heading'><MdOutlineEmojiTransportation /> Airport Shuttle</h4>
                            <p className='mb-1'><b>Jodhpur, India: </b>Not available</p>
                            <p className='mb-1'><b>Jaipur, India: </b>Not available</p>
                            <p className='mb-1'><b>Delhi, India: </b>Not available</p>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={12} sm={12} className='d-flex flex-row-reverse bd-highlight'>
                        <div className='box py-4'>
                            <h4 className='mb-2 mt-1 heading'><MdOutlineSmokeFree /> Smoke-free</h4>
                            <p className='mb-1'><b>Smoking rooms available: </b>No</p>
                            <p className='mb-1'><b>Smoking policy: </b>Contact hotel for more info.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-2 d-flex justify-content-evenly">
                    <Col xl={6} lg={6} md={12} sm={12}>
                        <div className='box py-4'>
                            <h4 className='mb-2 mt-1 heading'><MdFreeBreakfast /> Breakfast</h4>
                            <p className='mb-1'>Available for free</p>
                            <p className='mb-1'><b>Type: </b>Buffet</p>
                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12} className='d-flex flex-row-reverse bd-highlight'>
                        <div className='box py-4'>
                            <h4 className='mb-2 mt-1 heading'><MdOutlinePets /> Pets</h4>
                            <p className='mb-1'><b>Non-refundable fee: </b>₹1,518.00</p>
                            <p className='mb-1'><b>Pet policy: </b>Pet charges at INR1500 plus 18pct taxes per day inclusive of pet food</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default For_stay;