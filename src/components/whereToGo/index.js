import React from 'react';
import './wheretogo.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const WhereToGo = ()=>{
    return(
        <div className='whereToGoMainDiv'>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><img src='./images//Search.png'/></InputGroup.Text>
                <Form.Control
                placeholder="Where to go?"
                aria-label="Wheretogo"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
        </div>
    )
}

export default WhereToGo