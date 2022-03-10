import React from 'react';
import './login.css';

const Login = () => {
    return (
        <>
            <div className='login-background'>
                <form action='' className='login-form' id='form-login'>
                    <h1>Login</h1>
                    <div className='login-form-group'>
                        <i className='far fa-envelope'></i>
                        <input
                            type='email'
                            placeholder='Email'
                            id='email'
                            onchange='handleInputEmail(this.value)'
                            required
                        />
                    </div>
                    <div className='login-form-group'>
                        <i className='fas fa-lock'></i>
                        <input
                            type='password'
                            placeholder='Password'
                            id='password'
                            onchange='handleInputPassword(this.value)'
                            required
                        />
                    </div>
                    <button id='btnLogin' type='button' className='btn-login'>
                        Login
                    </button>
                </form>
            </div>
        </>
    );
};

export default Login;
