import axios from '../utils/axios-customize';
// export const getPositions = () => axios.get('/api/Position');
// export const createPosition = (data) => axios.post('/api/Position', data);
// export const updatePosition = (id, data) => axios.put(`/api/Position/${id}`, data);
// export const deletePosition = (id) => axios.delete(`/api/Position/${id}`);
export const fetchPositions = (token) => {
    return axios.get(`/api/Position`, token);
};
export const createPosition = (token) => {
    return axios.post(`/api/Position`, token);
};
export const updatePosition = (id, token) => {
    return axios.put(`/api/Position/${id}`, token);
};
export const deletePosition = (id) => {
    return axios.delete(`/api/Position/${id}`);
};
