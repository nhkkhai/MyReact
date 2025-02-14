import { Button, Drawer, notification } from "antd";
import { useEffect, useState } from "react";
import { handleUploadFile, updateUserAvatarAPI } from "../../services/api.service";

const UserInfo = (props) => {

    const { isOpenInfo, setIsOpenInfo, dataInfo, setDataInfo, loadUser } = props;

    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)


    const handleUpdateAvatar = async () => {
        // upload file
        const resUpload = await handleUploadFile(selectedFile, "avatar")

        if (resUpload.data) {
            //success
            const newAvatar = resUpload.data.fileUploaded;
            // update user
            const resUpdateAvatar = await updateUserAvatarAPI(dataInfo._id, dataInfo.fullName, dataInfo.phone, newAvatar);
            if (resUpdateAvatar.data) {
                setIsOpenInfo(false);
                setSelectedFile(null);
                setPreview(null);
                await loadUser();
                notification.success({
                    message: "Update User Avatar",
                    description: "Cập nhật Avatar thành công"
                });
            } else {
                notification.error({
                    message: "Error Update Avatar",
                    description: JSON.stringify(resUpload.message)
                })
            };
        } else {
            // failed
            notification.error({
                message: "Error upload file",
                description: JSON.stringify(resUpload.message)
            })
        }



    }
    const handleCancel = () => {
        setDataInfo(null);
        setIsOpenInfo(false);
    };


    const onSelectFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(null);
            setPreview(null);
        }

        // I've kept this example simple by using the first image instead of multiple
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file))
        }
    }

    return (

        <Drawer width={"40vw"} title="Chi tiết User" onClose={handleCancel} open={isOpenInfo}>
            {dataInfo ? <>
                <p>ID: {dataInfo._id}</p>
                <p>Full Name: {dataInfo.fullName}</p>
                <p>Email: {dataInfo.email}</p>
                <p>Phone: {dataInfo.phone}</p>
                <br />
                <div style={{
                    marginTop: "10px",
                    height: "100px", width: "150px",
                    border: "1px solid #ccc"

                }}>
                    <img
                        style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "contain"
                        }}
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
                    <input type='file' id="btnUpload" hidden onChange={onSelectFile} />
                    {selectedFile && <img src={preview} />}


                </div>
                {
                    preview &&
                    <>
                        <div style={{
                            marginTop: "10px",
                            height: "100px", width: "150px",
                            border: "1px solid #ccc"

                        }}>
                            <img
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    objectFit: "contain"
                                }}
                                src={preview} alt=""
                            />
                        </div>
                        <Button type="primary"
                            onClick={() => handleUpdateAvatar()}
                        >Save</Button>
                    </>

                }


            </> : <>
                <div>Không có dữ liệu</div></>
            }

        </Drawer>

    )
}

export default UserInfo;