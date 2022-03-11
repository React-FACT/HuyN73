import React, { useState, useEffect } from 'react';
import ModalForm from '../modal/ModalForm';
import './listUser.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/actions/userAction';
import RowUser from '../RowUser/RowUser';

const ListUser = () => {
    const listUser = useSelector((state) => state.user);
    const dispatch = useDispatch();

    // Effect
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <>
            <div className='table-container'>
                <div className='table-wrap'>
                    <h1 className='title mb-4'>List User</h1>
                    <ModalForm />
                    <table className='table-user'>
                        <thead>
                            <tr>
                                <th>ID</th>
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
                            {listUser.map((user, index) => {
                                return <RowUser key={index} user={user} />;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ListUser;
