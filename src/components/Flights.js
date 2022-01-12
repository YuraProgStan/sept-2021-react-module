import React, {useEffect, useState} from 'react';
import Flight from "./Flight";

const Flights = () => {
    let [flights, setFlights ] = useState([]);
    useEffect(() => {
            fetch('https://api.spacexdata.com/v3/launches/')
                .then(response => response.json())
                .then(arrayFlights => {
                    setFlights(arrayFlights.filter(item => item.launch_year!=='2020' ))
                })
        },
        []);
    return (
        <div className='flights'>
            {flights.map(value => <Flight key={value.flight_number} item = {value}/>)}
        </div>
    );
};

export default Flights;