import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import UpdateUserModal from './user.update.modal';
import { useState } from 'react';
import UserInfo from './user.info';

const UserTable = (props) => {
    const { dataUsers, loadUser } = props;

    const [dataUpdate, setDataUpdate] = useState(null);
    const [dataInfo, setDataInfo] = useState(null);

    const [isModalUpdate, setIsModalUpdate] = useState(false);

    const [isOpenInfo, setIsOpenInfo] = useState(false);


    const columns = [
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
                        <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                    </div>
                )
            },
        }
    ];
    // const data = [
    //     {
    //         key: '1',
    //         name: 'John Brown',
    //         age: 32,
    //         address: 'New York No. 1 Lake Park',
    //         tags: ['nice', 'developer'],
    //     },
    //     {
    //         key: '2',
    //         name: 'Jim Green',
    //         age: 42,
    //         address: 'London No. 1 Lake Park',
    //         tags: ['loser'],
    //     },
    //     {
    //         key: '3',
    //         name: 'Joe Black',
    //         age: 32,
    //         address: 'Sydney No. 1 Lake Park',
    //         tags: ['cool', 'teacher'],
    //     },
    // ];

    return (<>
        <UserInfo
            isOpenInfo={isOpenInfo}
            setIsOpenInfo={setIsOpenInfo}
            dataInfo={dataInfo}
            setDataInfo={setDataInfo}
        />

        <Table columns={columns} dataSource={dataUsers} />

        <UpdateUserModal
            isModalUpdate={isModalUpdate}
            setIsModalUpdate={setIsModalUpdate}
            setDataUpdate={setDataUpdate}
            dataUpdate={dataUpdate}
            loadUser={loadUser}
        />
    </>
    );
}

export default UserTable