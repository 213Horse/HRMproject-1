import { Table } from 'antd';
import {Link} from 'react-router-dom';
import '../style.css';
import { useEffect, useState } from 'react';
import {fetchAllDepartment} from '../../../services/department-api';


export default function Page() {
    return (
        <div className="page">
            <header>
                <h1>Danh sách phòng ban</h1>
                <button className="btn green">
                    <Link to="form">Thêm phòng ban</Link>
                </button>
            </header>
            <DepartmentList />
        </div>
    )
}

const dataSource = [
    {
        key: '1',
        name: 'Phòng nhân sự',
        description: 'Quản lý và phát triển nguồn nhân lực',
    },
    {
        key: '2',
        name: 'Phòng nghiên cứu và phát triển sản phẩm',
        description: 'Nghiên cứu và phát triển sản phẩm mới',
    },
    {
        key: '3',
        name: 'Phòng kế toán',
        description: 'Tính lương và trả lương cho nhân viên',
    },
    {
        key: '4',
        name: 'Phòng IT',
        description: 'Đảm nhận công việc liên quan phần mềm',
    },
    {
        key: '5',
        name: 'Phòng kinh doanh',
        description: 'Phân phối sản phẩm và tìm kiếm khách hàng mới',
    }, 
    {
        key: '6',
        name: 'Phòng kiểm toán',
        description: 'Kiểm tra và xác minh thông tin tài chính',
    },  
]

const columns = [
    {
        title: 'Tên',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Mô tả',
        dataIndex: 'description',
        key: 'description',
    },
]

function DepartmentList() {
    const [isLoading, setIsLoading] = useState(false);
    const [departmentList, setDepartmentList] = useState([]);

    useEffect(async () => {
        setIsLoading(true);
        const {status, data} = await getAllDepartment();
        setIsLoading(false);

        let staticId = 0;
        if (status === 200) {
            setDepartmentList(data.map(department => ({
                ...department,
                id: staticId++,
            })));
        }
    }, []);

    return (
        <main>
            <Table 
                dataSource={departmentList} 
                columns={columns}
                pagination={{pageSize: 9}}
                loading={isLoading}
            />
        </main>
    )
}

const getAllDepartment = async() => {
    try {
        const res = await fetchAllDepartment();
        const {status, data} = res;

        console.log(status, data);
        return {
            status,
            data,
        } 
    } catch (error) {
        console.log(error);
    }
}