import { Button, Form, Input, notification, Row, Col, Divider } from "antd"
import { registerUserAPI } from "../services/api.service";
import { useNavigate } from "react-router";


const RegisterPage = () => {
    const [form] = Form.useForm();
    let navigate = useNavigate();



    const onFinish = async (values) => {
        console.log(values);
        const res = await registerUserAPI(values.fullName, values.email, values.password, values.phone);
        if (res.data) {
            notification.success({
                message: "Register user",
                description: "Đăng ký user thành công"
            })
            navigate("/login");
        } else {
            notification.error({
                message: "Register user",
                description: JSON.stringify(res.message)
            })
        }

    }

    return (
        <>
            <Form
                layout="vertical"
                form={form}
                onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            >
                <h3>Đăng ký tài khoản</h3>


                <Row justify={"center"}>

                    <Col md={8} xs={24} >

                        <Form.Item
                            label="Full Name"
                            name="fullName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Full Name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify={"center"}>
                    <Col md={8} xs={24}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Email!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify={"center"}>
                    <Col md={8} xs={24}>
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
                    </Col>
                </Row>
                <Row justify={"center"}>
                    <Col md={8} xs={24}>
                        <Form.Item
                            label="Phone Number"
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    pattern: new RegExp(/\d+/g),
                                    message: "Wrong format!"

                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify={"center"}>
                    <Col md={8} xs={24}>
                        <Button onClick={() => {
                            form.submit();
                        }} type="primary" style={{ width: "150px" }}>Create Account</Button>
                    </Col>
                    <Divider />
                    <div>
                        Đã có tài khoản?
                        <Link to={"/login"}>Đăng nhập tại đây</Link>
                    </div>
                </Row>



            </Form >

        </>
    )
}

export default RegisterPage
