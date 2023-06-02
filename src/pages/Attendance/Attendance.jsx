import { theme } from "antd";


export const Attendance = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <div
            style={{
                padding: 24,
                marginTop: 20,
                minHeight: 360,
                background: colorBgContainer,
                height: '100%'
            }}
        >
            Attendance
        </div>
    )
}
