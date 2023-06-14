import { useState } from 'react';
import background from '../../../assets/image/MideaGM_animation_v3.gif'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ForgotPassword.css'
import { NavLink } from 'react-router-dom';
import { validateEmail } from '../../../utils/utilities';
import { resetPasswordRequest } from '../../../services/auth-api';

export const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [notification, setNotification] = useState('');

    const handleOnChange = (e) => {
        const value = e.target.value;
        setEmail(value)
        if(!value) {
            setErrorEmail('')
        }
    }

    const handleValidateEmail = () => {
        const isValidEmail = validateEmail(email);
        if(!isValidEmail) {
            setErrorEmail('Email không hợp lệ');
            return false;
        }else {
            setErrorEmail('');
            return true;
        }
    }

    const handleSendEmail = async () => {
        const isValidEmail = handleValidateEmail();

        if (!isValidEmail) return;
        try {
            const res = await resetPasswordRequest(email);

            if (res?.data) {
                console.log("Data: ", res.data);
                setNotification(res.data);
            }
            else if (res?.response) {
                setErrorEmail(res.response.data);
            }
        } catch (error) {

        }
    }

    return (
        <div className="form position-relative">
            <img src={background} alt="background" className='background-gif' />
            <br></br>
            <main className="forgot-password position-absolute top-50 start-50 translate-middle blur">
                <h2 className='text-center fw-bold text-white'>Quên mật khẩu</h2>
                <br></br>
                <div className="mb-3">
                    <label htmlFor="FormControlEmail" className="form-label text-white">Email</label>
                    <input
                        type="email"
                        className={`form-control ${errorEmail ? 'is-invalid' : ''}`}
                        id="FormControlEmail"
                        placeholder="Email của bạn"
                        value={email}
                        onChange={handleOnChange}
                    />
                    {
                        errorEmail &&
                        <div className="invalid-feedback">
                            {errorEmail}
                        </div>
                    }
                    {
                        notification 
                        && 
                        <div className='notification'>
                            {notification}
                        </div>
                    }
                </div>
                <button type="button" className="btn btn-primary w-100 mb-3" onClick={handleSendEmail}>Gửi mã</button>
                <footer className='d-flex'>
                    <NavLink to="/" className='ms-1 text-white'>Đăng nhập</NavLink>
                </footer>
            </main>
        </div>
    )
}
