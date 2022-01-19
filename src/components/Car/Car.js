import {carService} from "../../services/carService";

const Car = ({car}) => {
    const {id, model, price, year} = car;
    const delById =  (id) => {
      carService.deleteById(id).then(res =>console.log(res.data));
    }
    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={delById}>Delete</button>
            <hr/>
        </div>
    );
};

export default Car;