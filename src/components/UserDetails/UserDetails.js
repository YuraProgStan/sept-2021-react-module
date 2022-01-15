const UserDetails = ({user, getUserId}) => {
    const {id, name, username, email} = user;

    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <button onClick={() => getUserId(id)}>Posts</button>
        </div>
    );
};

export default UserDetails;