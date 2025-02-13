import { Input, Button, notification, message, Modal } from "antd";
import './user.form.css'
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";


const UserForm = (props) => {


    const { loadUser } = props;

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);



    const showModal = () => {
        setIsModalCreateOpen(true);
    };
    const handleCreateUser = async () => {
        const res = await createUserAPI(fullName, email, password, phoneNumber);
        if (res.data) {
            // này là sử dụng Ant Design
            notification.success({
                message: "Tạo User",
                description: "Tạo User thành công"
            })
            handleCancel();
            await loadUser();
        } else {
            notification.error({
                message: "Lỗi tạo User",
                description: JSON.stringify(res.message)
            })
        }
    };
    const handleCancel = () => {
        setFullName("");
        setEmail("");
        setPassword("");
        setPhoneNumber("");
        setIsModalCreateOpen(false);
    };


    return (
        <div className="user_form">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Table Users</h3>
                <Button
                    type="primary"
                    onClick={() => showModal()}
                >Create User</Button>

            </div>

            <Modal title="Create User" open={isModalCreateOpen} onOk={handleCreateUser} onCancel={handleCancel}
                maskClosable={false}
                onText={"Create"}
            >
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

                </div>
            </Modal>

        </div>
    );
}

export default UserForm