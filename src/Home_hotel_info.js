import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from './images/service.avif';
import img2 from './images/restaurant_page.jpg'
import './css/Logos.css';

function Home_hotel_info() {
  return (
    <Container fluid>
      <h1 className='mt-5 text-center heading'>Amenities</h1>
      <Row>
        <Col xl={3} lg={3} md={6} sm={6} className='mb-3'>
          <div className="flip-card m-auto">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://media.weddingz.in/photologue/images/the-park-paradise-the-park-paradise-others-11.jpg"/>
                <p className='text-center'>COMPREHENSIVE PARKING SPACE</p>
              </div>
              <div className="flip-card-back">
                <img src="https://media.weddingz.in/photologue/images/the-park-paradise-the-park-paradise-others-11.jpg"/>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={3} lg={3} md={6} sm={6} className='mb-3'>
          <div className="flip-card m-auto">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={img2}/>
                <p className='text-center'>RESTAURANT</p>
              </div>
              <div className="flip-card-back">
                <img src={img2}/>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={3} lg={3} md={6} sm={6} className='mb-3'>
          <div className="flip-card m-auto">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={img}/>
                <p className='text-center'>BAR</p>
              </div>
              <div className="flip-card-back">
                <img src={img}/>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={3} lg={3} md={6} sm={6} className='mb-3'>
          <div className="flip-card m-auto">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://www.ipvanish.com/wp-content/uploads/2023/11/is-hotel-wifi-safe_card.png"/>
                <p className='text-center'>WIFI</p>
              </div>
              <div className="flip-card-back">
                <img src="https://www.ipvanish.com/wp-content/uploads/2023/11/is-hotel-wifi-safe_card.png"/>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home_hotel_info;