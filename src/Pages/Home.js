import Logos from '../Logos';
import Slideshow from '../Slideshow';
import Accordion from '../Home_hotel_info';
import Location_transport from '../Location_transport';
import Places from '../Places';
import About from '../About';
import Footer from '../Footer';
import { Container } from 'react-bootstrap';
import Navbar from '../Home_navbar';

function Home(){
    return (
        <>
            {/* <Logos /> */}
            <Navbar/>
            <Slideshow />
            <About />
            <Accordion />
            <Places />
            <Location_transport />
            <Footer />
            <Logos /> 
        </>
    );
}
export default Home;