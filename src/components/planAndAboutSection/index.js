import React from 'react';
import './plan.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const PlanandAboutSection = ({PlanandAboutSection}) => {
    
    return (
        <div className='planandAboutSectionMainDiv'>
            <Row className='mainRow'>
                <Col xs='12' sm='12' md='6' className='headings'>
                    <h4>{PlanandAboutSection.CaurouselHeadingJson.subTiitle}</h4>
                    <h3>{PlanandAboutSection.CaurouselHeadingJson.tittle}</h3>
                    <p className='aboutDescription'>{PlanandAboutSection.CaurouselHeadingJson.description}</p>
                    <Button> 
                        {PlanandAboutSection.CaurouselHeadingJson.buttonText} 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                        <path d="M14.2659 6.37608C16.3268 7.51835 16.3268 10.4817 14.2659 11.6239L4.70433 16.9235C2.70479 18.0317 0.250001 16.5857 0.250001 14.2996L0.250002 3.70045C0.250002 1.41432 2.70478 -0.0317278 4.70432 1.07653L14.2659 6.37608Z" fill="white"/>
                        </svg>
                    </Button>
                </Col>
                <Col xs='12' sm='12' md='6' className='imageDiv'>
                    <img src={PlanandAboutSection.image} alt="man"/>
                </Col>
            </Row>
        </div>
    )
}

export default PlanandAboutSection;