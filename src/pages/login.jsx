import { Col, Form, Input, Row } from "antd";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {

    }

    return (
        <Row justify={"center"} style={{ margin: "30px" }}>
            <Col xs={24} md={16} lg={8}

            >
                <fieldset style={{
                    padding: "15px",
                    margin: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "5px"
                }} >


                    <legend>Đăng nhập</legend>

                    <Form
                        layout="vertical"
                        form={form}
                        onFinish={onFinish}
                    >



                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Email không được để trống',
                                },
                                {
                                    type: "email",
                                    message: 'Email không đúng định dạng!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>



                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <Button onClick={() => {
                                    form.submit();
                                }} type="primary" >Login</Button>
                                <Link to={"/"}>Go to Home page</Link>
                            </div>
                        </Form.Item>




                    </Form >
                    <Divider />
                    <div style={{ textAlign: "center" }}>
                        Chưa có tài khoản?
                        <Link to={"/register"}>Đăng ký tại đây</Link>
                    </div>
                </fieldset>
            </Col>
        </Row >
    )
}

export default LoginPage
