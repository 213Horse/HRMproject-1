/* eslint-disable react/no-unescaped-entities */
import { Table, Typography, theme } from "antd";
import './Payslip.css'
const { Text, Title } = Typography;

export const Payslip = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const dataSource = [
        {
            key: '1',
            name: <strong>Gross Salary</strong>,
            salary: '7,492,800 VNĐ',
        },
        {
            key: '2',
            name: <strong>Actual working day</strong>,
            workingday: '0/26 D',
            salary: '0 VNĐ',
        },
        {
            key: '3',
            name: <strong>Non Paid Leave</strong>,
            workingday: '0 D',
            salary: '0 VNĐ',
        },
        {
            key: '4',
            name: <strong>Paid Leave(C.P.W)</strong>,
            workingday: '0 D',
            salary: '0 VNĐ',
        },
        {
            key: '5',
            name: <strong>Overtime 150%</strong>,
            workingday: '0 H',
            salary: '0 VNĐ',
        },
        {
            key: '6',
            name: <strong>Overtime 200%</strong>,
            workingday: '0 H',
            salary: '0 VNĐ',
        },
        {
            key: '7',
            name: <strong>Overtime 300%</strong>,
            workingday: '0.00 H',
            salary: '0',
        },
        {
            key: '8',
            name: <strong>Overtime 400%</strong>,
            workingday: '0.00 H',
            salary: '0',
        },
        {
            key: '9',
            name: <strong>Total allowance</strong>,
            workingday: '',
            salary: '0',
        },
        {
            key: '10',
            name: <strong>Team Bonus</strong>,
            workingday: '',
            salary: '0',
        },
        {
            key: '11',
            name: <strong>Addition before tax</strong>,
            workingday: '',
            salary: '0 VNĐ',
        },
    ];

    const columns = [
        {
            title: '',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <div className="first-column">{text}</div>,
        },
        {
            title: '',
            dataIndex: 'workingday',
            key: 'workingday',
        },
        {
            title: '',
            dataIndex: 'salary',
            key: 'salary',
        },
    ];

    return (
        <div
            className="payslipWrapper"
            style={{ background: colorBgContainer }}
        >
            <div className="payslipWrapper__userInfo">
                <div className="payslipWrapper__userInfo-item">
                    <Text strong>Date: </Text>
                    <Text className="userInfo-item__dataInfo">29-5-2023</Text>
                </div>
                <div className="payslipWrapper__userInfo-item">
                    <Text strong>Employee's Name: </Text>
                    <Text className="userInfo-item__dataInfo">Hồng Minh</Text>
                </div>
                <div className="payslipWrapper__userInfo-item">
                    <Text strong>Card ID:</Text>
                    <Text className="userInfo-item__dataInfo">004343</Text>
                </div>
                <div className="payslipWrapper__userInfo-item">
                    <Text strong>Role: </Text>
                    <Text className="userInfo-item__dataInfo">Manager</Text>
                </div>
                <Title level={3} style={{ marginTop: '10px' }}>Gross salary</Title>
                <Table 
                    dataSource={dataSource} 
                    columns={columns} 
                    // className="no-header-table" 
                    showHeader={false}
                    pagination={false} 
                    bordered
                />

            </div>
        </div>
    )
}
