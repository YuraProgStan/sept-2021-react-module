import {useEffect, useState} from "react";

import {carService} from "../../services/carService";
import Car from "../Car/Car";

const Cars = ({trigger, updateDelCar, setUpdateCar}) => {
    const [cars, setCars] = useState([]);





    useEffect(() => {
        carService.getAll().then(value => setCars([...value]))
    }, [trigger]);



    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} updateDelCar={updateDelCar}  setUpdateCar={setUpdateCar} />)}
        </div>
    );
};

export default Cars;