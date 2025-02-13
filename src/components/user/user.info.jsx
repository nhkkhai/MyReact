import { Drawer } from "antd";
import { useEffect, useState } from "react";

const UserInfo = (props) => {

    const { isOpenInfo, setIsOpenInfo, dataInfo, setDataInfo } = props;

    const handleCancel = () => {
        setDataInfo(null);
        setIsOpenInfo(false);
    };

    return (

        <Drawer title="Chi tiết User" onClose={handleCancel} open={isOpenInfo}>
            {dataInfo ? <>
                <p>ID: {dataInfo._id}</p>
                <p>Full Name: {dataInfo.fullName}</p>
                <p>Email: {dataInfo.email}</p>
                <p>Phone: {dataInfo.phone}</p>
            </> : <>
                <div>Không có dữ liệu</div></>
            }

        </Drawer>

    )
}

export default UserInfo;