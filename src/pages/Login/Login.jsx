/* eslint-disable react/no-unescaped-entities */
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
import { useState } from 'react';
import background from '../../assets/image/background.webp'
import { NavLink } from 'react-router-dom';

export const Login = () => {

    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    const [error, setError] = useState({
        usernameError: '',
        passwordError: ''
    })

    const hanldeOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLogin({
            ...login, [name]: value
        })
        validateOnChangeValue(name, value);
    }

    const validateOnChangeValue = (name, value) => {
        switch (name) {
            case 'username':
                if (value.length < 6) {
                    setError({ ...error, usernameError: 'tên đăng nhập tối thiểu chứa 6 kí tự' })
                } else if (/\d/.test(value)) {
                    setError({ ...error, usernameError: 'tên đăng nhập không được chứa số' })
                } else {
                    setError({ ...error, usernameError: '' })
                }
                if (!value) setError({ ...error, usernameError: '' })
                break;
            case 'password':
                if (value.length < 6) {
                    setError({ ...error, passwordError: 'mật khẩu tối thiểu chứa 6 kí tự' })
                } else {
                    setError({ ...error, passwordError: '' })
                }
                if (!value) setError({ ...error, passwordError: '' })
                break;
        }
    }

    const hanldeLogin = () => {
        if (!login.username) {
            setError({ ...error, usernameError: 'vui lòng điền email hoặc tên đăng nhập' })
            return;
        }
        if (!login.password) {
            setError({ ...error, passwordError: 'vui lòng điền mật khẩu' })
            return;
        }
        if (login.password !== '123456') {
            setError({ ...error, passwordError: 'sai mật khẩu' })
        }
        console.log(login.username, login.password);
    }

    return (
        <div className="form position-relative">
            <img src={background} alt="background" className='background-gif' />
            <main className="login position-absolute top-50 start-50 translate-middle blur">
                <h1 className='text-center fw-bold'>Đăng nhập</h1>
                <div className="mb-3">
                    <label htmlFor="FormControlEmail" className="form-label text-white">Username or email address</label>
                    <input
                        type="text"
                        className={`form-control ${error.usernameError ? 'is-invalid' : ''}`}
                        id="FormControlEmail"
                        placeholder="email hoặc tên đăng nhập"
                        value={login.username}
                        onChange={hanldeOnChange}
                        name='username'

                    />
                    <div className="invalid-feedback">
                        {error.usernameError}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="FormControlPassword" className="form-label text-white">Password</label>
                    <input
                        type="password"
                        className={`form-control ${error.passwordError ? 'is-invalid' : ''}`}
                        id="FormControlPassword"
                        placeholder="mật khẩu"
                        value={login.password}
                        onChange={hanldeOnChange}
                        name='password'
                    />
                    <div className="invalid-feedback">
                        {error.passwordError}
                    </div>
                </div>
                <button type="button" className="btn btn-primary w-100 mb-3" onClick={hanldeLogin}>Đăng nhập</button>
                <footer className='d-flex'>
                    <NavLink to="/forgot-password" className='ms-1 text-white'>Quên mật khẩu</NavLink>
                </footer>
            </main>
        </div>
    )
}
