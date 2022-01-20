import CarForm from "../CarForm/CarForm";


const Car = ({car, delById,updateCarId}) => {
    const {id, model, price, year} = car;



    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price:  {price}</div>
            <div>year:  {year}</div>

            <button onClick={()=>delById(id)}>Delete</button>
            <CarForm   car={car} updateCarId={updateCarId}  />
            <hr/>
        </div>
    );
};

export default Car;