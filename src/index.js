import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import HeroSection from './components/heroSection';
import WhereToGo from './components/whereToGo';
import PlannerSection from './components/plannerSection';
import CaurouselHeading from './components/caurouselHeading';
import PlanandAboutSection from './components/planAndAboutSection';
//import CaurouselCompo from './components/caurousel';
//import CaurouselHeading from'./components/caurouselHeading';
// import cards from './mock.json'
const PlanandAboutSectionJson ={
  "CaurouselHeadingJson" :{
      "tittle":"Tailored for the Soul",
      "subTiitle":"Plan Your Journey",
      "description":"Your pilgrimage, your way. Create a personalized itinerary to embark on your divine journey. Select your destination, travel dates, and accommodation preferences. With Tirth's expert guidance, your sacred voyage awaits.",
      "buttonText":"Request call back from tirth expert"
  },
  "image" :"./images/man.png"
}

const PlanandAboutSection2Json ={
  "CaurouselHeadingJson" :{
      "tittle":"Serving the Spiritually Seekers",
      "subTiitle":"About Tirth",
      "description":"Tirth was born from the devotion of pilgrims seeking to simplify Tirth yatras. Our unwavering mission is to enable your spiritual quest with seamless travel planning and cherished experiences. Allow us to be your faithful guide on this sacred path.",
      "buttonText":"Read More"
  },
  "image" :"./images/ManTemple.png"
}

const CaurouselJsonDestination ={
  "CaurouselHeadingJson" : {
    "background":false,
    "tittle":"Unveiling Sacred Marvels",
    "subTiitle":"Featured Destinations",
    "description":"Witness the beauty of hand-picked destinations that beckon your heart and soul. From the ethereal hills of the Himalayas to the sacred shores of Rameswaram, every <span>pilgrimage site</span> holds an enchanting story to share. Discover more about these <span>mystical places.</span>"
  },
  "CaurouselJson":[
    {
    "tittle":"Shree Somanath Jyothirlinga Temple",
    "loction":"Veraval",
    "BGimage":"../../../public//images//carousel/stories3.png"
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
   }
]
}

const CaurouselJsonBlogs ={
  "CaurouselHeadingJson" : {
    "background":true,
    "tittle":"Embark on Divine Narratives",
    "subTiitle":"Pilgrim's Blog",
    "description":"Join seasoned travelers and spiritual enthusiasts as they unfold their transformative journeys in our Pilgrim's Blog. Immerse yourself in their captivating stories, find travel tips, and be inspired by the magic of their Tirth yatras. Experience the divine through their eyes."
  },
  "CaurouselJson":{
    "tittle":"Shree Somanath Jyothirlinga Temple",
    "loction":"Veraval"
  }
}

const CaurouselJsonStories ={
  "CaurouselHeadingJson" : {
    "background":false,
    "tittle":"Embracing Legends and Lore",
    "subTiitle":"Sacred Stories",
    "description":"Delve into the ancient myths and legends that breathe life into India's revered pilgrimage sites. Experience the mystical tales of devotion, love, and courage that echo through the ages. Let these sacred stories enrich your understanding of our spiritual heritage."
  },
  "CaurouselJson":{
    "tittle":"Shree Somanath Jyothirlinga Temple",
    "loction":"Veraval"
  }
}

const CaurouselJsonAccomi ={
  "CaurouselHeadingJson" : {
    "background":true,
    "tittle":"Tranquil Abodes,Heavenly Experiences",
    "subTiitle":"Divine Accommodations",
    "description":"Find serenity in our carefully chosen accommodations. From the welcoming embrace of Dharamshalas to the peaceful ambiance of ashrams, each stay is a sacred sanctuary. Experience divine hospitality and create lasting memories."
  },
  "CaurouselJson":{
    "tittle":"Shree Somanath Jyothirlinga Temple",
    "loction":"Veraval"
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Container fluid>
      <HeroSection/>
      <WhereToGo/>
      <PlannerSection/>
    <CaurouselHeading CaurouselJson={CaurouselJsonDestination}/>
    <CaurouselHeading CaurouselJson={CaurouselJsonBlogs}/>
    <CaurouselHeading CaurouselJson={CaurouselJsonStories}/>
    <PlanandAboutSection PlanandAboutSection={PlanandAboutSectionJson}/>
    <CaurouselHeading CaurouselJson={CaurouselJsonAccomi}/>
    <PlanandAboutSection PlanandAboutSection={PlanandAboutSection2Json}/>
    {/* <CaurouselCompo/> */}
    {/* <App/> */}
    </Container>
    
  </React.StrictMode>
);
reportWebVitals();
