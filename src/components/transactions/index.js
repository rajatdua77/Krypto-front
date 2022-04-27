import React from "react";
import { Table } from "antd";
import styles from "./styles.module.css";

const Transactions = () => {
  const [data, setData] = React.useState([
    {
      key: "1",
      transactionhash: "0x77f87952430f7fa4e8",
      method: "Send",
      age: "2 minutes ago",
      amount: "$100",
      from: "0xb225d35642c2e0",
      to: "0xb225d35642c2e0e65d8",
    },
    {
      key: "1",
      transactionhash: "0x77f87952430f7fa4e8",
      method: "Send",
      age: "2 minutes ago",
      amount: "$100",
      from: "0xb225d35642c2e0",
      to: "0xb225d35642c2e0e65d8",
    },
    {
      key: "1",
      transactionhash: "0x77f87952430f7fa4e8",
      method: "Send",
      age: "2 minutes ago",
      amount: "$100",
      from: "0xb225d35642c2e0",
      to: "0xb225d35642c2e0e65d8",
    },
  ]);
  const columns = [
    {
      title: "Txn Hash",
      dataIndex: "transactionhash",
    },
    {
      title: "Method",
      dataIndex: "method",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "From",
      dataIndex: "from",
    },
    {
      title: "To",
      dataIndex: "to",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
  ];
  return (
    <div>
      <h1 className={styles["heading"]}>Transaction History</h1>
      <Table columns={columns} dataSource={data}></Table>
    </div>
  );
};

export default Transactions;
