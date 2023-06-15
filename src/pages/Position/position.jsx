import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Spin, Modal, Form, Input } from 'antd';
import {
    fetchListPositions,
    createNewPosition,
    editPosition,
    removePosition,
} from '../../redux/position/positionSlice';

import { PlusCircleFilled, EditFilled, DeleteFilled } from '@ant-design/icons';
export const Position = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const positions = useSelector((state) => state.positions.positions);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        form.validateFields().then((values) => {
            dispatch(createNewPosition(values));
            setIsModalVisible(false);
            form.resetFields();
        });
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const token = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    };
    console.log('token ->', token);

    token && fetchListPositions(token);

    const dataSource = positions?.map((position, index) => {
        return {
            key: index,
            departmentId: position.departmentId,
            name: position.name,
            levels: position.levels[0],
        };
    });

    const columns = [
        {
            title: 'STT',
            key: 'stt',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'ID',
            dataIndex: 'departmentId',
            key: 'departmentId',
        },
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Cấp độ',
            key: 'levels',
            dataIndex: 'levels',
            // render: (text, record) => (
            //     <ul>
            //         {record.levels?.map((level) => (
            //             <li key={level.positionId}>{level.name}</li>
            //         ))}
            //     </ul>
            // ),
        },
        {
            title: 'hành động',
            key: 'action',
            render: (text, record) => (
                <span>
                    <Button onClick={() => dispatch(removePosition(record.id))}>
                        {' '}
                        <DeleteFilled /> Xóa{' '}
                    </Button>
                    <Button onClick={() => dispatch(editPosition(record.id, { ...record, name: 'Updated' }))}>
                        <EditFilled />
                        Sửa
                    </Button>
                </span>
            ),
        },
    ];
    useEffect(() => {
        dispatch(fetchListPositions(token));
    }, [dispatch]);
    console.log(positions);
    return (
        <div>
            <Button onClick={showModal}>
                <PlusCircleFilled /> Thêm vị trí
            </Button>
            {status === 'loading' ? <Spin /> : <Table dataSource={dataSource} columns={columns} rowKey="id" />}
            <Modal title="Thêm vị trí" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form form={form} layout="vertical">
                    <Form.Item
                        name="departmentId"
                        label="ID"
                        rules={[{ required: true, message: 'Vui lòng nhập ID!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="name" label="Tên" rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}>
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Position;
