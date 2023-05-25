import logo from '../../assets/image/icon-logo.png'
import avatar from '../../assets/image/avatar-mentor-1.jpg'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const Header = (props) => {

    // eslint-disable-next-line react/prop-types
    const { toggle } = props;


    return (
        <header className="header d-flex justify-content-between align-items-center">
            <div className="header__left-side d-flex align-items-center">
                <img src={logo} alt="" className="header__left-side-logo" />
                <div className="header__left-side-toggle">
                    <FontAwesomeIcon icon={faBars} className='ms-5' onClick={toggle}/>
                </div>
            </div>
            <div className="header__right-side">
                <img src={avatar} alt="" className="header__right-side-avatar" />
                <span className="header__right-side-username text-white ms-4 me-4">Luna</span>
            </div>
        </header>
    )
}
