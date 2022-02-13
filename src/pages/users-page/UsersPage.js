import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchUsers} from '../../redux/users.actionCreator';

export function UsersPage() {

    let {users, isUsersLoading} = useSelector(state => state.usersReducer);

    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);
    return (
        <div>
            {
                isUsersLoading && <h3 style={{color: 'red'}}>Loading ...</h3>
            }

        </div>
    );
}