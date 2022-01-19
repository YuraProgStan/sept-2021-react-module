const Car = ({car, delete, getId}) => {
    const {id, model, price, year} = car;
    getId = id;
    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={delete}>Delete</button>
            <hr/>
        </div>
    );
};

export default Car;