import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import { Form, Button, Input, notification, Modal } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

//internal imports
import "./Register.css";
import image from "../../../asset/image/SecondSide.jpg";
import Termsofuse from "../Termsofuse";

const Register = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

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
      <div className="register-image-container">
        <img src={image} alt="logo" />
      </div>
      <div className="register-container">
        <h1>REGISTER</h1>
        <p>
          Welcome, please register to your account to continue using our app
        </p>
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
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
              prefix={<MailOutlined className="register-site-form-item-icon" />}
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
              prefix={<LockOutlined className="register-site-form-item-icon" />}
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
              prefix={<LockOutlined className="register-site-form-item-icon" />}
              placeholder="Confirm Password"
            />
          </Form.Item>
          <Form.Item
            style={{
              textAlign: "left",
              marginTop: "10px",
            }}
            rules={[
              {
                required: true,
                message: "Please accept our terms and conditions",
              },
            ]}
          >
            <input type="checkbox" />I have read the{" "}
            <p
              style={{
                display: "inline",
                color: "#1890ff",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => {
                setVisible(true);
              }}
            >
              terms and conditions
            </p>
          </Form.Item>
          <Modal
            visible={visible}
            footer={
              <Button
                type="primary"
                onClick={() => {
                  setVisible(false);
                }}
              >
                OK
              </Button>
            }
            closable={true}
          >
            <Termsofuse />
          </Modal>
          <Form.Item
            style={{
              textAlign: "left",
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              className="register-register-form-button"
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
