import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";
import {useState} from "react";
import './App.css'

function App() {
    const [car, setCar] = useState(null);
    const [updateCar, setUpdateCar] = useState({});



    // const update = data =>{
    //     setCar(data)
    // }
    return (
        <div className={'container'}>
            <Form update={setCar} updateCar= {updateCar}/>
            <Cars trigger={car}  updateDelCar = {setCar}   setUpdateCar = {setUpdateCar}   />
        </div>
    );
}

export default App;
