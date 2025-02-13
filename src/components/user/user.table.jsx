import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import UpdateUserModal from './user.update.modal';
import { useState } from 'react';

const UserTable = (props) => {
    const { dataUsers, loadUsers } = props;

    const [dataUpdate, setDataUpdate] = useState(null);

    const [isModalUpdate, setIsModalUpdate] = useState(false);

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <>
                        <a href='{#}'>{record._id}</a>
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
            title: 'Tags',
            key: 'tags',
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

        <Table columns={columns} dataSource={dataUsers} />

        <UpdateUserModal
            isModalUpdate={isModalUpdate}
            setIsModalUpdate={setIsModalUpdate}
            setDataUpdate={setDataUpdate}
            dataUpdate={dataUpdate}
            loadUsers={loadUsers}
        />
    </>
    );
}

export default UserTable