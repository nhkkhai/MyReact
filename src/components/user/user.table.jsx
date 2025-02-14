import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Popconfirm, Table } from 'antd';
import UpdateUserModal from './user.update.modal';
import { useState } from 'react';
import UserInfo from './user.info';
import { deleteUserAPI } from '../../services/api.service';

const UserTable = (props) => {
    const { dataUsers, loadUser, current, pageSize, total, setCurrent, setPageSize } = props;


    const [dataUpdate, setDataUpdate] = useState(null);
    const [dataInfo, setDataInfo] = useState(null);

    const [isModalUpdate, setIsModalUpdate] = useState(false);

    const [isOpenInfo, setIsOpenInfo] = useState(false);


    const handleDeleteUser = async (id) => {
        const res = await deleteUserAPI(id)
        if (res.data) {
            notification.success({
                message: "Delete User",
                description: "Xóa User thành công"
            })
            await loadUser();
        } else {
            notification.error({
                message: "Xóa User không thành công",
                description: JSON.stringify(res.message)
            })
        }
    }

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
                                setDataInfo(record);

                                setIsOpenInfo(true)
                            }}>{record._id}</a>
                    </>
                )
            }
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',

        },
        {
            title: 'Email',
            dataIndex: 'email',

        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => {
                return (
                    <div style={{ display: "flex", gap: "20px" }}>
                        <EditOutlined
                            onClick={() => {
                                setDataUpdate(record);
                                setIsModalUpdate(true)
                            }}
                            style={{ cursor: "pointer", color: "yellow" }} />
                        <Popconfirm
                            placement='left'
                            title="Delete User"
                            description="Are you sure to delete this User?"
                            onConfirm={() => handleDeleteUser(record.id)}
                            // onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                        </Popconfirm>


                    </div>
                )
            },
        }
    ];

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


    return (<>

        <Table
            columns={columns}
            dataSource={dataUsers}
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

        <UpdateUserModal
            isModalUpdate={isModalUpdate}
            setIsModalUpdate={setIsModalUpdate}
            setDataUpdate={setDataUpdate}
            dataUpdate={dataUpdate}
            loadUser={loadUser}
        />
        <UserInfo
            isOpenInfo={isOpenInfo}
            setIsOpenInfo={setIsOpenInfo}
            dataInfo={dataInfo}
            setDataInfo={setDataInfo}
            loadUser={loadUser}
        />
    </>
    );
}

export default UserTable