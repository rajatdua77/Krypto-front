import React from "react";
import { Layout, Breadcrumb, Input, Button } from "antd";
import styles from "./styles.module.css";
const { Content } = Layout;
const Withdraw = () => {
  return (
    <div>
      <Content style={{ margin: "0 16px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Wallet</Breadcrumb.Item>
          <Breadcrumb.Item>Withdraw</Breadcrumb.Item>
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
            Withdraw
          </Button>
        </div>
      </Content>
    </div>
  );
};

export default Withdraw;
