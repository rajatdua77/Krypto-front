import React from "react";
import { Layout, Breadcrumb, Input, Button, notification } from "antd";
import { useWallet } from "../../context/Wallet";
import styles from "./styles.module.css";

const { Content } = Layout;

const Deposit = () => {
  const [amount, setAmount, accounts] = React.useState();

  const { transfer, fetchCurrentWalletBalance } = useWallet();

  const handleDeposit = React.useCallback(async () => {
    if (amount && accounts && accounts.length > 0) {
      await transfer(accounts[0], amount, "wallet");
      await fetchCurrentWalletBalance();
      notification.success({
        message: "Successfully Added",
      });
      setAmount();
    }
  }, [accounts, amount, fetchCurrentWalletBalance, setAmount, transfer]);

  return (
    <div>
      <Content style={{ margin: "0 16px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Wallet</Breadcrumb.Item>
          <Breadcrumb.Item>Deposit</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className={styles["site-layout-background"]}
          style={{ padding: 24, minHeight: 360 }}
        >
          <h2>Payment Method</h2>
          <div className={styles["input-payment-fields"]}>
            <Input
              size="large"
              placeholder="Amount (ETH)"
              style={{ margin: "10px" }}
              type="number"
              required
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
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
            onClick={handleDeposit}
          >
            Deposit
          </Button>
        </div>
      </Content>
    </div>
  );
};

export default Deposit;
