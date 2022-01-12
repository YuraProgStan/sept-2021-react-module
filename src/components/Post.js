import React from 'react';

const User = (props) => {

    let {userId, id, title, body}=props;
    return (
        <div>
            {userId} -- {id} -- {title} -- {body}
        </div>
    );
};

export default User;