import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import { Form, Button, Input, notification } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

const Login = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    console.log("Received values of form: ", values);
    setTimeout(() => {
      setLoading(false);
      notification.success({
        message: "Login Successful",
        description: "You can now access your account",
      });
    }, 2000);
    setTimeout(() => {
      form.resetFields();
      window.location.href = "/";
    }, 3000);
  };

  useEffect(() => {
    form.setFieldsValue({
      email: "",
      password: "",
    });
  }, [form]);

  return (
    <div className="login">
      <div className="login-container">
        <h1>Login</h1>
        <Form form={form} name="login" onFinish={onFinish} scrollToFirstError>
          <Form.Item
            name="email"
            rules={[
              // {
              //   type: "email",
              //   message: "The input is not valid E-mail!",
              // },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={loading}
            >
              Log in
            </Button>
            Or <Link to="/register">register now!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
