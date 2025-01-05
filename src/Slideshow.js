import Carousel from 'react-bootstrap/Carousel';
import './css/Logos.css';

import { FaAnglesDown } from "react-icons/fa6";

function Slideshow() {
  return (
    <Carousel data-bs-theme="dark" className='carousell'>
      <Carousel.Item id="slidshow_img1" className='slide_show'>
        <Carousel.Caption className='text-white slide_write'>
          <h1 className='slide_heading'>WELCOME TO THE PARK PARADISE</h1>
          <h5 className='slide_subheading'>A LUXURY STAY</h5>
          <FaAnglesDown className='icn mt-5'/>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item id="slidshow_img2" className='slide_show'>
        <Carousel.Caption className='text-white slide_write'>
        <h1 className='slide_heading'>WELCOME TO THE PARK PARADISE</h1>
        <h5 className='slide_subheading'>GRAND CELEBRATION</h5>
        <FaAnglesDown className='icn mt-5'/>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item id="slidshow_img3" className='slide_show'>
        <Carousel.Caption className='text-white slide_write'>
        <h1 className='slide_heading'>WELCOME TO THE PARK PARADISE</h1>
        <h5 className='slide_subheading'>DINING</h5>
        <FaAnglesDown className='icn mt-5'/>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slideshow;