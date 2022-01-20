import CarForm from "../CarForm/CarForm";


const Car = ({car, delById}) => {
    const {id, model, price, year} = car;
    // const [carId, setCarId] = useState([]);
    // console.log('carId = ', carId);
    // const getCarId = async (id) => {
    //    await setCarId(id);
    //     await updateCar(true);
    //     await console.log('carId = ', carId);
    // }
    // useEffect(() => {
    //     carService.getById(carId).then(value => setCarId([...value]))
    // }, [trigger3]);


    return (
        <div>

            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price:  {price}</div>
            <div>year:  {year}</div>

            <button onClick={()=>delById(id)}>Delete</button>
            <CarForm  car={car}    />
            <hr/>
        </div>
    );
};

export default Car;