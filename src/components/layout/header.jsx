import { NavLink } from 'react-router-dom';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import { Menu } from 'antd';



const Header = () => {
    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    // const items = [
    //     {
    //         label: <NavLink to="/">Home</NavLink>,
    //         key: 'home',
    //         icon: <MailOutlined />,
    //     },
    //     {
    //         label: <NavLink to="/users">Users</NavLink>,
    //         key: 'user',
    //         icon: <AppstoreOutlined />,
    //     },
    //     {
    //         label: <NavLink to="/books">BooksPage</NavLink>,
    //         key: 'books',
    //         icon: <SettingOutlined />,
    //     },
    // ];

    return (

        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/books">BooksPage</NavLink></li>
        </ul>
    );
}

export default Header