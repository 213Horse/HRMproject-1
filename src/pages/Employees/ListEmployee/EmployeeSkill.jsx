import { useEffect, useState } from 'react';
import { fetchListSkill } from '../../../services/employee-api';
import { Popconfirm, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import clsx from 'clsx';

export const EmployeeSkill = (props) => { 
    // eslint-disable-next-line react/prop-types
    const { userId } = props;
    const [listSkill, setListSkill] = useState([]);

    useEffect(() => {
        getEmployeeSkill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);

    const getEmployeeSkill = async () => {
        try {
            const token = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            };
            // eslint-disable-next-line react/prop-types
            const res = await fetchListSkill(token, userId);
            if (res && res.data) {
                setListSkill(res.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const columns = [
        {
            title: 'Tên kỹ năng',
            dataIndex: 'name',
        },
        {
            title: 'Trình độ',
            dataIndex: 'level',
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
        },
        {
            title: 'Hành động',
            dataIndex: 'action',
            render: (_, record) => (
                <>
                    <Popconfirm title="Xóa nhân viên này ?" onConfirm={() => confirm(record.key)} okText="Có" cancelText="Không">
                        <a>
                            <DeleteOutlined style={{fontSize: '18px', color: 'red'}}/>
                        </a>
                    </Popconfirm>
                    <a style={{marginLeft: '10px'}}>
                        <EditOutlined  style={{fontSize: '18px'}}/>
                    </a>
                </>
            ),
        },
        
    ];

    // const renderHeader = () => {
    //     return (
    //       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    //         <span></span>
    //         <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    //           <Button
    //             type="primary"
    //             icon={<PlusCircleOutlined />}
    //           >
    //             Add New
    //           </Button>
    //         </div>
    //       </div>
    //     )
    //   } 

    const data =
        listSkill.length > 0 &&
        listSkill.map((item, index) => {
            return {
                key: index,
                skill: 'John Brown',
                level: item.level,
                name: item?.skill?.skillName,
                description: item?.skill?.skill_Description,
            };
        });

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    // console.log(listSkill);
    return <Table columns={columns} dataSource={data} onChange={onChange} pagination={false} />;
};
