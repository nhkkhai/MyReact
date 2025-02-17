import { Link, NavLink } from 'react-router-dom';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import { Menu } from 'antd';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';



const Header = () => {
    const [current, setCurrent] = useState('');

    const { user } = useContext(AuthContext);



    const onClick = (e) => {
        console.log('click ', e);
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
        {
            label: "Cài đặt",
            key: 'settings',
            icon: <SettingOutlined />,
            children: [
                {
                    label: <Link to={"/login"}>Đăng nhập</Link>,
                    key: "login",
                },
                {
                    label: "Đăng xuất",
                    key: "logout",
                }
            ]
        },
    ];

    return (
        <>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;

        </>
    );
}

export default Header