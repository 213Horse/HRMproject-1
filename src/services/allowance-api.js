import axios from '../utils/axios-customize';

export const fetchListAllowance = (token) => {
    return axios.get(`/api/Allowance/GetAllAllowance`, token);
};
export const addAllowanceList = (allowance, token) => {
    return axios.post(`/api/Allowance/Create`, allowance, token);
};

export const updateAllowanceList = (allowance, token) => {
    const data = new FormData();
    data.append('Id', allowance.id);
    data.append('Name', allowance.name);
    data.append('Type', allowance.type);
    data.append('Amount', allowance.amount);
    data.append('Eligibility_Criteria', allowance.eligibility_Criteria);
    data.append('Requirements', allowance.requirements);
    return axios.put(`/api/Allowance/Update`, data, token);
};

export const deleteAnAllowance = (id, token) => {
    return axios.delete(`/api/Allowance/Delete/${id}`, token);
};

export const sreachAllowancesByEmployeeId = (employeeId, token) => {
    return axios.get(`/api/Allowance/GetListByEmployeeId`, employeeId, token);
};
