import React from "react";
import styles from "./styles.module.css";
const Loader = () => {
  return (
    <div className={styles["loader-wrapper"]}>
      <div className={styles["loader"]}>
        <div className={styles["loader-inner"]}></div>
      </div>
    </div>
  );
};

export default Loader;
