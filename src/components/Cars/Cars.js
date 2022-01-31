import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import {getAllCars} from "../../store";

const Cars = () => {
   const {cars, status, error, form} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();
   useEffect(() => {
    if(form.length===0){
           dispatch(getAllCars());
    }
   }, [])

    return (
        <div>
            {status ==='pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {cars.map(car =><Car key = {car.id} car = {car}  />)}
        </div>
    );
};

export {Cars};