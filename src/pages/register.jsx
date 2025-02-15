import { Button, Form, Input } from "antd"

const RegisterPage = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
    }

    return (
        <>
            <Form
                layout="vertical"
                form={form}
                onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            >



                <div style={{ margin: "20px" }}>
                    <Form.Item
                        label="Full Name"
                        name="fullName"
                    // rules={[
                    //     {
                    //         required: true,
                    //         message: 'Please input your username!',
                    //     },
                    // ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                    // rules={[
                    //     {
                    //         required: true,
                    //         message: 'Please input your username!',
                    //     },
                    // ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                    // rules={[
                    //     {
                    //         required: true,
                    //         message: 'Please input your username!',
                    //     },
                    // ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="Phone Number"
                        name="phone"
                    // rules={[
                    //     {
                    //         required: true,
                    //         message: 'Please input your username!',
                    //     },
                    // ]}
                    >
                        <Input />
                    </Form.Item>
                    <Button onClick={() => {
                        form.submit();
                    }} type="primary" style={{ width: "150px" }}>Create Account</Button>
                </div>

            </Form >

        </>
    )
}

export default RegisterPage
