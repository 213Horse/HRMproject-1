import { Button, Drawer, Space, Tabs } from 'antd';

export const EmployeeDetail = (props) => {
    // eslint-disable-next-line react/prop-types
    const { open, onClose, selectedUser } = props;

    const onChange = (key) => {
        console.log(key);
    };

    const items = [
        {
            key: '1',
            label: `Kỹ năng`,
            children: `Content of Tab Pane 1`,
        },
        {
            key: '2',
            label: `Kinh nghiệm`,
            children: `Content of Tab Pane 2`,
        },
        {
            key: '3',
            label: `CV`,
            children: `Content of Tab Pane 3`,
        },
        {
            key: '4',
            label: `Người phụ thuộc`,
            children: `Content of Tab Pane 3`,
        },
        {
            key: '5',
            label: `Phụ cấp`,
            children: `Content of Tab Pane 3`,
        },
    ];

    return (
        <div>
            <Drawer
                // eslint-disable-next-line react/prop-types
                title={`Nhân viên: ${selectedUser?.applicationUser?.fullname}`}
                placement="right"
                width={900}
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
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </Drawer>
        </div>
    );
};
