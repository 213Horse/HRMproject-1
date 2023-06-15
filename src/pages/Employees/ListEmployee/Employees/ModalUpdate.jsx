/* eslint-disable react/prop-types */
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { AddNewEmployee } from '../../AddNewEmployee/AddNewEmployee';

export const ModalUpdateUser = (props) => {
    // eslint-disable-next-line react/prop-types
    const { isOpen, setOpen, selectedUser } = props;
    const [loading, setLoading] = useState(false);
    const hanldeUpdate = () => {};

    return (
        <Modal
            open={isOpen}
            title={`Cập nhật thông tin nhân viên: ${selectedUser?.applicationUser?.fullname}`}
            width={1700}
            footer={[
                <Button key="back" onClick={() => setOpen(false)}>
                    Hủy
                </Button>,
                <Button key="submit" type="primary" loading={loading} onClick={hanldeUpdate}>
                    Cập nhật
                </Button>,
            ]}
        >
            <AddNewEmployee isUpdate/>
        </Modal>
    );
};
