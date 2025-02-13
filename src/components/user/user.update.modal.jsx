import { useEffect, useState } from "react";
import { updateUserAPI } from "../../services/api.service";

const UpdateUserModal = (props) => {
    const { isModalUpdate, setIsModalUpdate, dataUpdate, setDataUpdate } = props;

    const [fullName, setFullName] = useState("");
    const [id, setID] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    // Khi gia tri data thay doi thi lap tuc chay useeffect
    useEffect(() => {
        if (dataUpdate) {

            setFullName(dataUpdate.fullName);
            setID(dataUpdate._id);
            setPhoneNumber(dataUpdate.phoneNumber);
        }

    }, [dataUpdate])

    const handleUpdateUser = async () => {
        const res = await updateUserAPI(fullName, email, password, phoneNumber);
        if (res.data) {
            // này là sử dụng Ant Design
            notification.success({
                message: "Tạo User",
                description: "Tạo User thành công"
            })
            handleCancel();
            // await loadUsers();
        } else {
            notification.error({
                message: "Lỗi tạo User",
                description: JSON.stringify(res.message)
            })
        }
    };
    const handleCancel = () => {
        setFullName("");
        setID("");
        setPhoneNumber("");
        setDataUpdate(null);
        setIsModalUpdate(false);
    };

    return (
        <Modal title="Update User" open={isModalUpdate} onOk={handleUpdateUser} onCancel={handleCancel}
            maskClosable={false}
            onText={"Save"}
        >
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <div className="user_info">
                    <span className="user_info-title">Email</span>
                    <Input placeholder="Nhập ID" disable value={id} />
                </div>
                <div className="user_info">
                    <span className="user_info-title">FullName</span>
                    <Input placeholder="Nhập Họ tên" onChange={(e) => setFullName(e.target.value)} value={fullName} />
                </div>
                <div className="user_info">
                    <span className="user_info-title">Phone Number</span>
                    <Input placeholder="Nhập số điện thoại" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
                </div>

            </div>
        </Modal>
    );
}

export default UpdateUserModal