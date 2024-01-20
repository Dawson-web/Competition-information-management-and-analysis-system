import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Popconfirm, theme } from "antd";
import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./index.scss";
const { Header, Sider, Content } = Layout;
const items = [
  {
    label: "个人信息",
    key: "/",
    icon: <UserOutlined />,
  },
  {
    label: "竞赛信息",
    key: "/1",
    icon: <UploadOutlined />,
  },
  {
    label: "用户管理",
    key: "/2",
    icon: <VideoCameraOutlined />,
  },
  {
    label: "参赛情况",
    key: "/3",
    icon: <VideoCameraOutlined />,
  },
];
// 反向高亮

const Admin = () => {
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location.pathname);

  const menuClick = (route) => {
    console.log(route);
    navigate(route.key);
  };

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className="ant-layout">
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div className="demo-logo-vertical" />
        <Menu
          mode="inline"
          theme="light"
          selectedKeys={[location.pathname]}
          items={items}
          style={{ height: "100%", borderRight: 0 }}
          onClick={menuClick}
        ></Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />

          <Button
            type="text"
            style={{
              fontSize: "15px",
              width: 100,
              height: 64,
              float: "right",
            }}
          >
            <Popconfirm
              title="是否确认退出？"
              okText="退出"
              cancelText="取消"
              // onConfirm={onConfirm}
            >
              <LogoutOutlined /> 退出
            </Popconfirm>
          </Button>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {/* {二级路由的出口} */}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Admin;
