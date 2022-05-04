/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const Transactions = () => {
  return (
    <div style={{ height: "75vh" }}>
      <iframe
        src="https://rinkeby.etherscan.io/address/0xCF93E6E9cE1A873CcA3D49a06f1270df520CE6E0"
        height="100%"
        width="100%"
        style={{ border: "none", overflow: "auto" }}
      />
      {/* <h1 className={styles["heading"]}>Transaction History</h1> */}
      {/* <Table columns={columns} dataSource={data}></Table> */}
    </div>
  );
};

export default Transactions;
