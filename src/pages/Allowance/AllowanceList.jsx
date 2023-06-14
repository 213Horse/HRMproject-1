import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button, Modal, Form, Input, Spin } from 'antd';
import {
    fetchAllowances,
    addAllowance,
    updateAllowance,
    deleteAllowance,
    fetchAllowancesByEmployeeId,
} from '../../redux/allowance/allowancesSlice';

export const AllowanceList = () => {
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [allowanceId, setAllowanceId] = React.useState(null);
    const allowances = useSelector((state) => state.allowances.allowances);
    const status = useSelector((state) => state.allowances.status);

    const dispatch = useDispatch();

    const token = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    };
    const [searchEmployeeId, setSearchEmployeeId] = React.useState('');

    const handleSearchChange = (employeeId) => {
        setSearchEmployeeId(employeeId.target.value);
    };
    const handleSearch = () => {
        dispatch(fetchAllowancesByEmployeeId(searchEmployeeId));
    };

    useEffect(() => {
        dispatch(fetchAllowances(token));
    }, [dispatch]);

    const handleAdd = () => {
        form.resetFields();
        setAllowanceId(null);
        setIsModalVisible(true);
    };
    const handleEdit = (allowance) => {
        console.log(allowance);
        form.setFieldsValue(allowance);
        setAllowanceId(allowance.id);
        setIsModalVisible(true);
    };

    const handleDelete = (allowanceId) => {
        dispatch(deleteAllowance(allowanceId));
    };

    const handleOk = () => {
        form.validateFields().then((values) => {
            console.log(values);
            if (allowanceId) {
                dispatch(updateAllowance(values, token));
            } else {
                dispatch(addAllowance(values));
            }
            setIsModalVisible(false);
        });
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const columns = [
        {
            title: 'STT',
            key: 'stt',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Loại',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Tiền',
            dataIndex: 'amount',
            key: 'amount',
            render: (text) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(text),
        },
        {
            title: 'Đủ tiêu chuẩn',
            dataIndex: 'eligibility_Criteria',
            key: 'eligibility_Criteria',
        },
        {
            title: 'Yêu cầu',
            dataIndex: 'requirements',
            key: 'requirements',
        },
        {
            title: ' ',
            key: 'action',
            render: (text, record) => (
                <span>
                    <Button onClick={() => handleEdit(record)}>Sửa</Button>
                    <Button onClick={() => handleDelete(record.id)}>Xóa</Button>
                </span>
            ),
        },
    ];

    return (
        <div>
            <Input
                placeholder="Nhập ID nhân viên"
                value={searchEmployeeId}
                onChange={handleSearchChange}
                style={{ width: 200 }}
            />
            <Button onClick={handleSearch}>Tìm kiếm</Button>
            <Button onClick={handleAdd}>Thêm phụ cấp</Button>

            {status === 'loading' ? <Spin /> : <Table dataSource={allowances} columns={columns} rowKey="id" />}
            <Modal title="Phụ Cấp" open={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form form={form} layout="vertical">
                    <Form.Item
                        hidden
                        name="id"
                        label="Id"
                        rules={[{ required: true, message: 'Vui lòng nhập id phụ cấp!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        hidden
                        name="employeeContractId"
                        label="EmployeeContractId"
                        rules={[{ required: true, message: 'Vui lòng nhập id nhân viên phụ cấp!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="name"
                        label="Tên"
                        rules={[{ required: true, message: 'Vui lòng nhập tên phụ cấp!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="type"
                        label="Loại"
                        rules={[{ required: true, message: 'Vui lòng nhập không để trống!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="amount"
                        label="Tiền"
                        rules={[{ required: true, message: 'Vui lòng nhập không để trống!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="eligibility_Criteria"
                        label="Đủ tiêu chuẩn"
                        rules={[{ required: true, message: 'Vui lòng nhập không để trống!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="requirements"
                        label="Yêu Cầu"
                        rules={[{ required: true, message: 'Vui lòng nhập không để trống!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default AllowanceList;
