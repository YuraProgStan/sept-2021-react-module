import React, {useState} from 'react';
import css from "./Animal.module.css";

const Animal = ({animal}) => {
    const [flag, setFlag] = useState(true);
    return (
        <>
            {animal && flag &&
            <div className={css.wrap}>
                <div>{animal}</div>
                <button onClick={() => setFlag(prev => !prev)}>Delete</button>
            </div>
            }

        </>
    );
};

export default Animal;