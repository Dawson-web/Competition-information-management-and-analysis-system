import { Button, Card, Form, Input, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log("登录", values);
    // await dispatch(fetchLogin(values));
    navigate("/");
    message.success("登录成功");
  };
  return (
    <>
      <div className="login">
        <Card className="login-container">
          {/* 登录表单 */}
          <span className="login-title">登录</span>
          <Form validateTrigger={["onBlur"]} onFinish={onFinish}>
            <Form.Item
              name="mobile"
              rules={[
                { required: true, message: "请输入手机号" },
                {
                  pattern: /^1[3-9]\d{9}$/,
                  message: "手机号码格式不对",
                },
              ]}
            >
              <Input size="large" placeholder="请输入手机号" />
            </Form.Item>
            <Form.Item
              name="code"
              rules={[{ required: true, message: "请输入密码" }]}
            >
              <Input size="large" placeholder="请输入密码" maxLength={6} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block>
                登录
              </Button>
              <span
                className="jump-singup"
                onClick={() => navigate("/register")}
              >
                没有账号？现在去注册
              </span>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Login;
