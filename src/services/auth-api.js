import axios from '../utils/axios-customize';

export const loginRequest = (username, password) => {
    const data = new FormData(); 
    data.append('Username', username); 
    data.append('Password', password);
    return axios.post('/api/auth/login', data)
}  

export const logout = () => {
    return axios.get('/api/auth/logout'); 
}

export const resetPasswordRequest = (email) => {
    const data = new FormData();
    data.append("email", email);

    return axios.post('/api/auth/reset-password', data);
}