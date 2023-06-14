import { Navigate } from 'react-router-dom';

export const ProtectedRoute = (props) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    // eslint-disable-next-line react/prop-types
    return <div>{JSON.parse(isAuthenticated) ? <>{props.children}</> : <Navigate to="/" />}</div>;
};
 