import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/actions/userAction';

const RowUser = ({ user }) => {
    // Redux
    const dispatch = useDispatch();

    const handleDeleteUser = (id) => {
        dispatch(deleteUser(id));
    };

    return (
        <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.role === 1 ? 'Admin' : 'User'}</td>
            <td>{user.status === 1 ? 'Active' : 'Unactive'}</td>
            <td>{user.address}</td>
            <td className='icon'>
                <span>
                    <i className='far fa-eye'></i>
                </span>
                <span>
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
