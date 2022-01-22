import {createContext, useState} from "react";

export  const Context = createContext(null);

const ContextProvider = ({children}) => {
    const [image, setImage] = useState(null);

    const value = {image, setImage}
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
