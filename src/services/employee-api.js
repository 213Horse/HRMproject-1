import axios from '../utils/axios-customize';

export const fetchListEmployee = (token) => {
    return axios.get('/api/Employee', token);
} 