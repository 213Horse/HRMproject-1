import axios from '../utils/axios-customize';

export const fetchAllDepartment = () => {
    const token = localStorage.getItem('token');
    const requestHeaders = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };

    return axios.get('/api/department', requestHeaders);
}