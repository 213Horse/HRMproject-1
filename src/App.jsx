import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Login } from './pages/Login/Login';
import { ForgotPassword } from './pages/ForgotPassword/ForgotPassword';
import Dashboard from './components/Admin/Dashboard';
import { Profile } from './pages/Profile/Profile';
import { Attendance } from './pages/Attendance/Attendance';
import { Payslip } from './pages/Payslip/Payslip';
import { NotFoundPage } from './components/NotFound/NotFoundPage';
import { EmployeeList } from './pages/Employees/ListEmployee/EmployeeList';
import { AddNewEmployee } from './pages/Employees/AddNewEmployee/AddNewEmployee';

function App() {
    const router = createBrowserRouter([
        {
            path: '/admin',
            element: <Dashboard />,
            errorElement: <NotFoundPage/>,
            children: [
                {
                    index: true,
                    element: <EmployeeList/>
                },
                {
                    path: 'add-new-employee',
                    element: <AddNewEmployee />
                },
                {
                    path: 'profile',
                    element: <Profile />,
                },
                {
                    path: 'attendance',
                    element: <Attendance />,
                },
                {
                    path: 'payslip',
                    element: <Payslip />,
                },
            ],
        },
        {
            path: '/',
            element: <Login />,
            errorElement: <NotFoundPage/>,
        },
        {
            path: '/forgot-password',
            element: <ForgotPassword />,
            errorElement: <NotFoundPage/>,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
