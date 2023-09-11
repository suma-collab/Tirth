import React from 'react';
import './plannerSection.css';
import Button from 'react-bootstrap/Button';

const PlannerSection =()=>{
    return(
        <div className='plannerSectionMainDiv'>
            <h4>Search and Discover</h4>
            <h2>Plan Your Tirth Yatra</h2>
            <p>Enter your preferred pilgrimage destination or embark on an exploratory voyage through our interactive map. Unveil the hidden gems of every region, from the tranquil ghats of Varanasi to the majestic temples of South India. Begin your spiritual exploration today.</p>
            <Button> Login To Plan For Free 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
            <path d="M14.2659 6.37608C16.3268 7.51835 16.3268 10.4817 14.2659 11.6239L4.70433 16.9235C2.70479 18.0317 0.250001 16.5857 0.250001 14.2996L0.250002 3.70045C0.250002 1.41432 2.70478 -0.0317278 4.70432 1.07653L14.2659 6.37608Z" fill="white"/>
            </svg>
            </Button>
        </div>
    )
}
export default PlannerSection;