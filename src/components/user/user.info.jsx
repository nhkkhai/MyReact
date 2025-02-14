import { Drawer } from "antd";

const UserInfo = (props) => {

    const { isOpenInfo, setIsOpenInfo, dataInfo, setDataInfo } = props;

    const handleCancel = () => {
        setDataInfo(null);
        setIsOpenInfo(false);
    };

    return (

        <Drawer width={"40vw"} title="Chi tiết User" onClose={handleCancel} open={isOpenInfo}>
            {dataInfo ? <>
                <p>ID: {dataInfo._id}</p>
                <p>Full Name: {dataInfo.fullName}</p>
                <p>Email: {dataInfo.email}</p>
                <p>Phone: {dataInfo.phone}</p>
                <br />
                <div>
                    <img
                        height={200}
                        width={200}
                        src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataInfo.avatar}`} alt=""
                    />
                </div>
                <div>
                    <label htmlFor="btnUpload"
                        style={{
                            display: "block",
                            width: "fit-content",
                            marginTop: "15px",
                            padding: "5px 10px",
                            background: "orange",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}
                        Upload Avatar
                    ></label>
                    <input id="btnUpload" type="file" hidden />
                </div>

            </> : <>
                <div>Không có dữ liệu</div></>
            }

        </Drawer>

    )
}

export default UserInfo;