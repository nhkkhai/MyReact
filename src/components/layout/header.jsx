import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { AliwangwangOutlined, AppstoreOutlined, LoginOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import { Menu, message } from 'antd';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';



const Header = () => {
    const [current, setCurrent] = useState('');
    let navigate = useNavigate();

    const { user, setUser } = useContext(AuthContext);


    const handleLogout = () => {
        localStorage.removeItem("access_token");
        setUser({
            email: "",
            phone: "",
            fullName: "",
            role: "",
            avatar: "",
            id: "",
        });
        message.success("Logout thành công");

        navigate("/");
    }


    const onClick = (e) => {
        setCurrent(e.key);
    };

    const items = [
        {
            label: <NavLink to="/">Home</NavLink>,
            key: 'home',
            icon: <MailOutlined />,
        },
        {
            label: <NavLink to="/users">Users</NavLink>,
            key: 'user',
            icon: <AppstoreOutlined />,
        },
        {
            label: <NavLink to="/books">BooksPage</NavLink>,
            key: 'books',
            icon: <SettingOutlined />,
        },
        ...(!user.id ? [{
            label: <Link to={"/login"}>Đăng nhập</Link>,
            key: 'login',
            icon: <LoginOutlined />,
        }] : []),

        ...(user.id ? [{
            label: `Welcome ${user.fullName}`,
            key: 'setting',
            icon: <AliwangwangOutlined />,
            children: [
                {
                    label: <span onClick={() => handleLogout()}>Đăng xuất</span>,
                    key: 'logout',
                },
            ],
        }] : []),

    ];

    return (
        <>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />

        </>
    );
}

export default Header