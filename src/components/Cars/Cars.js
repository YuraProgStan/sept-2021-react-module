import {useEffect, useState} from "react";

import {carService} from "../../services/carService";
import Car from "../Car/Car";

const Cars = ({trigger}) => {
    const [cars, setCars] = useState([]);
    const delById =  (id) => {
        carService.deleteById(id);
    }


    useEffect(() => {
        carService.getAll().then(value => setCars([...value]))
    }, [trigger, delById]);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} delById={delById} />)}
        </div>
    );
};

export default Cars;