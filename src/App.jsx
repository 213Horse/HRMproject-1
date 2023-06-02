import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { ForgotPassword } from './pages/ForgotPassword/ForgotPassword';
import Dashboard from './pages/Admin/Dashboard';
import { Profile } from './pages/Profile/Profile';
import { Attendance } from './pages/Attendance/Attendance';
import { Payslip } from './pages/Payslip/Payslip';

const LayoutAdmin = () => {
    return (
        <div className="app-layout">
            <Dashboard />
        </div>
    );
};

function App() {
    const router = createBrowserRouter([
        {
            path: '/admin',
            element: <LayoutAdmin />,
            errorElement: <h1>404 Page not found</h1>,
            children: [
                {
                    index: true,
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
            errorElement: <h1>404 Page not found</h1>,
        },
        {
            path: '/forgot-password',
            element: <ForgotPassword />,
            errorElement: <h1>404 Page not found</h1>,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
