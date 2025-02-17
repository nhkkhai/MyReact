import { Table, Popconfirm } from "antd";
import { useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import BookDetail from "./book.detail";

const BookTable = (props) => {

    const { dataBooks, loadBook, current, pageSize, total, setCurrent, setPageSize } = props;


    const [dataDetail, setDataDetail] = useState(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const [dataUpdate, setDataUpdate] = useState(null);
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);

    const handleDeleteBook = (id) => {
        console.log("check>>>", id);

    }

    const onChange = (pagination, filters, sorter, extra) => {
        if (pagination && pagination.current) {
            if (+pagination.current !== +current) {
                // dùng dấu + sẽ tự covert chuỗi sang số nguyên
                setCurrent(+pagination.current);
            }
        }
        if (pagination && pagination.pageSize) {
            if (+pagination.pageSize !== +pageSize) {
                // dùng dấu + sẽ tự covert chuỗi sang số nguyên
                setPageSize(+pagination.pageSize);
            }
        }
    };

    const columns = [
        {
            title: "STT",
            render: (_, record, index) => {
                return (
                    <>
                        {(index + 1) + (current - 1) * pageSize}
                    </>
                );
            }
        },
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <>
                        <a style={{ cursor: "pointer" }}
                            onClick={() => {
                                setDataDetail(record);
                                setIsDetailOpen(true)
                            }}>{record._id}</a>
                    </>
                )
            }
        },
        {
            title: 'Tiêu đề',
            dataIndex: 'mainText',
            key: 'mainText',

        },
        {
            title: 'Giá tiền',
            dataIndex: 'price',
            key: 'price',
            render: (_, record, index) => {
                return (
                    <>
                        {new Intl.NumberFormat('vi-vn', { style: 'currency', currency: 'VND' }).format(record.price)}
                    </>
                );
            }
        },
        {
            title: 'Số lượng',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Tác giả',
            dataIndex: 'author',
            key: 'author',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => {
                return (
                    <div style={{ display: "flex", gap: "20px" }}>
                        <EditOutlined
                            // onClick={() => {
                            //     setDataUpdate(record);
                            //     setIsModalUpdate(true)
                            // }}
                            style={{ cursor: "pointer", color: "yellow" }} />
                        <Popconfirm
                            placement='left'
                            title="Delete Book"
                            description="Are you sure to delete this Book?"
                            onConfirm={() => handleDeleteBook(record._id)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                        </Popconfirm>


                    </div>
                )

            }


        },
    ];

    const data = [
        {
            key: '1',
            _id: "1231312",
            mainText: 'John Brown',
            price: 213213121,
            quantity: 500,
            author: 'developer',
        },
        {
            key: '2',
            _id: "12313122",
            mainText: 'John Brown',
            price: 232332,
            quantity: 50,
            author: 'developer3',
        },
        {
            key: '3',
            _id: "12313312",
            mainText: 'John Brown',
            price: 1122131,
            quantity: 555,
            author: 'developer2',
        },
    ];

    return (
        <>
            <Table columns={columns} dataSource={data}
                rowKey={"_id"}
                onChange={onChange}
                pagination={
                    {
                        // đang đứng ở trang nào
                        current: current,
                        // số lượng phần tử trong 1 trang
                        pageSize: pageSize,
                        showSizeChanger: true,
                        total: total,
                        showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) },

                    }

                }
            />
            <BookDetail
                isDetailOpen={isDetailOpen}
                setIsDetailOpen={setIsDetailOpen}
                dataDetail={dataDetail}
                setDataDetail={setDataDetail}
                loadBook={loadBook}

            />
        </>

    )
}

export default BookTable