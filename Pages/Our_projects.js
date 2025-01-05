import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Logos.css';

import Navbarr from '../Navbarr';
import Button from 'react-bootstrap/Button';

import Footer from '../Footer';

function Our_projects(){

    const all = () => {
        alert("all");

        document.getElementById("btn11").style.border = "1px solid black";
        document.getElementById("btn21").style.border = "none";
        document.getElementById("btn31").style.border = "none";
        document.getElementById("btn41").style.border = "none";
        document.getElementById("btn51").style.border = "none";
        document.getElementById("btn61").style.border = "none";
        document.getElementById("btn71").style.border = "none";
    }

    const entrance = () => {
        document.getElementById("entrance").style.display = "block";
        document.getElementById("garden").style.display = "none";
        document.getElementById("hall1").style.display = "none";
        document.getElementById("hall2").style.display = "none";
        document.getElementById("restaurant").style.display = "none";
        document.getElementById("bar").style.display = "none";

        document.getElementById("btn11").style.border = "none";
        document.getElementById("btn21").style.border = "1px solid black";
        document.getElementById("btn31").style.border = "none";
        document.getElementById("btn41").style.border = "none";
        document.getElementById("btn51").style.border = "none";
        document.getElementById("btn61").style.border = "none";
        document.getElementById("btn71").style.border = "none";
    }

    const garden = () => {
        document.getElementById("entrance").style.display = "none";
        document.getElementById("garden").style.display = "block";
        document.getElementById("hall1").style.display = "none";
        document.getElementById("hall2").style.display = "none";
        document.getElementById("restaurant").style.display = "none";
        document.getElementById("bar").style.display = "none";

        document.getElementById("btn11").style.border = "none";
        document.getElementById("btn21").style.border = "none";
        document.getElementById("btn31").style.border = "1px solid black";
        document.getElementById("btn41").style.border = "none";
        document.getElementById("btn51").style.border = "none";
        document.getElementById("btn61").style.border = "none";
        document.getElementById("btn71").style.border = "none";
    }

    const hall1 = () => {
        document.getElementById("entrance").style.display = "none";
        document.getElementById("garden").style.display = "none";
        document.getElementById("hall1").style.display = "block";
        document.getElementById("hall2").style.display = "none";
        document.getElementById("restaurant").style.display = "none";
        document.getElementById("bar").style.display = "none";
    
        document.getElementById("btn11").style.border = "none";
        document.getElementById("btn21").style.border = "none";
        document.getElementById("btn31").style.border = "none";
        document.getElementById("btn41").style.border = "1px solid black";
        document.getElementById("btn51").style.border = "none";
        document.getElementById("btn61").style.border = "none";
        document.getElementById("btn71").style.border = "none";
    }

    const hall2 = () => {
        document.getElementById("entrance").style.display = "none";
        document.getElementById("garden").style.display = "none";
        document.getElementById("hall1").style.display = "none";
        document.getElementById("hall2").style.display = "block";
        document.getElementById("restaurant").style.display = "none";
        document.getElementById("bar").style.display = "none";

        document.getElementById("btn11").style.border = "none";
        document.getElementById("btn21").style.border = "none";
        document.getElementById("btn31").style.border = "none";
        document.getElementById("btn41").style.border = "none";
        document.getElementById("btn51").style.border = "1px solid black";
        document.getElementById("btn61").style.border = "none";
        document.getElementById("btn71").style.border = "none";
    }

    const restaurant = () => {
        document.getElementById("entrance").style.display = "none";
        document.getElementById("garden").style.display = "none";
        document.getElementById("hall1").style.display = "none";
        document.getElementById("hall2").style.display = "none";
        document.getElementById("restaurant").style.display = "block";
        document.getElementById("bar").style.display = "none";

        document.getElementById("btn11").style.border = "none";
        document.getElementById("btn21").style.border = "none";
        document.getElementById("btn31").style.border = "none";
        document.getElementById("btn41").style.border = "none";
        document.getElementById("btn51").style.border = "none";
        document.getElementById("btn61").style.border = "1px solid black";
        document.getElementById("btn71").style.border = "none";
    }

    const bar = () => {
        document.getElementById("entrance").style.display = "none";
        document.getElementById("garden").style.display = "none";
        document.getElementById("hall1").style.display = "none";
        document.getElementById("hall2").style.display = "none";
        document.getElementById("restaurant").style.display = "none";
        document.getElementById("bar").style.display = "block";

        document.getElementById("btn11").style.border = "none";
        document.getElementById("btn21").style.border = "none";
        document.getElementById("btn31").style.border = "none";
        document.getElementById("btn41").style.border = "none";
        document.getElementById("btn51").style.border = "none";
        document.getElementById("btn61").style.border = "none";
        document.getElementById("btn71").style.border = "1px solid black";
    }

    return (
        <>
            <Navbarr />
            <Container>
                <h1 className='heading text-center py-3'>Gallery</h1>
                <Row>
                    <Col className='text-center mb-4 gallery'>
                        <Button variant="outline-dark" onClick={all} className='btn' id="btn11">ALL</Button>
                        <Button variant="outline-dark" onClick={entrance} className='btn' id="btn21">ENTRANCE</Button>
                        <Button variant="outline-dark" onClick={garden} className='btn' id="btn31">GARDEN</Button>
                        <Button variant="outline-dark" onClick={hall1} className='btn' id="btn41">HALL 1</Button>
                        <Button variant="outline-dark" onClick={hall2} className='btn' id="btn51">HALL 2</Button>
                        <Button variant="outline-dark" onClick={restaurant} className='btn' id="btn61">RESTAURANT</Button>
                        <Button variant="outline-dark" onClick={bar} className='btn' id="btn71">BAR</Button>
                    </Col>
                </Row>
            </Container>
            <Container className="projects" id="entrance">
                <Row>
                    <Col xl={6} lg={6} md={6} sm={6} className='main_img'>
                        <img src="https://media.weddingz.in/photologue/images/the-park-paradise-the-park-paradise-others-18.jpg"/>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={6} className="sub_img">
                        <Row>
                            <Col xl={6} lg={6} md={6} sm={6}>
                                <img src="https://media.weddingz.in/photologue/images/the-park-paradise-the-park-paradise-others-18.jpg"/>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={6} className='top'>
                                <img src="https://media.weddingz.in/photologue/images/the-park-paradise-the-park-paradise-others-18.jpg"/>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={6}>
                                <img src="https://media.weddingz.in/photologue/images/the-park-paradise-the-park-paradise-others-18.jpg" className='mt-1'/>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={6} className='bottom'>
                                <img src="https://media.weddingz.in/photologue/images/the-park-paradise-the-park-paradise-others-18.jpg" className='mt-1'/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container className="projects" id="garden">
                <Row>
                    <Col xl={6} lg={6} md={6} sm={6} className='main_img'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQXlxQV7JSxVWWkapUK5KHrArsA3gpu6-wZA&s"/>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={6} className="sub_img">
                        <Row>
                            <Col xl={6} lg={6} md={6} sm={6}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQXlxQV7JSxVWWkapUK5KHrArsA3gpu6-wZA&s"/>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={6} className='top'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQXlxQV7JSxVWWkapUK5KHrArsA3gpu6-wZA&s"/>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={6}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQXlxQV7JSxVWWkapUK5KHrArsA3gpu6-wZA&s" className='mt-1'/>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={6} className='bottom'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQXlxQV7JSxVWWkapUK5KHrArsA3gpu6-wZA&s" className='mt-1'/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container className="projects" id="hall1">
                <Row>
                    <Col xl={6} lg={6} md={6} sm={6} className='main_img'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTZM5EdaSnt5ODze2bXxdM5CjIxWmGLXynA&s"/>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={6} className="sub_img">
                        <Row>
                            <Col xl={6} lg={6} md={6} sm={6}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTZM5EdaSnt5ODze2bXxdM5CjIxWmGLXynA&s"/>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={6} className='top'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTZM5EdaSnt5ODze2bXxdM5CjIxWmGLXynA&s"/>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={6}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTZM5EdaSnt5ODze2bXxdM5CjIxWmGLXynA&s" className='mt-1'/>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={6} className='bottom'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTZM5EdaSnt5ODze2bXxdM5CjIxWmGLXynA&s" className='mt-1'/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container className="projects" id="hall2">
                <Row>
                    <Col xl={6} lg={6} md={6} sm={6} className='main_img'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6BEUkJhSaq637DK7KNZA8gLmz3SvnWqSiMw&s"/>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={6} className="sub_img">
                        <Row>
                            <Col xl={6} lg={6} md={6} sm={6}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6BEUkJhSaq637DK7KNZA8gLmz3SvnWqSiMw&s"/>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={6} className='top'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6BEUkJhSaq637DK7KNZA8gLmz3SvnWqSiMw&s"/>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={6}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6BEUkJhSaq637DK7KNZA8gLmz3SvnWqSiMw&s" className='mt-1'/>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={6} className='bottom'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6BEUkJhSaq637DK7KNZA8gLmz3SvnWqSiMw&s" className='mt-1'/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container className="projects" id="restaurant">
                <Row>
                    <Col xl={6} lg={6} md={6} sm={6} className='main_img'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQIdYbxxLicQ66A_O8X01EBlNJa0euyMBr8g&s"/>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={6} className="sub_img">
                        <Row>
                            <Col xl={6} lg={6} md={6} sm={6}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQIdYbxxLicQ66A_O8X01EBlNJa0euyMBr8g&s"/>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={6} className='top'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQIdYbxxLicQ66A_O8X01EBlNJa0euyMBr8g&s"/>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={6}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQIdYbxxLicQ66A_O8X01EBlNJa0euyMBr8g&s" className='mt-1'/>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={6} className='bottom'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQIdYbxxLicQ66A_O8X01EBlNJa0euyMBr8g&s" className='mt-1'/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container className="projects" id="bar">
                <Row>
                    <Col xl={6} lg={6} md={6} sm={6} className='main_img'>
                        <img src="https://content3.jdmagicbox.com/comp/bikaner/i6/9999px151.x151.130925160707.z7i6/catalogue/the-park-paradise-the-crystal-restro-pub-and-bar-rani-bazar-bikaner-event-organisers-6056d1026j.jpg"/>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={6} className="sub_img">
                        <Row>
                            <Col xl={6} lg={6} md={6} sm={6}>
                                <img src="https://content3.jdmagicbox.com/comp/bikaner/i6/9999px151.x151.130925160707.z7i6/catalogue/the-park-paradise-the-crystal-restro-pub-and-bar-rani-bazar-bikaner-event-organisers-6056d1026j.jpg"/>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={6} className='top'>
                                <img src="https://content3.jdmagicbox.com/comp/bikaner/i6/9999px151.x151.130925160707.z7i6/catalogue/the-park-paradise-the-crystal-restro-pub-and-bar-rani-bazar-bikaner-event-organisers-6056d1026j.jpg"/>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={6}>
                                <img src="https://content3.jdmagicbox.com/comp/bikaner/i6/9999px151.x151.130925160707.z7i6/catalogue/the-park-paradise-the-crystal-restro-pub-and-bar-rani-bazar-bikaner-event-organisers-6056d1026j.jpg" className='mt-1'/>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={6} className='bottom'>
                                <img src="https://content3.jdmagicbox.com/comp/bikaner/i6/9999px151.x151.130925160707.z7i6/catalogue/the-park-paradise-the-crystal-restro-pub-and-bar-rani-bazar-bikaner-event-organisers-6056d1026j.jpg" className='mt-1'/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}
export default Our_projects;