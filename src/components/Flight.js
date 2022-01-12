import React from 'react';
const Flight = ({item:{mission_name, launch_year, links:{mission_patch_small}}}) => {

    return (
        <div className='flight'>
            {mission_name} -- {launch_year}
            <img src={mission_patch_small} alt={mission_name} />
        </div>
    );
};

export default Flight;