import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import { useHistory } from 'react-router-dom';
import './login.css';
import { useFormik } from 'formik';

const Login = () => {
    // State
    const alert = useAlert();
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            handleSubmitBtn(values);
        },
    });

    let admin = {
        email: 'admin@gmail.com',
        password: 'admin',
    };

    const handleSubmitBtn = ({ email, password }) => {
        if (email === admin.email && password === admin.password) {
            alert.success('Welcome to dashboard');
            history.push('/list-user');
        } else {
            alert('Username or password incorrect. Please re-enter!');
        }
    };

    return (
        <>
            <div className='login-background'>
                <form
                    onSubmit={formik.handleSubmit}
                    className='login-form'
                    id='form-login'
                >
                    <h1>Login</h1>
                    <div className='login-form-group'>
                        <i className='far fa-envelope'></i>
                        <input
                            type='email'
                            placeholder='Email'
                            name='email'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            required
                        />
                    </div>
                    <div className='login-form-group'>
                        <i className='fas fa-lock'></i>
                        <input
                            type='password'
                            placeholder='Password'
                            name='password'
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            required
                        />
                    </div>
                    <button type='submit' className='btn-login'>
                        Login
                    </button>
                </form>
            </div>
        </>
    );
};

export default Login;
