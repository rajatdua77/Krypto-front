import React from "react";
import styles from "./styles.module.css";
const Loader = () => {
  return (
    <div style={{ width: "90vw", height: "30%", backgroundColor: "black" }}>
      <div className={styles["loader-wrapper"]}>
        <div className={styles["loader"]}>
          <div className={styles["loader-inner"]}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
