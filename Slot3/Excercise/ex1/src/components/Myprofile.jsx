import React from 'react';
import { Card } from 'react-bootstrap';
function Myprofile({person}) {
    return (
        <Card style={{width: '250px', textAlign: 'center'}}>
            <Card.Img variant="top" src={person.avatar} />
            <Card.Body>
                <Card.Title>{person.name}</Card.Title>
                <Card.Text>
                    ID: {person.id}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
export default Myprofile;