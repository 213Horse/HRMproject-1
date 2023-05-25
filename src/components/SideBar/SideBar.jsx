/* eslint-disable no-unused-vars */

import { NavLink } from 'react-router-dom';
import './SideBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardUser, faGaugeHigh, faPersonCircleCheck, faTicket, faTree } from '@fortawesome/free-solid-svg-icons';
import { faBell, faComments } from '@fortawesome/free-regular-svg-icons';


export const SideBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const { isOpen } = props;

    return (
        <section className={isOpen ? 'smallSideBar' : 'sidebar'}>
            <ul className="sidebar__list">
                <i className="bi bi-speedometer2"></i>
                <li className="sidebar__list-item text-white ps-4">
                    <FontAwesomeIcon icon={faGaugeHigh} />
                    <NavLink to='#' className={`ms-3 ${isOpen ? 'd-none' : 'd-inline-block'}`}>Dashboard</NavLink>
                </li>
                <li className="sidebar__list-item text-white ps-4">
                    <FontAwesomeIcon icon={faBell} />
                    <NavLink to='#' className={`ms-3 ${isOpen ? 'd-none' : 'd-inline-block'}`}>Notification</NavLink>
                </li>
                <li className="sidebar__list-item text-white ps-4">
                    <FontAwesomeIcon icon={faClipboardUser} />
                    <NavLink to='#' className={`ms-3 ${isOpen ? 'd-none' : 'd-inline-block'}`}>Payslip</NavLink>
                </li>
                <li className="sidebar__list-item text-white ps-4">
                    <FontAwesomeIcon icon={faClipboardUser} />
                    <NavLink to='#' className={`ms-3 ${isOpen ? 'd-none' : 'd-inline-block'}`}>Attendance</NavLink>
                </li>
                <li className="sidebar__list-item text-white ps-4">
                    <FontAwesomeIcon icon={faClipboardUser} />
                    <NavLink to='#' className={`ms-3 ${isOpen ? 'd-none' : 'd-inline-block'}`}>Attendance Management</NavLink>
                </li>
                <li className="sidebar__list-item text-white ps-4">
                    <FontAwesomeIcon icon={faTicket} />
                    <NavLink to='#' className={`ms-3 ${isOpen ? 'd-none' : 'd-inline-block'}`}>Ticket Management</NavLink>
                </li>
                <li className="sidebar__list-item text-white ps-4">
                    <FontAwesomeIcon icon={faTree} />

                    <NavLink to='#' className={`ms-3 ${isOpen ? 'd-none' : 'd-inline-block'}`}>Holidays</NavLink>
                </li>
                <li className="sidebar__list-item text-white ps-4">
                    <FontAwesomeIcon icon={faPersonCircleCheck} />
                    <NavLink to='#' className={`ms-3 ${isOpen ? 'd-none' : 'd-inline-block'}`}>My Review Performance</NavLink>
                </li>
                <li className="sidebar__list-item text-white ps-4">
                    <FontAwesomeIcon icon={faComments} />
                    <NavLink to='#' className={`ms-3 ${isOpen ? 'd-none' : 'd-inline-block'}`}>Feedbacks</NavLink>
                </li>
            </ul>
        </section>
    )
}
