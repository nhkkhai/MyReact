import { Input, Button } from "antd";
import './user.form.css'

const UserForm = () => {
    return (
        <div className="user_form">

            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <div className="user_info">
                    <span className="user_info-title">FullName</span>
                    <Input />
                </div>
                <div className="user_info">
                    <span className="user_info-title">Email</span>
                    <Input />
                </div>
                <div className="user_info">
                    <span className="user_info-title">Password</span>
                    <Input.Password />
                </div>
                <div className="user_info">
                    <span className="user_info-title">Phone Number</span>
                    <Input />
                </div>
                <div>
                    <Button type="primary">Primary Button</Button>

                </div>
            </div>


        </div>
    );
}

export default UserForm