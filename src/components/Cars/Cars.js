import {useEffect, useState} from "react";

import {carService} from "../../services/carService";
import Car from "../Car/Car";

const Cars = ({trigger, trigger2, updateDelCar, trigger3, updateCarId}) => {
    const [cars, setCars] = useState([]);


     const delById = async (id) => {
      await  carService.deleteById(id);
        // cars.filter(car => car.id !== id);
      await  updateDelCar(true);
    }


    useEffect(() => {
        carService.getAll().then(value => setCars([...value]))
    }, [trigger, trigger2, trigger3]);



    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} delById={delById} trigger3={trigger3} updateCarId={updateCarId} />)}
        </div>
    );
};

export default Cars;