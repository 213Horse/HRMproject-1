import { Button, Drawer, Space, Tabs } from 'antd';
import { EmployeeSkill } from './EmployeeSkill';
import { EmployeeExperience } from './EmployeeExperience';
import { EmployeeDependent } from './EmployeeDependent';

export const EmployeeDetail = (props) => {
    // eslint-disable-next-line react/prop-types
    const { open, onClose, userId, userName } = props;

    const onChange = () => {
        // console.log(key);
    };

    const items = [
        {
            key: '1',
            label: `Kỹ năng`,
            children: <EmployeeSkill userId={userId}/>,
        },
        { 
            key: '2',
            label: `Kinh nghiệm`,
            children: <EmployeeExperience userId={userId}/>,
        },
        { 
            key: '3',
            label: `CV`,
            children: `CV`,
        },
        {
            key: '4',
            label: `Người phụ thuộc`,
            children: <EmployeeDependent userId={userId}/>,
        },
        {
            key: '5',
            label: `Phụ cấp`,
            children: `Phụ cấp`,
        },
    ];

    return (
        <div>
            <Drawer
                // eslint-disable-next-line react/prop-types
                title={`Nhân viên: ${userName}`}
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
