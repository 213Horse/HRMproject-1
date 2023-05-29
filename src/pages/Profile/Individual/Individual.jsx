import { Checkbox, Col, Input, Row, Select } from "antd"
import { Typography } from 'antd';
import './individual.css'

export const Individual = () => {
    const { Title } = Typography;



    return (
        <Row>
            <Col span={12}>
                <Title level={3}>Nơi cư trú</Title>
                <div className="born">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <label>Ngày sinh: </label>
                        <Input name="username" className='inputWidth' value='15/12/1965' />
                    </div>
                    <div className="bornItem">
                        <label>Nơi sinh: </label>
                        <Input name="username" className='inputWidth' value='Hà Nội' />
                    </div>
                    <div className="bornItem">
                        <label>Nguyên quán: </label>
                        <Input name="username" className='inputWidth' value='Hà Nội' />
                    </div>
                    <div className="bornItem">
                        <label>Quốc tịch: </label>
                        <Input name="username" className='inputWidth' value='Việt Nam' />
                    </div>
                </div>
                <Title level={3} style={{ marginTop: '10px' }}>Địa chỉ thường trú</Title>
                <div className="born">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <label>Địa chỉ: </label>
                        <Input name="username" className='inputWidth' />
                    </div>
                    <div className='bornItem'>
                        <label>Tỉnh TP: </label>
                        <Select
                            defaultValue="---Chọn TP---"
                            className='inputWidth'
                            // onChange={handleChange}
                            options={[
                                { value: 'jack', label: 'Jack' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yiminghe' },
                                { value: 'disabled', label: 'Disabled', disabled: true },
                            ]}
                        />
                    </div>
                    <div className='bornItem'>
                        <label>Quận huyện: </label>
                        <Input name="username" className='inputWidth' />
                    </div>
                    <div className='bornItem'>
                        <label>Điện thoại: </label>
                        <Input name="username" className='inputWidth' value='0399800471' />
                    </div>
                </div>
                <Title level={3} style={{ marginTop: '10px' }}>Skill</Title>
                <Checkbox style={{ marginLeft: '20px' }}>có bằng lái xe</Checkbox>
            </Col>
            <Col span={12}>
                <Title level={3} >Địa chỉ liên hệ</Title>
                <div className="addressContact">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <label>Địa chỉ: </label>
                        <Input name="username" className='inputWidth' />
                    </div>
                    <div className='bornItem'>
                        <label>Tỉnh TP: </label>
                        <Input name="username" className='inputWidth' />
                    </div>
                    <div className='bornItem'>
                        <label>Quận huyện: </label>
                        <Input name="username" className='inputWidth' />
                    </div>
                    <div className='bornItem'>
                        <label>Điện thoại: </label>
                        <Input name="username" className='inputWidth' />
                    </div>
                    <div className='bornItem'>
                        <label>Di động: </label>
                        <Input name="username" className='inputWidth' value='0399800471' />
                    </div>
                    <div className='bornItem'>
                        <label>Email: </label>
                        <Input name="username" className='inputWidth' value='vuanhlam000@gmail.com' />
                    </div>
                    <div className='bornItem'>
                        <label>Số CMND: </label>
                        <Input name="username" className='inputWidth' value='16556456465' />
                    </div>
                    <div className='bornItem'>
                        <label>Ngày cấp CMND: </label> 
                        <Input name="username" className='inputWidth' value='2/5/2015' />
                    </div>
                    <div className='bornItem'>
                        <label>Nơi cấp CMND: </label>
                        <Input name="username" className='inputWidth' value='Hà Nội' />
                    </div>
                    <div className='bornItem'>
                        <label>Dân tộc: </label>
                        <Input name="username" className='inputWidth' value='Kinh' />
                    </div>
                    <div className='bornItem'>
                        <label>Tôn giáo: </label>
                        <Input name="username" className='inputWidth' />
                    </div>
                    <div className='bornItem'>
                        <label>Hôn nhân: </label>
                        <Select
                            defaultValue="Độc thân"
                            className='inputWidth'
                            // onChange={handleChange}
                            options={[
                                { value: 'jack', label: 'Jack' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yiminghe' },
                                { value: 'disabled', label: 'Disabled', disabled: true },
                            ]}
                        />
                    </div>
                    <div className='bornItem'>
                        <label>Nhóm máu: </label>
                        <Select
                            defaultValue="A"
                            className='inputWidth'
                            // onChange={handleChange}
                            options={[
                                { value: 'jack', label: 'Jack' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yiminghe' },
                                { value: 'disabled', label: 'Disabled', disabled: true },
                            ]}
                        />
                    </div>
                </div>
            </Col>
        </Row>
    )
}
