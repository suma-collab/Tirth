import React from 'react';
import './herosection.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Categories from '../categories'


export const HeroSection = () => {

    return (
        <Row className='mainRow'>
            <Col xs='12' sm='12' md='12' ld='12' className='mainHeadingDiv'>
                <h1 className='mainHeading'>Where <span>Spirituality</span></h1>
                <h1 className='mainHeading'>Meets <span>Serenity</span></h1>
            </Col>
            <Col xs='12' sm='12' md='12' ld='12' className='description mainHeadingDiv'>
                <p>Journey to the soul-stirring landscapes of India's divine pilgrimage destinations.</p>
                <p> Discover the sacred path that leads to profound spirituality and serenity.</p>
                <p>Welcome to Tirth, your guiding light on an awe-inspiring Tirth yatra.</p>
            </Col>
            <Col xs='12' sm='12' md='12' ld='12' className='categories'>
              <Categories/>
            </Col>
            
        </Row>
    )
}

export default HeroSection;