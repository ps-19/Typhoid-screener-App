import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import { Form, Button, Input, notification, Space } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

//internal imports
import "./Login.css";
import image from "../../../asset/image/SecondSide.jpg";

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
      <div className="login-image-container">
        <img src={image} alt="logo" />
      </div>
      <div className="login-container">
        <h1>LOGIN</h1>
        <p>
          Welcome back, please login to your account to continue using our app
        </p>
        <Form form={form} name="login" onFinish={onFinish} scrollToFirstError>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="login-site-form-item-icon" />}
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
              prefix={<LockOutlined className="login-site-form-item-icon" />}
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            style={{
              marginTop: 0,
              marginBottom: "10px",
              textAlign: "left",
            }}
          >
            <Space>
              <input type="checkbox" />
              <span>Remember me</span>
            </Space>
          </Form.Item>

          <Form.Item
            style={{
              textAlign: "left",
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              className="login-login-form-button"
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
