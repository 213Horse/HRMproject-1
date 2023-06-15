/* eslint-disable react/prop-types */
import { Button, Col, DatePicker, Empty, Form, Input, Row, Select, theme } from 'antd';
import { Typography } from 'antd';
import { useEffect, useState } from 'react';
import { getListProsition } from '../../../services/position-api';
import { validateAddNewEmployee } from '../../../utils/utilities';
import axios from 'axios';
const { Title } = Typography;

// eslint-disable-next-line no-unused-vars
export const AddNewEmployee = (props) => {
    // const [form] = Form.useForm();
    const { token } = theme.useToken();
    const [listPosition, setListPosition] = useState([]);
    // const [provincesSelected, setProvincesSelected] = useState([]);
    const [listPlace, setListPlace] = useState({
        pro: [],
        dis: [],
    });
    const [residence, setResidence] = useState({
        provincesSelector: [],
    });

    useEffect(() => {
        (async function () {
            const token = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            };
            try {
                const res = await getListProsition(token);
                if (res && res.data && res.status === 200) {
                    setListPosition(res.data);
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    // fetch list province and district
    useEffect(() => {
        const fetchData = async () => {
            try {
                const provincesRes = await axios.get('https://provinces.open-api.vn/api/p');
                const districtsRes = await axios.get('https://provinces.open-api.vn/api/d');

                if (
                    provincesRes.data &&
                    provincesRes.status === 200 &&
                    districtsRes.data &&
                    districtsRes.status === 200
                ) {
                    const provinces = provincesRes.data.map((item) => ({
                        value: item.code,
                        label: item.name,
                    }));

                    setResidence({ ...residence, provincesSelector: [...provinces] });
                    setListPlace({ ...listPlace, pro: [...provincesRes.data], dis: [...districtsRes.data] });
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const onFinish = async (values) => {
        try {
            // Call a function to validate the form values
            await validateForm(values);

            // If the validation passes, log the values
            console.log('Success:', values);
        } catch (error) {
            // Handle the validation error
            console.log('Validation Error:', error);
        }
    };

    const validateForm = async (values) => {
        const { date, birthdate, password, cccd, bankAccount } = values;

        // Create an array of promises for individual field validations
        const validationPromises = [
            validateAddNewEmployee(date, 'date'),
            validateAddNewEmployee(birthdate, 'birthdate'),
            validateAddNewEmployee(password, 'password'),
            validateAddNewEmployee(cccd, 'cccd'),
            validateAddNewEmployee(bankAccount, 'bankAccount'),
        ];

        // Wait for all promises to resolve
        await Promise.all(validationPromises);
    };

    // const onFill = () => {
    //     form.setFieldsValue({
    //         username: 'Hello world!',
    //         birthdate: 'male',
    //         phone: '',
    //         email: '',
    //         address: '',
    //         province: '',
    //         district: '',
    //         bankname: '',
    //         accountName: '',
    //         bankAccount: '',
    //         account: '',
    //         password: '',
    //         cccd: '',
    //         date: '',
    //         place: '',
    //         position: ''
    //     })
    // }

    console.log(listPosition);
    return (
        <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            // form={onFill}
            onFinish={onFinish}
            autoComplete="off"
            className="mt-4"
            style={{
                maxWidth: 'none',
                background: token.colorFillAlter,
                borderRadius: token.borderRadiusLG,
                margin: 24,
            }}
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
                                validator: (_, value) => {
                                    return validateAddNewEmployee(value, 'birthdate');
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
                            format="DD-MM-YYYY"
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
                        label="Tỉnh"
                        name="province"
                        rules={[
                            {
                                required: true,
                                message: 'Hãy thêm địa chỉ',
                            },
                        ]}
                    >
                        <Select
                            showSearch
                            onChange={(value) => {
                                setResidence(() => {
                                    const result = listPlace?.dis
                                        ?.filter((item) => item.province_code === value)
                                        .map((item) => {
                                            return {
                                                value: item.name,
                                                label: item.name,
                                            };
                                        });
                                    return {
                                        ...residence,
                                        districts: result,
                                    };
                                });
                            }}
                            style={{
                                width: '100%',
                            }}
                            placeholder="Chọn tỉnh/thành phố"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={residence.provincesSelector}
                        />
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
                        <Select
                            notFoundContent={<Empty description={'hãy chọn tỉnh thành phố trước'} />}
                            showSearch
                            style={{
                                width: '100%',
                            }}
                            placeholder="Chọn quận/huyện"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={residence.provincesSelector.length > 0 && residence.districts}
                        />
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
                                    validator: (_, value) => {
                                        return validateAddNewEmployee(value, 'bankAccount');
                                    },
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        {!props.isUpdate ? (
                            <>
                                <Title level={3} className="text-center">
                                    Tài khoản hệ thống
                                </Title>

                                <Form.Item
                                    label="Tài khoản"
                                    name="account"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Tài khoản không được bỏ trống',
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
                                            validator: (_, value) => {
                                                return validateAddNewEmployee(value, 'password');
                                            },
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>
                            </>
                        ) : (
                            <></>
                        )}
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
                                validator: (_, value) => {
                                    return validateAddNewEmployee(value, 'cccd');
                                },
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
                                validator: (_, value) => {
                                    return validateAddNewEmployee(value, 'date');
                                },
                            },
                        ]}
                    >
                        <DatePicker
                            format="DD-MM-YYYY"
                            placeholder="chọn ngày"
                            style={{ width: '100%' }}
                            disabledDate={(current) => {
                                if (current && current > Date.now()) {
                                    return true;
                                }
                            }}
                        />
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
                        Vị trí làm việc
                    </Title>

                    <Form.Item
                        label="PositionId"
                        name="position"
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
            {props.isUpdate ? (
                <></>
            ) : (
                <Row justify="center">
                    <Button type="primary" htmlType="submit" size="large">
                        Thêm nhân viên
                    </Button>
                </Row>
            )}
        </Form>
    );
};
