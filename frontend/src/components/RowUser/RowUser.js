import React from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../../redux/actions/userAction';

const RowUser = ({ user, index, onEditUser }) => {
    // Redux
    const dispatch = useDispatch();

    const handleUpdateUser = (user) => {
        onEditUser(user);
    };

    const handleDeleteUser = (id) => {
        dispatch(userActions.deleteUser(id));
    };

    return (
        <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.username}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.role === 1 ? 'Admin' : 'User'}</td>
            <td>{user.status === 0 ? 'Active' : 'Unactive'}</td>
            <td>{user.address}</td>
            <td className='icon'>
                <span>
                    <i className='far fa-eye'></i>
                </span>
                <span onClick={() => handleUpdateUser(user)}>
                    <i className='fas fa-edit'></i>
                </span>
                <span onClick={() => handleDeleteUser(user.id)}>
                    <i className='far fa-trash-alt'></i>
                </span>
            </td>
        </tr>
    );
};

export default RowUser;
