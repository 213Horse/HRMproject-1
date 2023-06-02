import {
    DownOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Layout, Menu, Popover, Space, Typography, theme } from 'antd';
import { useState } from 'react';
import {  Outlet } from 'react-router-dom';

import avatar from '../../assets/image/avatar-mentor-1.jpg'
import './Dashboard.css'
import { itemsMenuHR, itemMenuEmployee } from '../../utils/menuDashboard';


const Dashboard = () => {
    const { Header, Content, Footer, Sider } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    // eslint-disable-next-line no-unused-vars
    const [menu, setMenu] = useState('hr');

    return (
        <Layout
            className='dashboard'
        >
            <Sider
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                style={{ width: '500px' }}
            >
                <Typography.Title
                    level={5}
                    className='dashboard__logo text-white'
                >
                    HR
                </Typography.Title>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={menu === 'hr' ? itemsMenuHR : itemMenuEmployee} />
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
                    <Popover placement="bottom" content={<a >Logout</a>} trigger="click" style={{ width: '500px' }}>
                        <Avatar size={50} src={avatar} style={{ cursor: 'pointer' }} />
                        <Space
                            style={{
                                marginLeft: '10px',
                                color: 'black'
                            }}
                        >
                            <Typography.Title
                                level={4}
                                className="fs-6"
                                style={{ width: 'fit-content', cursor: 'pointer' }}
                            >
                                Hồng Minh
                            </Typography.Title>
                            <DownOutlined className='dropdownIcon'/>
                        </Space>
                    </Popover>
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