import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { idMeal } = useParams();
    console.log(idMeal);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
            .then(res => res.json())
            .then(result => setData(result));
    }, [idMeal]);
    console.log(data);
    const { strMeal, strMealThumb } = data.meals ? data.meals[0] : '';
    return (
        <div>
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
        </div>
    );
};

export default Details;