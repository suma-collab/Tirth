import React from 'react';
import './caurouselHeading.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CaurouselCompo from '../caurousel'

export const CaurouselHeading = ({CaurouselJson}) => {
    const CaurouselHeadingJson = CaurouselJson.CaurouselHeadingJson
     //console.log("CaurouselHeadingJson",CaurouselHeadingJson.background)
    // const CaurouselHeadingJson ={
    //     "tittle":"Unveiling Sacred Marvels",
    //     "subTiitle":"Featured Destinations",
    //     "description":"Witness the beauty of hand-picked destinations that beckon your heart and soul. From the ethereal hills of the Himalayas to the sacred shores of Rameswaram, every <span>pilgrimage site</span> holds an enchanting story to share. Discover more about these <span>mystical places.</span>"
    // }
    return (
        <div className={CaurouselHeadingJson.background === true ?  'caurouselHeadingMainDiv caurouselHeadingMainDivbg': 'caurouselHeadingMainDiv'}>
            <Row className='mainRow'>
                <Col xs='12' sm='12' md={4} className='headings'>
                    <h4>{CaurouselHeadingJson.subTiitle}</h4>
                    <h3>{CaurouselHeadingJson.tittle}</h3>
                </Col>
                <Col xs='12' sm='12' md={{ span: 4, offset: 4 }}>
                    <p className='description'>{CaurouselHeadingJson.description}</p>
                </Col>
            </Row>
            <CaurouselCompo CaurouselData={CaurouselJson.CaurouselJson}/>
        </div>
    )
}

export default CaurouselHeading;