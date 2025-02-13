import { useEffect, useState } from "react";
import UserForm from "../components/user/user.form"
import UserTable from "../components/user/user.table"
import { fetchAllUserAPI } from '../services/api.service';


const UserPage = () => {
    const [dataUsers, setDataUsers] = useState([]);

    // empty arr thì chỉ chạy 1 lần
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await fetchAllUserAPI();
        setDataUsers(res.data);
    }

    return (
        <div>
            <UserForm
                loadUser={loadUser} />
            <UserTable
                dataUsers={dataUsers} />
        </div>
    )
}

export default UserPage
