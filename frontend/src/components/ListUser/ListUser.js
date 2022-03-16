import React, { useState, useEffect } from 'react';
import ModalForm from '../modal/ModalForm';
import './listUser.css';
import { useDispatch, useSelector } from 'react-redux';
import RowUser from '../RowUser/RowUser';
import userActions from '../../redux/actions/userAction';

const ListUser = () => {
    const listUser = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [userEdit, setUserEdit] = useState({});

    // Effect
    useEffect(() => {
        dispatch(userActions.getUser());
    }, [dispatch]);

    const onEditUser = (user) => {
        setUserEdit(user);
    };

    return (
        <>
            <div className='table-container'>
                <div className='table-wrap'>
                    <h1 className='title mb-4'>List User</h1>
                    <ModalForm userEdit={userEdit} />
                    <table className='table-user'>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Username</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listUser?.data?.map((user, index) => {
                                return (
                                    <RowUser
                                        key={index}
                                        index={index}
                                        user={user}
                                        onEditUser={onEditUser}
                                    />
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ListUser;
