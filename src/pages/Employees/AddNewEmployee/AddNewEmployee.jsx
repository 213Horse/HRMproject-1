import { Button, Col, DatePicker, Form, Input, Row, Select, theme } from 'antd';
import { Typography } from 'antd';
import { useEffect, useState } from 'react';
import { fetchPositions } from '../../../services/position-api';
import { validateAddNewEmployee } from '../../../utils/utilities';
const { Title } = Typography;

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

export const AddNewEmployee = () => {
    const { token } = theme.useToken();
    const [listPosition, setListPosition] = useState([]);
    const [error, setError] = useState({
        date: '',
    });

    const formStyle = {
        maxWidth: 'none',
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        margin: 24,
    };

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };

    useEffect(() => {
        (async function () {
            const token = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            };
            try {
                const res = await fetchPositions(token);
                if (res && res.data && res.status === 200) {
                    setListPosition(res.data);
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const hanldeOnChangeDate = (date) => {
        if (date) {
            const selectedYear = date.format('DD-MM-YYYY').split('-');
            const currentYear = new Date().getFullYear();
            if (currentYear - +selectedYear[2] < 18) {
                setError({ ...error, date: 'error' });
            } else {
                setError({ ...error, date: '' });
            }
        }
    };

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="mt-4"
            style={formStyle}
        >
            <Row style={{ marginRight: '50px' }}>
                <Col span={8}>
                    <Title level={3} className="text-center">
                        Thông tin cá nhân
                    </Title>
                    <Form.Item
                        label="Họ và tên"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Hãy thêm tên nhân viên',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Ngày sinh"
                        name="birthdate"
                        rules={[
                            {
                                required: true,
                                message: 'Hãy thêm ngày sinh',
                            },
                            {
                                validator: () => {
                                    return validateAddNewEmployee(error, 'date');
                                },
                            },
                        ]}
                    >
                        <DatePicker
                            disabledDate={(current) => {
                                if (current && current > Date.now()) {
                                    return true;
                                }
                            }}
                            allowClear
                            placeholder="chọn ngày"
                            style={{ width: '100%' }}
                            onChange={hanldeOnChangeDate}
                            format="DD-MM-YYYY"
                            status={error.date}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Số điện thoại"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Hãy thêm số điện thoại',
                            },
                            {
                                pattern: /^[0-9]{10,12}$/,
                                message: 'Số điện thoại không hợp lệ',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Hãy thêm email',
                            },
                            {
                                type: 'email',
                                message: 'email không hợp lệ',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Vai trò / Quyền"
                        name="role"
                        rules={[
                            {
                                required: true,
                                message: 'Hãy thêm quyền cho nhân viên',
                            },
                        ]}
                    >
                        <Select
                            style={{
                                width: '100%',
                            }}
                            options={[
                                {
                                    value: 'employee',
                                    label: 'Nhân viên',
                                },
                                {
                                    value: 'manager',
                                    label: 'Quản lý',
                                },
                            ]}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Địa chỉ"
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: 'Hãy thêm địa chỉ',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Quận"
                        name="district"
                        rules={[
                            {
                                required: true,
                                message: 'Hãy thêm địa chỉ',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Tỉnh"
                        name="province"
                        rules={[
                            {
                                required: true,
                                message: 'Hãy thêm địa chỉ',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <div>
                        <Title level={3} className="text-center">
                            Thông tin ngân hàng
                        </Title>
                        <Form.Item
                            label="Tên ngân hàng"
                            name="bankname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Tên ngân hàng không được để trống',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Tên in trên thẻ"
                            name="accountName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Tên tài khoản không được để trống',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Số tài khoản"
                            name="bankAccount"
                            rules={[
                                {
                                    required: true,
                                    message: 'Số tài khoản không được để trống',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Title level={3} className="text-center">
                            Tài khoản hệ thống
                        </Title>

                        <Form.Item
                            label="Tài khoản"
                            name="account"
                            rules={[
                                {
                                    required: true,
                                    message: 'Hãy thêm tài khoản',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Mật khẩu"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Mật khẩu không được để trống',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                    </div>
                </Col>
                <Col span={8}>
                    <Title level={3} className="text-center">
                        Căn cước công dân
                    </Title>
                    <Form.Item
                        label="Số căn cước công dân"
                        name="cccd"
                        rules={[
                            {
                                required: true,
                                message: 'Hãy thêm số căn cước công dân',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Ngày cấp"
                        name="date"
                        rules={[
                            {
                                required: true,
                                message: 'Hãy thêm ngày cấp',
                            },
                        ]}
                    >
                        <DatePicker format="DD-MM-YYYY" placeholder="chọn ngày" style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item
                        label="Nơi cấp"
                        name="place"
                        rules={[
                            {
                                required: true,
                                message: 'Hãy thêm nơi cấp',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Title level={3} className="text-center">
                        PositionId
                    </Title>

                    <Form.Item
                        label="PositionId"
                        name="positionId"
                        rules={[
                            {
                                required: true,
                                message: 'Hãy thêm vị trí làm việc',
                            },
                        ]}
                    >
                        <Select
                            style={{
                                width: '100%',
                            }}
                            options={listPosition.map((item) => {
                                return {
                                    value: item.departmentId,
                                    label: item.name,
                                };
                            })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row justify="center">
                <Form.Item
                    // wrapperCol={{
                    //     offset: 8,
                    //     span: 16,
                    // }}
                    className="text-center mt-4"
                >
                    <Button type="primary" htmlType="submit" size="large">
                        Thêm nhân viên
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};
