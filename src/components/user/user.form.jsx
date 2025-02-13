import { Input, Button } from "antd";
import './user.form.css'
import { useState } from "react";

const UserForm = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleClickBtn = () => {
        console.log(">> Check log: ", { fullName, email, password, phoneNumber });
    }


    return (
        <div className="user_form">

            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <div className="user_info">
                    <span className="user_info-title">FullName</span>
                    <Input placeholder="Nhập Họ tên" onChange={(e) => setFullName(e.target.value)} value={fullName} />
                </div>
                <div className="user_info">
                    <span className="user_info-title">Email</span>
                    <Input placeholder="Nhập Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className="user_info">
                    <span className="user_info-title">Password</span>
                    <Input.Password placeholder="Nhập thông tin mật khẩu" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <div className="user_info">
                    <span className="user_info-title">Phone Number</span>
                    <Input placeholder="Nhập số điện thoại" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
                </div>
                <div>
                    <Button
                        type="primary"
                        onClick={() => handleClickBtn()}
                    >Create User</Button>

                </div>
            </div>


        </div>
    );
}

export default UserForm