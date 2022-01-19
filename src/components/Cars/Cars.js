import {useEffect, useState} from "react";

import {carService} from "../../services/carService";
import Car from "../Car/Car";

const Cars = ({trigger}) => {
    const [cars, setCars] = useState([]);
    const id = getId;
    const delById = async (id) => {
        try {
            await carService.deleteById(id);

        }catch (error){

        }
    }
    useEffect(() => {
        carService.getAll().then(value => setCars([...value]))
    }, [trigger]);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} delete={delById} getId = {getId} />)}
        </div>
    );
};

export default Cars;