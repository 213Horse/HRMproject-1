import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Dashboard from './components/Admin/Dashboard';
import { Profile } from './pages/Profile/Profile';
import { Attendance } from './pages/Attendance/Attendance';
import { Payslip } from './pages/Payslip/Payslip';
import { NotFoundPage } from './components/NotFound/NotFoundPage';
import { EmployeeList } from './pages/Employees/ListEmployee/EmployeeList';
import { AddNewEmployee } from './pages/Employees/AddNewEmployee/AddNewEmployee';
import { Login } from './pages/Auth/Login/Login';
import { ForgotPassword } from './pages/Auth/ForgotPassword/ForgotPassword';
import { doLoginAction } from './redux/account/accountSlice';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            dispatch(doLoginAction(JSON.parse(user)));
        }
    }, []);

    const router = createBrowserRouter([
        {
            path: '/admin',
            element: (
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
            ), 
            errorElement: <NotFoundPage />,
            children: [
                {
                    index: true,
                    element: <EmployeeList />,
                },
                {
                    path: 'add-new-employee',
                    element: <AddNewEmployee />,
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
            errorElement: <NotFoundPage />,
        },
        {
            path: '/forgot-password',
            element: <ForgotPassword />,
            errorElement: <NotFoundPage />,
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
