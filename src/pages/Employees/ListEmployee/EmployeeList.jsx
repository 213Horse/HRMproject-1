import clsx from 'clsx';
import styles from './EmployeeList.module.css';
import { Button, Drawer, Space, Table } from 'antd';
import { useEffect, useState } from 'react';
import { fetchListEmpolyee } from '../../../services/apiRequest';

const data = [
    {
        key: '1',
        name: 'anh lam',
        address: 'London, Park Lane no. 0',
        birthdate: '19/02/2001',
        phone: '0929655358',
        email: 'email',
        cccd: '123456789123',
    },
    {
        key: '2',
        name: 'anh lam',
        address: 'London, Park Lane no. 0',
        birthdate: '19/02/2001',
        phone: '0929655358',
        email: 'email',
        cccd: '123456789123',
    },
    {
        key: '3',
        name: 'anh lam',
        address: 'London, Park Lane no. 0',
        birthdate: '19/02/2001',
        phone: '0929655358',
        email: 'email',
        cccd: '123456789123',
    },
    {
        key: '4',
        name: 'anh lam',
        address: 'London, Park Lane no. 0',
        birthdate: '19/02/2001',
        phone: '0929655358',
        email: 'email',
        cccd: '123456789123',
    },
    {
        key: '5',
        name: 'anh lam',
        address: 'London, Park Lane no. 0',
        birthdate: '19/02/2001',
        phone: '0929655358',
        email: 'email',
        cccd: '123456789123',
    },
    {
        key: '6',
        name: 'anh lam',
        address: 'London, Park Lane no. 0',
        birthdate: '19/02/2001',
        phone: '0929655358',
        email: 'email',
        cccd: '123456789123',
    },
    {
        key: '7',
        name: 'anh lam',
        address: 'London, Park Lane no. 0',
        birthdate: '19/02/2001',
        phone: '0929655358',
        email: 'email',
        cccd: '123456789123',
    },
];
export const EmployeeList = () => {
    const [placement, setPlacement] = useState('right');
    const [open, setOpen] = useState(false);
    const [employeeList, setEmployeeList] = useState([]);

    const onClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        getAllEmployee();
    }, []);
    
    const getAllEmployee = async () => {
        try {
            const res = await fetchListEmpolyee();
            if(res) {
                console.log(res);
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
            render: (text) => (
                <a className={clsx(styles.drawerLabel)} onClick={() => setOpen(true)}>
                    {text}
                </a>
            ),
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
            title: 'email',
            dataIndex: 'email',
        },
        {
            title: 'cccd',
            dataIndex: 'cccd',
        },
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <div className={clsx(styles.listEmployeeWrapper)}>
            <section className={clsx(styles.headerTop)}></section>
            <section className={clsx(styles.listEmployee)}>
                <Table
                    columns={columns}
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
                <Drawer
                    title="Drawer with extra actions"
                    placement={placement}
                    width={800}
                    onClose={onClose}
                    open={open}
                    extra={
                        <Space>
                            <Button onClick={onClose}>Cancel</Button>
                            <Button type="primary" onClick={onClose}>
                                OK
                            </Button>
                        </Space>
                    }
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </section>
        </div>
    );
};
