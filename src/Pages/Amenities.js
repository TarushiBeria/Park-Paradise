import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Logos.css';

import { MdLocalDining } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { FaRegSmile } from "react-icons/fa";

function Amenities(){
    return(
        <Container className='text-center amenitiess mt-5'>
            <h2 className='mb-3 heading'>Our Amenities</h2>
            <Row>
                <Col xl={4} lg={4} md={12} sm={12}>
                    <h5><span><MdLocalDining className='me-2'/><b>Dining</b></span></h5>
                    <p>On-Site Restaurant</p>
                    <p>Room Service</p>
                </Col>
                <Col xl={4} lg={4} md={12} sm={12}>
                    <h5><span><IoPeopleSharp className='me-2'/><b>Guest services</b></span></h5>
                    <p>Concierge</p>
                </Col>
                <Col xl={4} lg={4} md={12} sm={12}>
                    <h5><span><FaRegSmile className='me-2'/><b>Conveniences</b></span></h5>
                    <p>Free parking</p>
                </Col>
            </Row>
        </Container>
    );
}
export default Amenities;