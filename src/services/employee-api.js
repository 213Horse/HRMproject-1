import axios from '../utils/axios-customize';

export const fetchListEmployee = (token) => {
    return axios.get('/api/Employee', token);
} 

export const fetchListSkill = (token, id) => {
    return axios.get(`/api/Employee_Skill/GetListSKill?EmployeeId=${id}`, token)
}

export const fetchExperience = (token, id) => {
    return axios.get(`/api/Employee_Experience/GetListExperience?EmployeeId=${id}`, token)
}

export const fetchDependents = (token, id) => {
    return axios.get(`/api/Family/GetFamilyByEmployeeId?EmployeeId=${id}`, token);
}

export const deleteEmployee = (token, id) => {
    const data = new FormData(); 
    data.append('Id', id); 
    return axios.put('/api/Employee/Delete', data , token)
}