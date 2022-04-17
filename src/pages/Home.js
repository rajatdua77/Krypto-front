import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import "../styles/home.css";
import { Row, Col, Button } from "antd";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import SecurityCard from "../components/SecuritySection";
import SmartInvestments from "../components/InvestmentsSection";

const HomePage = () => {
  const navigation = useNavigate();
  const redirectTo = useCallback((path) => navigation(path), [navigation]);
  return (
    <>
      <section class="container">
        <Navbar />
        <div class="wave"></div>
        <Row>
          <Particles
            style={{ zIndex: -1 }}
            id="tsparticles"
            url="https://raw.githubusercontent.com/VincentGarreau/particles.js/master/demo/particles.json"
          />
          <Col span={12}>
            <div className="hero-section">
              <h1>Send Crypto across the world</h1>
              <h3>
                This international trading platform provides innovative tokens a
                more streamlined approach.
              </h3>
              <Button className="news-btn">View News</Button> &nbsp;
              <Button
                onClick={() => redirectTo("/dashboard")}
                type="default"
                className="wallet-btn"
              >
                Get Started
              </Button>
            </div>
          </Col>
          <Col span={12}>
            <img
              style={{ marginTop: "80px" }}
              src="/assets/images/banner-art.png"
              alt="banner-art"
            />
          </Col>
        </Row>
      </section>
      <div style={{ height: "30vh", width: "90vw" }}></div>
      <SecurityCard />
      <div style={{ height: "10vh", width: "90vw" }}></div>
      <SmartInvestments />
      <div style={{ height: "10vh", width: "90vw" }}></div>
    </>
  );
};

export default HomePage;