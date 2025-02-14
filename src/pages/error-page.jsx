import { Button, Result } from "antd";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (

        <Result
            status="404"
            title="Oops!"
            subTitle={error.statusText || error.message}
            extra={
                <Button type="primary">
                    <Link to="/">
                        <span>Back to HomePage</span>
                    </Link>
                </Button>
            }
        />

    );
}