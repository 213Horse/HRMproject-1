import clsx from 'clsx';
import { useRef } from 'react';
import moment from 'moment/moment';
import { useEffect, useState } from 'react';

import { fetchListEmployee } from '../../../services/employee-api';
import styles from './EmployeeList.module.css';
import { EmployeeDetail } from './EmployeeDetail';
import { Table } from 'antd';

export const EmployeeList = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});
    const employeeRef = useRef(null);
    const onClose = () => {
        setOpen(false); 
    };

    useEffect(() => {
        getAllEmployee();
    }, []); 

    const getAllEmployee = async () => {
        try {
            const token = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
            setLoading(true);
            const res = await fetchListEmployee(token)
            if (res && res.data && res.status === 200) {
                setLoading(false);
                employeeRef.current = res.data;
                const employees = res.data.map((item) => {
                    return {    
                        key: item.id,
                        name: item?.applicationUser?.fullname,
                        address: item?.address,
                        birthdate: moment(item?.birthDay).format('DD-MM-YYYY'),
                        phone: item?.applicationUser?.phoneNumber,
                        email: item?.applicationUser?.email,
                        cccd: item?.citizenIdentificationNumber,
                    };
                });
                setData(employees);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const columns = [
        {
            title: 'Họ và tên',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <a className={clsx(styles.drawerLabel)} onClick={() => {
                    setOpen(true)
                    setSelectedUser(() => {
                        return employeeRef.current.find((item) => item.id === record.key)
                    })
                }}>
                    {text}
                </a>
            ),
        },
        {
            title: 'email',
            dataIndex: 'email',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
        },
        {
            title: 'Ngày sinh',
            dataIndex: 'birthdate',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
        },
        {
            title: 'cccd',
            dataIndex: 'cccd',
        },
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    console.log('data', selectedUser);
    return (
        <div className={clsx(styles.listEmployeeWrapper)}>
            <section className={clsx(styles.headerTop)}></section>
            <section className={clsx(styles.listEmployee)}>
                <Table
                    columns={columns}
                    loading={loading}
                    dataSource={data}
                    onChange={onChange}
                    pagination={{
                        current: 1,
                        total: 200,
                        pageSize: 50,
                    }}
                    scroll={{
                        y: 240,
                    }}
                />
               <EmployeeDetail 
                    open={open}
                    onClose={onClose}
                    selectedUser={selectedUser}
               />
            </section>
        </div>
    );
};
