import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Item from '../Item/Item';

const Show = props => {
    const { text } = props;
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${text}`)
            .then(res => res.json())
            .then(result => setData(result))
    }, [text]);
    console.log(data);
    return (
        <div className='container mt-4'>
            {
                data.meals?.length ? <Row xs={1} md={4} className="g-4">
                    {
                        data.meals?.map(meal => <Item key={meal.idMeal} data={meal}></Item>)
                    }
                </Row> : <div className="d-flex justify-content-center align-items-center"><Spinner animation="border" /></div>
            }
        </div>
    );
};

export default Show;