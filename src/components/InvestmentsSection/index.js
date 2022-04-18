import React from "react";
import { Row, Col } from "antd";
import { BsGraphUp } from "react-icons/bs";
import styles from "./styles.module.css";
const SmartInvestments = () => {
  return (
    <div>
      <Row className={styles["investment-section"]}>
        <Col lg={12} xs={32} md={12}>
          <img
            src="/assets/images/balance-graph.png"
            alt="graph"
            style={{ height: "400px" }}
          />
        </Col>
        <Col lg={12} xs={32} md={12}>
          <div className={styles["investments-container"]}>
            <BsGraphUp size="30px" />
            <h1>Smart Investments</h1>
            <p>
              Time is money. Don’t wait for a transaction to end: open several
              positions at the same time and continue trading.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SmartInvestments;
