import {
    CalendarOutlined,
    DashboardOutlined,
    DownOutlined,
    FileDoneOutlined,
    FileZipOutlined,
    GlobalOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    MoneyCollectOutlined,
    NodeExpandOutlined,
    ScheduleOutlined,
    SettingOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Dropdown, Layout, Menu, Space, Typography, theme } from 'antd';
import { useState } from 'react';
const { Header, Content, Footer, Sider } = Layout;
import avatar from '../../assets/image/avatar-mentor-1.jpg'

const itemsMenu = [
    {
        key: '1',
        icon: <DashboardOutlined />,
        label: 'Dashboard',
    },
    {
        key: '2',
        icon: <GlobalOutlined />,
        label: 'Manage Companies',
    },
    {
        key: '3',
        icon: <TeamOutlined />,
        label: 'Manage Employees',
    },
    {
        key: '4',
        icon: <CalendarOutlined />,
        label: 'Manage Holidays',
    },
    {
        key: '5',
        icon: <FileDoneOutlined />,
        label: 'Manage Contracts',
    },
    {
        key: '6',
        icon: <NodeExpandOutlined />,
        label: 'Log OT',
    },
    {
        key: '7',
        icon: <ScheduleOutlined />,
        label: 'Log Leave',
    },
    {
        key: '8',
        icon: <MoneyCollectOutlined />,
        label: 'Create Salary',
    },
    {
        key: '9',
        icon: <FileZipOutlined />,
        label: 'Manage Payslips',
    },
    {
        key: '10',
        icon: <SettingOutlined />,
        label: 'Settings',
    },
];

const items = [
    {
        key: '1',
        label: (
            <span>Logout</span>
        ),
    },
]


const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Typography.Title
                    level={5}
                    style={{
                        height: '32px',
                        margin: '16px',
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        color: '#fff',
                        fontSize: '14px',
                        textAlign: 'center',
                        lineHeight: '32px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        borderRadius: '4px'
                    }}
                >
                    HRM
                </Typography.Title>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={itemsMenu} />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: '0 16px 0 5px',
                        background: colorBgContainer,
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <Dropdown
                        menu={{ items }}
                        dropdownRender={(menu) => <div className="dropdown-logout" style={{width: 'fit-content', marginLeft: '50px'}}>{menu}</div>}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Avatar size={50} src={avatar} />
                            <Space
                                style={{
                                    marginLeft: '10px',
                                    color:'black'
                                }}
                            >
                                <span className="fw-bold fs-6" style={{width: 'fit-content'}}>Hồng Minh</span>
                                <DownOutlined style={{display: 'block'}}/>
                            </Space>
                        </a>
                    </Dropdown>
                </Header>
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            marginTop: 20,
                            minHeight: 360,
                            background: colorBgContainer,
                            height: '100%'
                        }}
                    >
                        Bill is a cat.
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default Dashboard;