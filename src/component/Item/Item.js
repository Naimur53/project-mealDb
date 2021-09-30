import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Item = props => {
    const { strMeal, strMealThumb, idMeal } = props.data;
    console.log(idMeal);
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
            <NavLink to={`/show/${idMeal}`}>
                <button className='btn btn-warning'>learn more</button>
            </NavLink>
        </Card>
    );
};

export default Item;