import React from 'react';
import { Card } from 'react-bootstrap';

const Item = props => {
    const { strMeal, strMealThumb } = props.data;
    return (
        <Card>
            <Card.Img variant="top" src={strMealThumb} />
            <Card.Body>
                <Card.Title>{strMeal}</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
            <button className='btn btn-warning'>learn more</button>
        </Card>
    );
};

export default Item;