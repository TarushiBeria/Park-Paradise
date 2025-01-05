import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from './images/main.avif';
import img2 from './images/main.jpg';
import './css/Logos.css';
import { FaPhoneVolume } from "react-icons/fa6";

function About(){
    return(
        <Container fluid className='main_container pt-5 pb-5'>
            <Container className="about">
                <Row>
                    <Col xl={6} lg={6} md={12} sm={12}>
                        <p className="Name">THE PARK PARADISE</p>
                        <h2 className="head">Enjoy a Luxury Experience</h2>
                        <p>
                        Experience unparalleled luxury at Park Paradise Hotel Bikaner, where every moment is designed for your comfort. Nestled in a serene setting, the hotel offers lavish rooms, exquisite dining options, and top-tier amenities. Enjoy a blend of modern elegance and traditional charm, with personalized service that ensures a memorable stay.<br /> Whether you’re here for business or leisure, our spacious facilities and tranquil surroundings promise a relaxing escape. Treat yourself to an unforgettable experience at Park Paradise Hotel Bikaner, where luxury and hospitality meet.</p>

                        <Row className="mb-3">
                        <Col xl={1} lg={1} md={1} sm={1} className='me-5 mt-2'>
                            <FaPhoneVolume className='phone'/>
                        </Col>
                        <Col>
                            <span className='text-secondary'>Reservation</span><br />
                            <span>+91 1234567890</span>
                        </Col>
                        </Row>
                        
                    </Col>
                    <Col xl={6} lg={6} md={0} sm={0}>
                        <Row>
                            <Col><div id='about_img1'><img src={img1} width="300px" height="400px" id="img1"/></div></Col>
                            <Col><div id="about_img2"><img src={img2} width="300px" height="400px"/></div></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default About;