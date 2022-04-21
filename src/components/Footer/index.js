import React from "react";
import { Input } from "antd";
import styles from "./styles.module.css";

const { Search } = Input;

const Footer = () => {
  return (
    <div>
      <div className={styles["footer-inner"]}>
        <div className={styles["footer-upper"]}>
          <Search
            className={styles["search-input"]}
            placeholder="Subcribe to get latest updates"
            enterButton="Subscribe"
            size="large"
            // suffix={suffix}
            // onSearch={onSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
