import React from "react";
import { Menu, Button } from "antd";

const Navbar = () => {
  return (
    <div style={{ position: "absolute", zIndex: 1, width: "100%" }}>
      <Menu
        mode="horizontal"
        style={{
          backgroundColor: "transparent",
          border: "none",
          color: "white",
          fontSize: "20px",
          display: "flex",
          justifyContent: "right",
          opacity: "0.9",
        }}
      >
        <Menu.Item key="market"> Market </Menu.Item>
        <Menu.Item key="exchange"> Exchange </Menu.Item>
        <Menu.Item key="news"> News </Menu.Item>
        <Menu.Item key="wallet"> Wallet </Menu.Item>
        <Menu.Item key="login">
          <Button
            size="default"
            style={{
              backgroundColor: "#ff9800",
              border: "none",
              color: "#fff",
            }}
          >
            Login
          </Button>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
