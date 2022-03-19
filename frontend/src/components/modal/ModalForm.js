import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './modal.css';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import userActions from '../../redux/actions/userAction';

const initForm = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    note: '',
    role: '2',
    status: '0',
};

const initMessage = {
    username: '',
    password: '',
    email: '',
    lastName: '',
};

const ModalForm = ({ userEdit, show, onHide }) => {
    // State
    const [onEdit, setOnEdit] = useState(false);

    const handleClose = () => {
        setErrorMessage(initMessage);
        onHide();
    };

    // Redux
    const dispatch = useDispatch();

    const formik = useFormik({
        // initialValues: {
        //     username: userEdit?.username ? userEdit.username : '',
        //     password: userEdit?.password ? userEdit.password : '',
        //     firstName: userEdit?.firstName ? userEdit.firstName : '',
        //     lastName: userEdit?.lastName ? userEdit.lastName : '',
        //     email: userEdit?.email ? userEdit.email : '',
        //     phone: userEdit?.phoneNumber ? userEdit.phoneNumber : '',
        //     address: userEdit?.address ? userEdit.address : '',
        //     note: userEdit?.note ? userEdit.note : '',
        //     role: userEdit?.role ? userEdit.role : '2',
        //     status: userEdit?.status ? userEdit.status : '0',
        // },
        initialValues: userEdit ? { ...userEdit } : { ...initForm },
        enableReinitialize: true,
        onSubmit: (values, { resetForm }) => {
            handleSubmitForm(values);
            resetForm(initForm);
        },
    });
    // Effect
    useEffect(() => {
        setOnEdit(userEdit ? true : false);
    }, [userEdit, setOnEdit]);

    const [errorMessage, setErrorMessage] = useState(initMessage);

    // Function
    const handleInputBlur = ({ target }) => {
        showErrorMessage(target.name);
        console.log(onEdit);
    };

    const handleSubmitForm = (values) => {
        if (!validateForm()) {
            return;
        }

        let data = {
            username: values.username,
            password: values.password,
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
            note: values.note,
            address: values.address,
            role: values.role,
            status: values.status,
        };
        console.log(data);
        onEdit === false
            ? dispatch(userActions.createUser(data))
            : dispatch(userActions.updateUsers(userEdit.id, data));

        handleClose();
    };

    const validateForm = () => {
        let isValid = true;
        let newErrorMessage = { ...initMessage };
        Object.keys(errorMessage).forEach((i) => {
            if (formik.values[i] === '') {
                newErrorMessage[i] = i + ' is required';
                isValid = false;
            }
        });
        setErrorMessage(newErrorMessage);
        return isValid;
    };

    const showErrorMessage = (name) => {
        formik.values[name] === ''
            ? setErrorMessage({
                  ...errorMessage,
                  [name]: `${name} is required`,
              })
            : setErrorMessage({ ...errorMessage, [name]: '' });
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} centered size='lg'>
                <form
                    enableReinitialize={userEdit}
                    onSubmit={formik.handleSubmit}
                >
                    <Modal.Header closeButton>
                        <h5 className='modal-title'>ADD NEW USER</h5>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='row'>
                            <div className='col-12 col-sm-6'>
                                <div id='user-field' className='form-group'>
                                    <label className='required'>Username</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Username'
                                        name='username'
                                        value={formik.values.username}
                                        onBlur={handleInputBlur}
                                        onChange={formik.handleChange}
                                    />
                                    <div className='error-message'>
                                        {errorMessage.username}
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6'>
                                <div id='password-field' className='form-group'>
                                    <label className='required'>Password</label>
                                    <input
                                        type='password'
                                        className='form-control'
                                        placeholder='Password'
                                        name='password'
                                        value={formik.values.password}
                                        onBlur={handleInputBlur}
                                        onChange={formik.handleChange}
                                    />
                                    <div className='error-message'>
                                        {errorMessage.password}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-sm-6'>
                                <div
                                    id='firstname-field'
                                    className='form-group'
                                >
                                    <label className='required'>
                                        First name
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='First name'
                                        name='firstName'
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                            </div>
                            <div className='col-12 col-sm-6'>
                                <div id='lastName-field' className='form-group'>
                                    <label className='required'>
                                        Last name
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Last name'
                                        name='lastName'
                                        value={formik.values.lastName}
                                        onBlur={handleInputBlur}
                                        onChange={formik.handleChange}
                                    />
                                    <div className='error-message'>
                                        {errorMessage.lastName}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-sm-6'>
                                <div className='form-group'>
                                    <label>Role</label>
                                    <select
                                        className='form-control'
                                        name='role'
                                        value={formik.values.role}
                                        onChange={formik.handleChange}
                                    >
                                        <option value='2'>User</option>
                                        <option value='1'>Administrator</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6'>
                                <div className='form-group'>
                                    <label>Status</label>
                                    <select
                                        className='form-control'
                                        name='status'
                                        value={formik.values.status}
                                        onChange={formik.handleChange}
                                    >
                                        <option value='0'>Active</option>
                                        <option value='1'>Unactive</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <div id='email-field' className='form-group '>
                                    <label className='required'>Email</label>
                                    <input
                                        type='email'
                                        className='form-control'
                                        placeholder='Email'
                                        name='email'
                                        value={formik.values.email}
                                        onBlur={handleInputBlur}
                                        onChange={formik.handleChange}
                                    />
                                    <div className='error-message'>
                                        {errorMessage.email}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 form-group'>
                                <label>Phone</label>
                                <div className='row phone'>
                                    <div className='col-6 col-sm-2'>
                                        <select
                                            name='areaCode'
                                            id='areaCode'
                                            className='form-control area-code'
                                        >
                                            <option value='84'>+84</option>
                                        </select>
                                    </div>
                                    <div className='col-12 col-sm-10'>
                                        <input
                                            type='text'
                                            className='form-control phone-number'
                                            placeholder='Phone number'
                                            name='phone'
                                            value={formik.values.phone}
                                            onChange={formik.handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <label>Address</label>
                            </div>

                            <div className='col-12'>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Address'
                                        name='address'
                                        value={formik.values.address}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label>Note</label>
                                    <textarea
                                        className='form-control'
                                        name='note'
                                        value={formik.values.note}
                                        onChange={formik.handleChange}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button
                            type='button'
                            className='btn btn-secondary closeBtn'
                            onClick={handleClose}
                        >
                            CANCEL
                        </button>
                        <button type='submit' className='btn btn-submit'>
                            ADD
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
};

export default ModalForm;
