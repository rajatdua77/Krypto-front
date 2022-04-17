import React, { useState, useCallback } from "react";

import { Layout, Menu } from "antd";
import {
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  MoneyCollectOutlined,
  UserSwitchOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { useNavigate, Outlet } from "react-router-dom";
import styles from "./styles.module.css";

const { Header, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function SideSlider() {
  const navigation = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const redirectTo = useCallback(
    (path) => navigation(`/dashboard${path}`),
    [navigation]
  );
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed((e) => !e)}
        >
          <div className={styles["logo"]}>
            <img
              src="/assets/images/logo.png"
              alt="logo"
              style={{
                width: "140px",
                display: "block",
                margin: "10px",
                cursor: "pointer",
                opacity: "0.8",
              }}
              onClick={() => navigation("/")}
            />
          </div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <SubMenu key="sub1" icon={<UserOutlined />} title="Wallet">
              <Menu.Item
                icon={<UserOutlined />}
                key="3"
                onClick={() => redirectTo("/send")}
              >
                Send Wallet
              </Menu.Item>
              <Menu.Item
                key="4"
                icon={<MoneyCollectOutlined />}
                onClick={() => redirectTo("/deposit")}
              >
                Deposit
              </Menu.Item>
              <Menu.Item
                key="5"
                icon={<UserSwitchOutlined />}
                on
                onClick={() => redirectTo("/withdraw")}
              >
                Withdraw
              </Menu.Item>
              <Menu.Item
                key="6"
                onClick={() => redirectTo("/sendDirect")}
                icon={<DollarOutlined />}
              >
                Send Direct
              </Menu.Item>
            </SubMenu>
            {/* <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="7">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu> */}
            <Menu.Item
              key="9"
              onClick={() => redirectTo("/cryptocurrency")}
              icon={<FileOutlined />}
            >
              Market
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />

          <Outlet />
          <Footer style={{ textAlign: "center" }}>
            Krypto-Wallet ©2022 Created by Rajat Dua
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default SideSlider;
