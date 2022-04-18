import React from "react";
import { Layout, Breadcrumb, Input, Button, notification } from "antd";
import { useWallet } from "../../context/Wallet";
import styles from "./styles.module.css";
const { Content } = Layout;
const Withdraw = () => {
  const [amount, setAmount] = React.useState();

  const { walletBalance, fetchCurrentWalletBalance, accounts, transfer } =
    useWallet();

  const handleWithdraw = React.useCallback(async () => {
    if (amount && amount <= walletBalance && accounts && accounts.length > 0) {
      await transfer(accounts[0], amount, "direct");
      await fetchCurrentWalletBalance();

      notification.success({
        message: "Successfully sent",
        description: `Amount ETH ${amount} has been added to your original wallet ${accounts[0]}`,
      });
      setAmount();
    } else {
      notification.error({
        message: "Error",
        description: `Amount should be less than or equal to ETH ${walletBalance}`,
      });
    }
  }, [accounts, amount, fetchCurrentWalletBalance, transfer, walletBalance]);

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
            onClick={handleWithdraw}
          >
            Withdraw
          </Button>
        </div>
      </Content>
    </div>
  );
};

export default Withdraw;
