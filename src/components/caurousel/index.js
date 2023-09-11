import React from 'react';
import './caurousel.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TirthButton from '../button/index';

export const CaurouselCompo = ({CaurouselData}) => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      const Data = [
        {
        "tittle":"Shree Somanath Jyothirlinga Temple",
        "loction":"Veraval"
       },
       {
        "tittle":"Shree Somanath Jyothirlinga Temple",
        "loction":"Veraval"
       },
       {
        "tittle":"Shree Somanath Jyothirlinga Temple",
        "loction":"Veraval"
       },
       {
        "tittle":"Shree Somanath Jyothirlinga Temple",
        "loction":"Veraval"
       }]
      //const CaurouselJson = CaurouselJson
      console.log("venu",CaurouselData)
    return (
            <div>
              <Slider {...settings}>
                    {Data.map((ele,index)=>{
                      return <div className='carouselDiv' key={index}>
                         <div className='carouselSubDiv'>
                           <h3>{ele.tittle}</h3>
                           <p>{ele.loction}</p>
                           </div>
                         </div>
                    })}
              </Slider>
              <div className='buttonCompo'>
                <TirthButton/>
              </div>
            </div>
    )}


export default CaurouselCompo;