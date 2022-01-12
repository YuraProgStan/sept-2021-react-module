import React from 'react';

const User = (props) => {

    let {id, name, username}=props;
    return (
        <div>
            {id} -- {name}-- {username}
        </div>
    );
};

export default User;