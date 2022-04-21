import React from "react";
import { Progress } from "antd";

const ProgressBars = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        flexDirection: "column",
      }}
    >
      <h1>Trade Smarter</h1>
      <h4>
        Trade dozens of crypto assets, from BTC and ETH to popular altcoins and
        stablecoins to innovative new projects.
      </h4>
      <br />
      <span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968260.png"
          alt="bitcoin"
          style={{ width: "30px", height: "30px" }}
        />{" "}
        Bitcoin &nbsp; &nbsp;
        <Progress
          percent={70}
          status="active"
          showInfo={false}
          style={{ width: "60%" }}
        />
      </span>
      <br /> <br />
      <span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/7016/7016541.png"
          alt="terra"
          style={{ width: "30px", height: "30px" }}
        />{" "}
        Terra &nbsp; &nbsp;
        <Progress
          percent={50}
          status="success"
          showInfo={false}
          style={{ width: "60%" }}
        />
      </span>
      <br /> <br />
      <span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/6001/6001352.png"
          alt="dash"
          style={{ width: "30px", height: "30px" }}
        />{" "}
        Dash &nbsp; &nbsp;
        <Progress
          percent={80}
          status="active"
          showInfo={false}
          style={{ width: "60%" }}
        />
      </span>
      <br /> <br />
      <span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3985/3985712.png"
          alt="tether"
          style={{ width: "30px", height: "30px" }}
        />{" "}
        Tether USD &nbsp; &nbsp;
        <Progress
          percent={30}
          status="exception"
          showInfo={false}
          style={{ width: "60%" }}
        />
      </span>{" "}
      <br /> <br />
      <span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/5245/5245843.png"
          alt="xrp"
          style={{ width: "30px", height: "30px" }}
        />{" "}
        XRP &nbsp; &nbsp;
        <Progress percent={100} showInfo={false} style={{ width: "60%" }} />
      </span>
    </div>
  );
};

export default ProgressBars;
