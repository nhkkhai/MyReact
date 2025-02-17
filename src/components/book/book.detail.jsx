import { Drawer } from "antd";
import { useState } from "react";

const BookDetail = (props) => {
    const { isDetailOpen, setIsDetailOpen, dataDetail, setDataDetail, loadBook } = props;

    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)

    const handleCancel = () => {
        setDataDetail(null);
        setIsDetailOpen(false);
    };

    const onSelectFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(null);
            setPreview(null);
            return;
        }

        // I've kept this example simple by using the first image instead of multiple
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file))
        }
    }

    return (
        <Drawer width={"40vw"} title="Chi tiết Book" onClose={handleCancel} open={isDetailOpen}>
            {dataDetail ? <>
                <p>ID: {dataDetail._id}</p>
                <br />
                <p>Tiêu đề: {dataDetail.mainText}</p>
                <br />
                <p>Tác giả: {dataDetail.author}</p>
                <br />
                <p>Thể loại: {dataDetail.category}</p>
                <br />
                <p>Giá tiền: {new Intl.NumberFormat('vi-vn', { style: 'currency', currency: 'VND' }).format(dataDetail.price)}</p>
                <br />
                <p>Số lượng: {dataDetail.quantity}</p>
                <br />
                <p>Đã bán: {dataDetail.sold}</p>
                <br />
                <p>Thumnail: {dataDetail.thumnail}</p>
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
                        src={`${import.meta.env.VITE_BACKEND_URL}/images/book/${dataDetail.thumnail}`} alt={`${dataDetail.mainText}`}
                    />
                </div>
            </> : <> <div>Không có dữ liệu</div></>}
        </Drawer>
    )
}

export default BookDetail