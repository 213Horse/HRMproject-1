import {
    DownOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Layout, Menu, Popover, Space, Typography, theme } from 'antd';
import { useState } from 'react';
import {  Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import avatar from '../../assets/image/avatar-mentor-1.jpg'
import styles from './Dashboard.module.css'
import { itemsMenuHR, itemMenuEmployee } from '../../utils/menuDashboard';
import { logout } from '../../services/auth-api';
import { doLogoutAction } from '../../redux/account/accountSlice';

const Dashboard = () => {
    const { Header, Content, Footer, Sider } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    // eslint-disable-next-line no-unused-vars
    const [menu, setMenu] = useState('hr');
    const userAccount = useSelector((state) => state.account.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            const res = await logout();
            if(res.status === 200) {
                navigate('/')
                localStorage.removeItem('user'); 
                localStorage.removeItem('token');
                dispatch(doLogoutAction())
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Layout
            className={clsx(styles.dashboard)}
        >
            <Sider
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                style={{ width: '500px' }}
            >
                <Typography.Title
                    level={5}
                    className={`${clsx(styles.dashboard__logo)} text-white`}
                >
                    Manager 
                </Typography.Title>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" className={clsx(styles.menuSideBar)} items={menu === 'hr' ? itemsMenuHR : itemMenuEmployee} />
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
                    <Popover placement="bottom" content={<a onClick={() => handleLogout()}>Logout</a>} trigger="click" style={{ width: '500px' }}>
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
                                {userAccount && userAccount.FullName}
                            </Typography.Title>
                            <DownOutlined className={clsx(styles.dropdownIcon)}/>
                        </Space>
                    </Popover>
                </Header>
                <Content
                    className={clsx(styles.mainContent)}
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