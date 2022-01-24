import CarForm from "../CarForm/CarForm";
import {carService} from "../../services/carService";


const Car = ({car, updateDelCar, setUpdateCar}) => {
    const {id, model, price, year} = car;

    const delById = async (id) => {
        await carService.deleteById(id);
        // cars.filter(car => car.id !== id);
        updateDelCar({});
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setUpdateCar(car)}>Update</button>
            <button onClick={() => delById(id)}>Delete</button>
            {/*<CarForm car={car} updateCarId={updateCarId}/>*/}
            <hr/>
        </div>
    );
};

export default Car;