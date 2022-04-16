import React, { useState } from "react";

import { Layout, Menu, Breadcrumb, Input, Button } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.css";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

// const state = {
//   collapsed: false,
// };

// const onCollapse = (collapsed) => {
//   console.log(collapsed);
//   this.setState({ collapsed });
// };
function SideSlider() {
  const { collapsed, setCollapsed } = useState(false);
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        >
          <div className={styles["logo"]}>
            <h2 style={{ color: "#fff" }}>Krypto Wallet</h2>
          </div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <SubMenu key="sub1" icon={<UserOutlined />} title="Wallet">
              <Menu.Item key="3">Send</Menu.Item>
              <Menu.Item key="4">Deposit</Menu.Item>
              <Menu.Item key="5">Withdraw</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Wallet</Breadcrumb.Item>
              <Breadcrumb.Item>Transaction</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className={styles["site-layout-background"]}
              style={{ padding: 24, minHeight: 360 }}
            >
              <h2>Payment Method</h2>
              <div className={styles["input-payment-fields"]}>
                <Input
                  size="large"
                  placeholder="Enter Address"
                  style={{ margin: "10px" }}
                  type="text || number"
                  required
                />
                <Input
                  size="large"
                  placeholder="Amount (ETH)"
                  style={{ margin: "10px" }}
                  type="number"
                  required
                />
              </div>
              <div className={styles["input-message-fields"]}>
                <Input
                  size="large"
                  placeholder="Enter Gif (eg: car)"
                  style={{ margin: "10px" }}
                  type="text"
                />
                <Input
                  size="large"
                  placeholder="Enter Message"
                  style={{ margin: "10px" }}
                />
              </div>
              <Button
                type="primary"
                block
                size="large"
                style={{ marginTop: "40px", maxWidth: "90%" }}
              >
                Send
              </Button>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Krypto-Wallet ©2022 Created by Rajat Dua
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default SideSlider;
