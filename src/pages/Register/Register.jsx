
import './register.css'
import background from '../../assets/image/background.webp'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'


export const Register = () => {

  const [login, setLogin] = useState({
    username: '',
    password: ''
  })

  // const [error, setError] = useState({
  //   usernameError: '',
  //   passwordError: ''
  // })

  const hanldeOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogin({
      ...login, [name]: value
    })
    // validateOnChangeValue(name, value);
  }

  const hanldeRegister = () => {

  }

  return (
    <div className="register position-relative">
      <img src={background} alt="background" className='background-gif' />
      <main className="register__main position-absolute top-50 start-50 translate-middle">
        <h1 className='text-center fw-bold'>Đăng ký</h1>
        {/* email */}
        <div className="mb-3">
          <label htmlFor="FormControlEmail" className="form-label text-white">Email</label>
          <input
            type="email"
            // className={`form-control ${error.usernameError ? 'is-invalid' : ''}`}
            id="FormControlEmail"
            placeholder="email"
            value={login.username}
            onChange={hanldeOnChange}
            name='email'
          />
          <div className="invalid-feedback">
            {/* {error.usernameError} */}
          </div>
        </div>
        {/* phone number */}
        <div className="mb-3">
          <label htmlFor="FormControlEmail" className="form-label text-white">Phone</label>
          <input
            type="text"
            // className={`form-control ${error.usernameError ? 'is-invalid' : ''}`}
            id="FormControlEmail"
            placeholder="phone"
            value={login.username}
            onChange={hanldeOnChange}
            name='email'
          />
          <div className="invalid-feedback">
            {/* {error.usernameError} */}
          </div>
        </div>
        {/* Address */}
        <div className="mb-3">
          <label htmlFor="FormControlEmail" className="form-label text-white">Address</label>
          <input
            type="text"
            // className={`form-control ${error.usernameError ? 'is-invalid' : ''}`}
            id="FormControlEmail"
            placeholder="address"
            value={login.username}
            onChange={hanldeOnChange}
            name='address'
          />
          <div className="invalid-feedback">
            {/* {error.usernameError} */}
          </div>
        </div>
        {/* password */}
        <div className="mb-3">
          <label htmlFor="FormControlPassword" className="form-label text-white">Password</label>
          <input
            type="password"
            // className={`form-control ${error.passwordError ? 'is-invalid' : ''}`}
            id="FormControlPassword"
            placeholder="password"
            value={login.password}
            onChange={hanldeOnChange}
            name='password'
          />
          <div className="invalid-feedback">
            {/* {error.passwordError} */}
          </div>
        </div>
        {/* confirm password */}
        <div className="mb-3">
          <label htmlFor="FormControlPassword" className="form-label text-white">Confirm password</label>
          <input
            type="password"
            // className={`form-control ${error.passwordError ? 'is-invalid' : ''}`}
            id="FormControlPassword"
            placeholder="password"
            value={login.password}
            onChange={hanldeOnChange}
            name='password'
          />
          <div className="invalid-feedback">
            {/* {error.passwordError} */}
          </div>
        </div>
        {/* gender */}
          <label htmlFor="FormControlPassword" className="form-label text-white">Gender</label>
        <div className="mb3 d-flex">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
            <label className="form-check-label text-white" htmlFor="exampleRadios1">
              Nam
            </label>
          </div>
          <div className="form-check ms-3">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
            <label className="form-check-label text-white" htmlFor="exampleRadios2">
              Nữ
            </label>
          </div>
          <div className="form-check ms-3">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
            <label className="form-check-label text-white" htmlFor="exampleRadios2">
              Khác
            </label>
          </div>
        </div>
        <button type="button" className="btn btn-primary w-100 mb-3" onClick={hanldeRegister}>Đăng ký</button>
        <footer className='d-flex'>
          <p className='no-account'>Have an account ? </p> <NavLink to="/login" className='ms-1'>Sign in</NavLink>
        </footer>
      </main>
    </div>
  )
}
