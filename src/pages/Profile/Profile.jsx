import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Row, Tabs, Typography, theme } from "antd";
import avatar from '../../assets/image/avatar-mentor-1.jpg'
import { Individual } from "./Individual/Individual";
import './profile.css'

const { Text, Title } = Typography;
export const Profile = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const onChange = (key) => {
        console.log(key);
    };

    const items = [
        {
            key: '1',
            label: <Title level={5} className="labelItem">Cá nhân</Title>,
            children: <Individual />,
        },
        {
            key: '2',
            label: <Title level={5} className="labelItem">Công ty</Title>,
            children: `Công ty`,
        },
        {
            key: '3',
            label: <Title level={5} className="labelItem">Gia đình</Title>,
            children: `Gia đình`,
        },
        {
            key: '4',
            label: <Title level={5} className="labelItem">Học tập</Title>,
            children: `Học tập`,
        },
        {
            key: '5',
            label: <Title level={5} className="labelItem">Đào tạo</Title>,
            children: `Đào tạo`,
        },
        {
            key: '6',
            label: <Title level={5} className="labelItem">NN-VT</Title>,
            children: `NN-VT`,
        },
        {
            key: '7',
            label: <Title level={5} className="labelItem">Kỹ năng</Title>,
            children: `Kỹ năng`,
        },
        {
            key: '8',
            label: <Title level={5} className="labelItem">Sở thích</Title>,
            children: `Sở thích`,
        },
        {
            key: '9',
            label: <Title level={5} className="labelItem">Lịch sử làm việc</Title>,
            children: `Lịch sử làm việc`,
        },
        {
            key: '10',
            label: <Title level={5} className="labelItem">Thông tin khác</Title>,
            children: `Thông tin khác`,
        },
    ];

    return (
        <div
            style={{ background: colorBgContainer }}
            className="profileWrapper"
        >
            <Row gutter={17}
                style={{
                    width: 'fit-content',
                    margin: '0 auto'
                }}
            >
                <Col flex="none">
                    <div className="user">
                        <Avatar size={90} src={avatar} icon={<UserOutlined />} className="avatar" />
                        <Typography.Title
                            level={4}
                        >
                            Hồng Minh
                        </Typography.Title>
                        <div className="data">
                            <Text strong>Role: </Text>
                            <Text className="dataInfo">Employee</Text>
                        </div>
                        <div className="data">
                            <Text strong>Department:</Text>
                            <Text className="dataInfo">Customer Support</Text>
                        </div>
                        <div className="data">
                            <Text strong>EmployeeID: </Text>
                            <Text className="dataInfo">008727</Text>
                        </div>
                        <Row className="userFooter">
                            <Col span={12} className="leave" >
                                <div >1/12</div>
                                <Text>LEAVE</Text>
                            </Col>
                            <Col span={12} className="totalStaff">
                                <div >7</div>
                                <Text>Total staff</Text>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col>
                    <div className="userInfo">
                        <Tabs defaultActiveKey="1" items={items} onChange={onChange}/>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
