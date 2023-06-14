import clsx from 'clsx';
import { useRef } from 'react';
import moment from 'moment/moment';
import { useEffect, useState } from 'react';

import styles from './EmployeeList.module.css';
import { Button, Input, Modal, Popconfirm, Space, Table, message } from 'antd';
import { DeleteOutlined, EditOutlined, PlusCircleFilled, SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { deleteEmployee, fetchListEmployee } from '../../../../services/employee-api';
import { EmployeeDetail } from '../EmployeeDetail';

export const EmployeeList = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});
    const employeeRef = useRef(null);
    const onClose = () => {
        setOpen(false);
    };

    const token = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    useEffect(() => {
        getAllEmployee();
    }, []);

    const getAllEmployee = async () => {
        try {
            setLoading(true);
            const res = await fetchListEmployee(token);
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
            }else {
                console.log(res);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Tìm kiếm
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        đóng
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1677ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text, record) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                <a
                    className={clsx(styles.drawerLabel)}
                    onClick={() => {
                        setOpen(true);
                        setSelectedUser(() => {
                            return employeeRef.current.find((item) => item.id === record.key);
                        });
                        // console.log(record);
                    }}
                >
                    {record.name}
                </a>
        ),
    });

    const confirm = async (id) => {
        console.log(id);
        try {
            const res = await deleteEmployee(token, id);
            if(res && res.data && res.status === 200) {
                message.success(res.data);
                getAllEmployee();
            }
        } catch (error) {
            console.log(error);
        }
    };

    console.log(data);
    const columns = [
        {
            title: 'Họ và tên',
            dataIndex: 'name',
            key: 'name',
            ...getColumnSearchProps('name'),
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
        {
            title: 'Hành động',
            dataIndex: 'action',
            // eslint-disable-next-line no-unused-vars
            render: (_, record) => (
                <>
                    <Popconfirm title="Xóa nhân viên này ?" onConfirm={() => confirm(record.key)} okText="Có" cancelText="Không">
                        <a className={clsx(styles.drawerLabel)}>
                            <DeleteOutlined style={{fontSize: '18px', color: 'red'}}/>
                        </a>
                    </Popconfirm>
                    <a className={clsx(styles.drawerLabel)} style={{marginLeft: '10px'}}>
                        <EditOutlined  style={{fontSize: '18px'}}/>
                    </a>
                </>
            ),
        },
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <div className={clsx(styles.listEmployeeWrapper)}>
            <section className={clsx(styles.headerTop)}>
                <Button
                    type="primary"
                    icon={<PlusCircleFilled />}
                    className={clsx(styles.btnAddNew)}
                    onClick={showModal}
                >
                    Thêm mới Excel
                </Button>
            </section>
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
                    userId={selectedUser?.id}
                    userName={selectedUser?.applicationUser?.fullname}
                />
            </section>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    );
};
