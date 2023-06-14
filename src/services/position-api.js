import axios from '../utils/axios-customize';

export const getListProsition = (token) => {
    return axios.get('/api/Position', token);
}