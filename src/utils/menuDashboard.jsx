import {
    BookOutlined,
    CalendarOutlined,
    CarryOutOutlined,
    DollarOutlined,
    FieldTimeOutlined,
    FileDoneOutlined,
    FilePdfOutlined,
    FileTextOutlined,
    GlobalOutlined,
    HighlightOutlined,
    HistoryOutlined,
    IdcardOutlined,
    PlusCircleOutlined,
    ScheduleOutlined,
    SolutionOutlined,
    SwapOutlined,
    TeamOutlined,
    UsergroupAddOutlined,
    SnippetsOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

/**
 *! Menu sidebar with role HR
 */
export const itemsMenuHR = [
    {
        key: 'sub1',
        icon: <TeamOutlined />,
        label: (
            <Link to="/admin" className="text-white">
                Quản lý nhân viên
            </Link>
        ),
        children: [
            {
                key: '1',
                icon: <SolutionOutlined />,
                label: (
                    <Link to="" className="text-white">
                        Xem danh sách nhân viên
                    </Link>
                ),
            },
            {
                key: '2',
                icon: <UsergroupAddOutlined />,
                label: <Link to="add-new-employee">Thêm nhân viên</Link>,
            },
        ],
    },
    {
        key: 'shb2',
        icon: <GlobalOutlined />,
        label: (
            <Link to="/admin/attendance" className="text-white">
                Quản lý phòng ban
            </Link>
        ),
        children: [
            {
                key: '3',
                icon: <BookOutlined />,
                label: <Link to="#">Danh sách phòng ban</Link>,
            },
        ],
    },
    {
        key: 'sub3',
        icon: <TeamOutlined />,
        label: (
            <Link to="#" className="text-white">
                Quản lý phụ cấp
            </Link>
        ),
        children: [
            {
                key: '4',
                icon: <TeamOutlined />,
                label: <Link to="/admin/allowance">Danh sách phụ cấp</Link>,
            },
            {
                key: '5',
                icon: <TeamOutlined />,
                label: <Link to="#">Danh sách các loại phụ cấp</Link>,
            },
        ],
    },
    {
        key: 'sub4',
        icon: <CalendarOutlined />,
        label: (
            <Link to="#" className="text-white">
                Tính lương
            </Link>
        ),
        children: [
            {
                key: '6',
                icon: <TeamOutlined />,
                label: <Link to="#">Tính lương dựa trên hợp đồng</Link>,
            },
            {
                key: '7',
                icon: <TeamOutlined />,
                label: <Link to="#">Tính lương dựa trên thông tin tự nhập</Link>,
            },
            {
                key: '8',
                icon: <TeamOutlined />,
                label: <Link to="#">Tính lương dựa trên thông tin tự nhập</Link>,
            },
        ],
    },
    {
        key: 'sub5',
        icon: <FileDoneOutlined />,
        label: (
            <Link to="#" className="text-white">
                Quản lý tăng ca
            </Link>
        ),
        children: [
            {
                key: '9',
                icon: <TeamOutlined />,
                label: <Link to="#">Danh sách tăng ca</Link>,
            },
            {
                key: '10',
                icon: <TeamOutlined />,
                label: <Link to="#">Phê duyệt yêu cầu tăng ca</Link>,
            },
        ],
    },
    {
        key: 'sub6',
        icon: <ScheduleOutlined />,
        label: 'Quản lý nghỉ phép',
        children: [
            {
                key: '11',
                icon: <TeamOutlined />,
                label: <Link to="#">Danh sách yêu cầu nghỉ phép</Link>,
            },
            {
                key: '12',
                icon: <TeamOutlined />,
                label: <Link to="#">Phê duyệt yêu cầu tăng ca</Link>,
            },
        ],
    },
    {
        key: 'sub7',
        icon: <SnippetsOutlined />,
        label: (
            <Link to="#" className="text-white">
                Quản lý chức vụ
            </Link>
        ),
        children: [
            {
                key: '13',
                icon: <TeamOutlined />,
                label: <Link to="/admin/position">Danh sách chức vụ</Link>,
            },
        ],
    },
];

/**
 *! Menu sidebar with role Employees
 */
export const itemMenuEmployee = [
    {
        key: 'sub1',
        icon: <IdcardOutlined />,
        label: <Link to="#">Thông tin</Link>,
        children: [
            {
                key: '1',
                icon: <FileDoneOutlined />,
                label: <Link to="#">Hợp đồng</Link>,
            },
            {
                key: '2',
                icon: <BookOutlined />,
                label: <Link to="#">Kinh nghiệm</Link>,
            },
            {
                key: '3',
                icon: <HighlightOutlined />,
                label: <Link to="#">Skill</Link>,
            },
            {
                key: '4',
                icon: <FilePdfOutlined />,
                label: <Link to="#">CV</Link>,
            },
            {
                key: '5',
                icon: <UsergroupAddOutlined />,
                label: <Link to="#">Người phụ thuộc</Link>,
            },
            {
                key: '6',
                icon: <PlusCircleOutlined />,
                label: <Link to="#">Phụ cấp</Link>,
            },
            {
                key: '7',
                icon: <FileTextOutlined />,
                label: <Link to="#">Bằng cấp</Link>,
            },
        ],
    },
    {
        key: 'sub2',
        icon: <DollarOutlined />,
        label: <Link to="#">Quản lý lương</Link>,
        children: [
            {
                key: '8',
                icon: <HistoryOutlined />,
                label: <Link to="#">Lịch sử nhận lương</Link>,
            },
        ],
    },
    {
        key: 'sub3',
        icon: <FieldTimeOutlined />,
        label: <Link to="#">Tăng ca</Link>,
        children: [
            {
                key: '9',
                icon: <CarryOutOutlined />,
                label: <Link to="#">Quản lý tăng ca</Link>,
            },
            {
                key: '10',
                icon: <SwapOutlined />,
                label: <Link to="#">Gửi yêu cầu xác nhận tăng ca</Link>,
            },
        ],
    },
    {
        key: '11',
        icon: <CalendarOutlined />,
        label: <Link to="#">Quản lý nghỉ phép</Link>,
    },
];
