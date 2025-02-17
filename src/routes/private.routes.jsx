import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../components/context/auth.context";
import { Button, Result } from "antd";

const PrivateRoutes = (props) => {
    const { user } = useContext(AuthContext);

    if (user && user.id) {
        return (
            <>
                {props.children}
            </>
        );
    } return (<Result
        status="403"
        title="Oops!"
        subTitle="Bạn cần đăng nhập để truy cập"
        extra={
            <>
                <Button type="primary">
                    <Link to="/">
                        <span>Back to HomePage</span>
                    </Link>
                </Button>
                <Button type="primary">
                    <Link to="/login">
                        <span>Go to Login</span>
                    </Link>
                </Button>
            </>

        }
    />);

}

export default PrivateRoutes