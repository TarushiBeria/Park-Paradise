import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import restaurant from './images/restaurant.jpg';
import './css/Logos.css';

import img from './images/service.avif';
import marriage_hall from './images/main.jpg'

function Places(){
    return(
        <>
            <h1 className='mt-5 text-center heading'>Our Services</h1>
            <Container className='mt-3'>
                <Row>
                    <Col className='right' xl={6} lg={6} md={12} sm={12}>
                        <img src={restaurant} width="500px"/>
                    </Col>
                    <Col className='left' xl={6} lg={6} md={12} sm={12}>
                        <div className='px-5 mt-5'>
                            <h4 className="subhead">The Restaurant</h4>
                            <p>Welcome to our restaurant, where every dish tells a story of rich traditions and bold flavors. Indulge in a variety of authentic curries, tandoori specialties, and aromatic biryanis, crafted with the finest spices. Experience the perfect blend of warmth, hospitality, and unforgettable taste with every bite.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='left' xl={6} lg={6} md={12} sm={12}>
                        <div className='px-5 mt-5'>
                            <h4 className="subhead">The Pub</h4>
                            <p>Welcome to our pub, the perfect spot to unwind with friends and enjoy a lively atmosphere. From a wide range of craft beers and signature cocktails to mouthwatering pub classics, we have something for every taste. Our friendly staff ensures that every visit is filled with great service and good vibes. Whether you're here for a casual drink or a night out, our pub offers the ideal setting for both. Come for the drinks, stay for the experience, and make lasting memories with us!</p>
                        </div>
                    </Col>
                    <Col className='right' xl={6} lg={6} md={12} sm={12}>
                        <img src={img} width="500px"/>
                    </Col>
                </Row>
                <Row>
                    <Col className='right' xl={6} lg={6} md={12} sm={12}>
                        <img src={marriage_hall} width="500px"/>
                    </Col>
                    <Col className='left' xl={6} lg={6} md={12} sm={12}>
                        <div className='px-5 mt-5'>
                            <h4 className="subhead">The Celebration halls</h4>
                            <p>Welcome to our two stunning marriage halls, where elegance and tradition meet for your perfect celebration. Each hall offers a spacious, beautifully decorated setting, ideal for weddings, receptions, and other special events. With exceptional service and attention to detail, we ensure your big day is nothing short of magical.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='left' xl={6} lg={6} md={12} sm={12}>
                        <div className='px-5 mt-5'>
                            <h4 className="subhead">The Lawn</h4>
                            <p>Welcome to our beautiful lawn, the perfect setting for outdoor events and gatherings. Surrounded by lush greenery and a serene atmosphere, it’s ideal for weddings, parties, and celebrations. Experience the charm of nature with impeccable service, making every moment unforgettable.</p>
                        </div>
                    </Col>
                    <Col className='right' xl={6} lg={6} md={12} sm={12}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQXlxQV7JSxVWWkapUK5KHrArsA3gpu6-wZA&s" width="500px"/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Places;