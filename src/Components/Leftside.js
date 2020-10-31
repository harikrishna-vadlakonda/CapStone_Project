import React from 'react';
   import {Form, Button} from 'react-bootstrap';

const LeftSide = () => {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            
            <Form style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>
                
                <Form.Group >
                    <Form.Label><h2>Enter Phone</h2></Form.Label>
                                    <Form.Control style={{width:"30%"}} type="Phone" placeholder="Enter your Phone" />
                </Form.Group>
                
                <Form.Group >
                    <Form.Label><h2>Enter your password</h2></Form.Label>
                    <Form.Control style={{width:"30%"}}  type="password" placeholder="Enter your password" />
                </Form.Group>
                <br/>
                <Button style={{width:"10%"}} type="submit">Submit </Button>
            </Form>
        </div>
    )
}

export default LeftSide;