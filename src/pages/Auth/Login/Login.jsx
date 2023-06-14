/* eslint-disable react/no-unescaped-entities */
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { useState } from 'react';
import background from '../../../assets/image/MideaGM_animation_v3.gif';
import { NavLink, useNavigate } from 'react-router-dom';
import { loginRequest } from '../../../services/auth-api';
import { useDispatch } from 'react-redux';
import { doLoginAction } from '../../../redux/account/accountSlice';
import { Button, Form, notification } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

export const Login = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isLoad, setIsLoad] = useState(false);
    const [login, setLogin] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState({
        usernameError: '',
        passwordError: '',
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLogin({
            ...login,
            [name]: value,
        });
    };

    const hanldeLogin = async () => {
        if (!login.username) {
            setError({ ...error, usernameError: 'vui lòng điền email hoặc tên đăng nhập' });
            return;
        }
        if (!login.password) {
            setError({ ...error, passwordError: 'vui lòng điền mật khẩu' });
            return;
        }

        try {
            setIsLoad(true);
            const res = await loginRequest(login.username, login.password);
            if (res.data) {
                const { token, ...rest } = res.data;

                if (res.data?.listRoles?.includes('Manager')) {
                    localStorage.setItem('user', JSON.stringify(rest));
                    localStorage.setItem('token', token);
                    dispatch(doLoginAction(rest));
                    navigate('/admin');
                }
            }
            else if (res.response) {
                notification.error({
                    message: 'Error',
                    description: res.response.data,
                });
            }
        } catch (error) {
            notification.error({
                message: 'Error',
                description: error?.response?.data,
            });
        } finally {
            setIsLoad(false);
        }
    };

    return (
        <div className="form position-relative">
            <img src={background} alt="background" className="background-gif" />
            <br></br>
            <main className="login position-absolute top-50 start-50 translate-middle blur">
                <h1 className="text-center fw-bold text-white">Đăng nhập</h1>
                <br></br>
                <div className="mb-3">
                    <label htmlFor="FormControlEmail" className="form-label text-white w-100">
                        Tên đăng nhập hoặc email
                        <input
                            type="text"
                            className={`form-control mt-1 ${error.usernameError ? 'is-invalid' : ''}`}
                            id="FormControlEmail"
                            placeholder="Email hoặc tên đăng nhập"
                            value={login.username}
                            onChange={handleOnChange}
                            name="username"
                        />
                        <div className="invalid-feedback">{error.usernameError}</div>
                    </label>
                </div>
                <div className="mb-3">
                    <label htmlFor="FormControlPassword" className="form-label text-white w-100 position-relative">
                        Mật khẩu
                        <input
                            type={isShowPassword ? 'text' : 'password'}
                            className={`form-control  mt-1 ${error.passwordError ? 'is-invalid' : ''}`}
                            id="FormControlPassword"
                            placeholder="Mật khẩu"
                            value={login.password}
                            onChange={handleOnChange}
                            name="password"
                        />
                        <div className="invalid-feedback">{error.passwordError}</div>
                        <span
                            onClick={() => setIsShowPassword(!isShowPassword)}
                            className="position-absolute protect-password"
                        >
                            {isShowPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                        </span>
                    </label>
                </div>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={isLoad}
                        className="w-100"
                        onClick={hanldeLogin}
                        style={{ height: '38px' }}
                    >
                        Đăng nhập
                    </Button>
                </Form.Item>
                <footer className="d-flex">
                    <NavLink to="/forgot-password" className="ms-1 text-white">
                        Quên mật khẩu
                    </NavLink>
                </footer>
            </main>
        </div>
    );
};
