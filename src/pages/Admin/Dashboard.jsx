import {
    CalendarOutlined,
    DashboardOutlined,
    DownOutlined,
    FileDoneOutlined,
    GlobalOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    NodeExpandOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Dropdown, Layout, Menu, Space, Typography, theme } from 'antd';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import avatar from '../../assets/image/avatar-mentor-1.jpg'
import './Dashboard.css'

const itemsMenuHR = [
    {
        key: '1',
        icon: <DashboardOutlined />,
        label: <Link to='/admin'>Dashboard</Link>,
    },
    {
        key: '2',
        icon: <GlobalOutlined />,
        label: <Link to='/admin/attendance'>Attendance</Link>,
    },
    {
        key: 'sub1',
        icon: <TeamOutlined />,
        label: 'Ticket Management',
        children: [
            {
                key: '3',
                icon: <TeamOutlined />,
                label: 'Leave of Absent',
            },
            {
                key: '4',
                icon: <TeamOutlined />,
                label: 'Overtime',
            }
        ]
    },
    {
        key: '5',
        icon: <CalendarOutlined />,
        label: 'Holidays',
    },
    {
        key: '6',
        icon: <FileDoneOutlined />,
        label: 'Review Performance',
    },
    {
        key: '7',
        icon: <NodeExpandOutlined />,
        label: 'Feedbacks',
    }
];

const itemsMenuAccounting = [
    {
        key: '1',
        icon: <DashboardOutlined />,
        label: 'Dashboard',
    },
    {
        key: '2',
        icon: <GlobalOutlined />,
        label:  <Link to='/admin/payslip'>Payslip manager</Link>,
    }
]

const items = [
    {
        key: '1',
        label: (
            <span>Logout</span>
        ),
    },
]

const Dashboard = () => {
    const { Header, Content, Footer, Sider } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [menu, setMenu] = useState('acc');

    return (
        <Layout
            className='dashboard'
        >
            <Sider
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                style={{ width: '500px' }}
            >
                <div className="demo-logo-vertical" />
                <Typography.Title
                    level={5}
                    className='dashboard__logo'
                >
                    HR
                </Typography.Title>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={menu === 'hr' ? itemsMenuHR : itemsMenuAccounting} />
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
                        dropdownRender={(menu) => <div className="dropdown-logout" style={{ width: 'fit-content', marginLeft: '50px' }}>{menu}</div>}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Avatar size={50} src={avatar} />
                            <Space
                                style={{
                                    marginLeft: '10px',
                                    color: 'black'
                                }}
                            >
                                <span className="fw-bold fs-6" style={{ width: 'fit-content' }}>Hồng Minh</span>
                                <DownOutlined style={{ display: 'block' }} />
                            </Space>
                        </a>
                    </Dropdown>
                </Header>
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Outlet />
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