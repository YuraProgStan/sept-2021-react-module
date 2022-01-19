import {useEffect, useState} from "react";

import {carService} from "../../services/carService";
import Car from "../Car/Car";

const Cars = ({trigger}) => {
    const [cars, setCars] = useState([]);
    const delById =  (id) => {
        carService.deleteById(id);
        cars.filter(car => car.id !== id)
    }


    useEffect(() => {
        carService.getAll().then(value => setCars([...value]))
    }, [trigger]);
    useEffect(() => {
        carService.getAll().then(value => setCars([...value]))
    },[cars]);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} delById={delById} />)}
        </div>
    );
};

export default Cars;