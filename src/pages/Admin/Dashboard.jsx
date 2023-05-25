import './Dashboard.css'
import { Header } from '../../components/Header/Header'
import { SideBar } from '../../components/SideBar/SideBar'
import { useState } from 'react'

export const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    console.log(isOpen);
    return (
        <div className="dashboard-wrapper">
            <Header toggle={toggle}/>
            <main className='d-flex main-content' >
                <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
            </main>
        </div>
    )
}
