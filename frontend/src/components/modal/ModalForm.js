import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './modal.css';

const ModalForm = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button
                type='button'
                className='btn-custom btn-add-user'
                onClick={handleShow}
            >
                Add User
            </button>

            <Modal show={show} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton>
                    <h5 className='modal-title'>ADD NEW USER</h5>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className='row'>
                            <div className='col-12 col-sm-6'>
                                <div id='user-field' className='form-group'>
                                    <label className='required'>Username</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='username'
                                        placeholder='Username'
                                    />
                                </div>
                            </div>
                            <div className='col-12 col-sm-6'>
                                <div id='password-field' className='form-group'>
                                    <label className='required'>Password</label>
                                    <input
                                        type='password'
                                        className='form-control'
                                        id='password'
                                        placeholder='Password'
                                    />
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
                                        id='firstName'
                                        placeholder='First name'
                                    />
                                </div>
                            </div>
                            <div className='col-12 col-sm-6'>
                                <div id='lastname-field' className='form-group'>
                                    <label className='required'>
                                        Last name
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='lastName'
                                        placeholder='Last name'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-sm-6'>
                                <div className='form-group'>
                                    <label>Role</label>
                                    <select
                                        name='role'
                                        id='role'
                                        className='form-control'
                                    >
                                        <option value='Administrator'>
                                            Administrator
                                        </option>
                                        <option value='User'>User</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6'>
                                <div className='form-group'>
                                    <label>Status</label>
                                    <select
                                        name='status'
                                        id='status'
                                        className='form-control'
                                    >
                                        <option value='Active'>Active</option>
                                        <option value='Unactive'>
                                            Unactive
                                        </option>
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
                                        id='email'
                                        placeholder='Email'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 form-group'>
                                <label>Phone</label>
                                <div className='row phone'>
                                    <div className='col-6 col-sm-2'>
                                        <select
                                            name='phone'
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
                                            id='phoneNumber'
                                            placeholder='Phone number'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <label>Address</label>
                            </div>
                            <div className='col-12 col-sm-3'>
                                <div className='form-group'>
                                    <select
                                        name='country'
                                        id='country'
                                        className='form-control'
                                    >
                                        <option value=''>Quốc Gia</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-12 col-sm-3'>
                                <div className='form-group'>
                                    <select
                                        name='city'
                                        id='city'
                                        className='form-control'
                                    >
                                        <option value=''>Thành Phố</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-12 col-sm-3'>
                                <div className='form-group'>
                                    <select
                                        name='district'
                                        id='district'
                                        className='form-control'
                                    >
                                        <option value=''>Quận/Huyện</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-12 col-sm-3'>
                                <div className='form-group'>
                                    <select
                                        name='ward'
                                        id='ward'
                                        className='form-control'
                                    >
                                        <option value=''>Phường/Xã</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='address'
                                        placeholder='Address'
                                    />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label>Note</label>
                                    <textarea
                                        className='form-control'
                                        id='note'
                                        rows='3'
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        type='button'
                        className='btn btn-secondary closeBtn'
                        onClick={handleClose}
                    >
                        CANCEL
                    </button>
                    <button type='button' className='btn btn-submit'>
                        ADD
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalForm;
