import React from "react";
import { Row, Col } from "antd";
import { MdOutlineSecurity } from "react-icons/md";
import styles from "./styles.module.css";
const SecurityCard = () => {
  return (
    <div>
      <Row>
        <Col span={12}>
          <div className={styles["security-text-container"]}>
            <MdOutlineSecurity size="30px" />
            <h1>Security First</h1>
            <p>
              Security will always be a top priority in every decision we make,
              we incorporate multiple layers of protection.
            </p>
          </div>
        </Col>
        <Col span={12}>
          <img
            src="/assets/images/security-card.png"
            alt="security-card"
            style={{ width: "80%" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default SecurityCard;
