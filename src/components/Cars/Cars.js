import {useEffect, useState} from "react";

import {carService} from "../../services/carService";
import Car from "../Car/Car";

const Cars = ({trigger, trigger2, updateDelCar}) => {
    const [cars, setCars] = useState([]);
    // const [updateCar, setUpdateCar] = useState(false);

     const delById = async (id) => {
      await  carService.deleteById(id);
        // cars.filter(car => car.id !== id);
      await  updateDelCar(true);
    }


    useEffect(() => {
        carService.getAll().then(value => setCars([...value]))
    }, [trigger, trigger2]);

    // useEffect(() => {
    //     carService.getAll().then(value => setCars([...value]))
    // },[cars]);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} delById={delById}   />)}
        </div>
    );
};

export default Cars;