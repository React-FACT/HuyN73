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
    const [show, setShow] = useState(false);

    // Effect
    useEffect(() => {
        dispatch(userActions.getUser());
    }, [dispatch]);

    const onShowAddUser = () => {
        setUserEdit(null);
        setShow(true);
    };

    const onHide = () => {
        setShow(false);
    };

    const onEditUser = (user) => {
        setUserEdit(user);
        setShow(true);
    };

    return (
        <>
            <div className='table-container'>
                <div className='table-wrap'>
                    <h1 className='title mb-4'>List User</h1>
                    <button
                        type='button'
                        className='btn-custom btn-add-user'
                        onClick={() => onShowAddUser()}
                    >
                        Add User
                    </button>
                    <ModalForm
                        userEdit={userEdit}
                        show={show}
                        onHide={onHide}
                    />
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
                                        key={user.id}
                                        user={user}
                                        index={index}
                                        onEditUser={onEditUser}
                                        onShowAddUser={onShowAddUser}
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
