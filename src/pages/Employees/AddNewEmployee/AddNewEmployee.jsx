import { Button, Col, Form, Input, Row } from 'antd';
import { Divider, Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

export const AddNewEmployee = () => (
    <Form
        name="basic"
        labelCol={{
            span: 8,
        }}
        wrapperCol={{
            span: 16,
        }}
        style={{
            width: '100%',
        }}
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className='mt-4'
    >
        <Row justify="center" >
            <Col  span={8} >
                <Title level={3} className='text-center'>Thông tin cá nhân</Title>
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
                    label="Ngày sinh"
                    name="birthdate"
                    rules={[
                        {
                            required: true,
                            message: 'Hãy thêm ngày sinh',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Số điện thoại"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: 'Hãy thêm số điện thoại',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Hãy thêm email',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col  span={8} >
                <div>
                  <Title level={3} className='text-center'>Thông tin ngân hàng</Title>
                  <Form.Item
                      label="Tên ngân hàng"
                      name="bankname"
                      rules={[
                          {
                              required: true,
                              message: 'Hãy thêm tên ngân hàng',
                          },
                      ]}
                  >
                      <Input />
                  </Form.Item>
  
                  <Form.Item
                      label="Số tài khoản"
                      name="account"
                      rules={[
                          {
                              required: true,
                              message: 'Hãy thêm số tài khoản',
                          },
                      ]}
                  >
                      <Input />
                  </Form.Item>
  
                  <Form.Item
                      label="Tên tài khoản"
                      name="accountName"
                      rules={[
                          {
                              required: true,
                              message: 'Hãy thêm tên tài khoản',
                          },
                      ]}
                  >
                      <Input />
                  </Form.Item>
  
                  <Form.Item
                      label="Số điện thoại"
                      name="phone"
                      rules={[
                          {
                              required: true,
                              message: 'Hãy thêm số điện thoại',
                          },
                      ]}
                  >
                      <Input />
                  </Form.Item>
  
                  <Form.Item
                      label="email"
                      name="email"
                      rules={[
                          {
                              required: true,
                              message: 'Hãy thêm email',
                          },
                      ]}
                  >
                      <Input />
                  </Form.Item>
                </div>
            </Col>
            <Col  span={8} >
                <Title level={3} className='text-center'>Căn cước công dân</Title>
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
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Nơi cấp"
                    name=""
                    rules={[
                        {
                            required: true,
                            message: 'Hãy thêm nơi cấp',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Số điện thoại"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: 'Hãy thêm số điện thoại',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Hãy thêm email',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Col>
        </Row>

        <Row  justify="center">
          <Form.Item
              // wrapperCol={{
              //     offset: 8,
              //     span: 16,
              // }}
              className='text-center mt-4'
          >
              <Button type="primary" htmlType="submit">
                  Thêm nhân viên
              </Button>
          </Form.Item>
        </Row>
    </Form>
);
