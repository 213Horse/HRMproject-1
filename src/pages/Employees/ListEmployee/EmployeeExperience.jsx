import { useEffect, useState } from 'react';
import { Col, Divider, Row } from 'antd';

import { fetchExperience } from '../../../services/employee-api';
import moment from 'moment/moment';

export const EmployeeExperience = (props) => {
    // eslint-disable-next-line react/prop-types
    const { userId } = props;
    const [listExperience, setListExperience] = useState([]);

    useEffect(() => {
        getExperience();
    }, [userId]);

    const getExperience = async () => {
        try {
            const token = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            };
            // eslint-disable-next-line react/prop-types
            const res = await fetchExperience(token, userId);
            if (res && res.data) {
                setListExperience(res.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // eslint-disable-next-line react/prop-types
    const DescriptionItem = ({ title, content }) => (
        <div>
            <span>{title}: </span>
            <span style={{ marginLeft: '6px', color: '#8d8d8d' }}>{content}</span>
        </div>
    );

    // console.log(listExperience);
    return (
        <div>
            {listExperience.length > 0 ? (
                listExperience.map((item) => {
                    return (
                        <div key={item.id}>
                            <Divider />
                            <span className="site-description-item-profile-p">Tên dự án : </span>
                            <span style={{ marginLeft: '6px', fontWeight: '500' }}>{item?.nameProject}</span>
                            <Row style={{ marginTop: '10px' }}>
                                <Col span={12}>
                                    <DescriptionItem title='Ngày bắt đầu' content={moment(item?.startDate).format('DD-MM-YYYY')}/>
                                </Col>
                                <Col span={12}>
                                    <DescriptionItem title='Số lượng người tham gia' content={item?.teamSize}/>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: '6px' }}>
                                <Col span={12}>
                                    <DescriptionItem title='Ngày kết thúc' content={moment(item?.endDate).format('DD-MM-YYYY')}/>
                                </Col>
                                <Col span={12}>
                                    <DescriptionItem title='Công nghệ sử dụng' content={item?.techStack}/>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: '6px' }}>
                                <Col span={24}>
                                    <div className="">
                                        <div>Miêu tả dự án: </div>
                                        <span style={{ color: '#8d8d8d' }}>{item?.description}</span>
                                    </div>
                                </Col>
                            </Row>
                            <Divider />
                        </div>
                    );
                })
            ) : (
                <h3 style={{margin: 'auto'}}>chưa có kinh nghiệm</h3>
            )}
        </div>
    );
};
