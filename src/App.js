import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";
import {useState} from "react";

function App() {
    const [car, setCar] = useState(null);
    const [delCar, setDelCar] = useState(false);
    const [updateCar, setUpdateCar] = useState(false);



    // const update = data =>{
    //     setCar(data)
    // }
    return (
        <>
            <Form update={setCar}/>
            <Cars trigger={car} trigger2 = {delCar} updateDelCar = {setDelCar} trigger3 = {updateCar} updateCarId = {setUpdateCar}   />
        </>
    );
}

export default App;
