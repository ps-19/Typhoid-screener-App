import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import { Form, Button, Input, notification } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

const Register = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    console.log("Received values of form: ", values);
    setTimeout(() => {
      setLoading(false);
      notification.success({
        message: "Registration Successful",
        description: "You can now login to your account",
      });
    }, 2000);
    setTimeout(() => {
      form.resetFields();
      window.location.href = "/login";
    }, 3000);
  };

  useEffect(() => {
    form.setFieldsValue({
      email: "",
      password: "",
      confirm: "",
    });
  }, [form]);

  return (
    <div className="register">
      <div className="register-container">
        <h1>Register</h1>
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
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
          <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered do not match!"
                  );
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Confirm Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="register-form-button"
              loading={loading}
            >
              Register
            </Button>
            Or <Link to="/login">login now!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
