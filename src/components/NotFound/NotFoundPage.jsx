import { Button, Result } from "antd";
import { useNavigate } from "react-router";

export const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <Result
            status="404"
            title="404"
            subTitle="không tìm thấy trang"
            extra={<Button type="primary" onClick={() => navigate('/admin')}>Về trang chủ</Button>}
        />
    );
};
