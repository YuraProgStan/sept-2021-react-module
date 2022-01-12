import React from 'react';

const Comment = (props) => {

    let {postId, id, name, email, body}=props;
    return (
        <div>
            {postId} -- {id} -- {name} -- {email} -- {body}
        </div>
    );
};

export default Comment;