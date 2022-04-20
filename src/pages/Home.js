import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import "../styles/home.css";
import { Row, Col, Button } from "antd";
import { useWallet } from "../context/Wallet";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import SecurityCard from "../components/SecuritySection";
import SmartInvestments from "../components/InvestmentsSection";

const HomePage = () => {
  const navigation = useNavigate();
  const redirectTo = useCallback((path) => navigation(path), [navigation]);
  const { isMetamaskInstalled } = useWallet();
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
          <Col xs={32} md={6} lg={12}>
            <div className="hero-section">
              <h1>Send Crypto across the world</h1>
              <h3>
                This international trading platform provides innovative tokens a
                more streamlined approach.
              </h3>
              <Button className="news-btn">View News</Button> &nbsp;
              {isMetamaskInstalled ? (
                <Button
                  onClick={() => redirectTo("/dashboard")}
                  type="default"
                  className="wallet-btn"
                >
                  Dashboard
                </Button>
              ) : (
                <Link
                  className="metamask-btn"
                  to="https://metamask.io/download/"
                  target="_blank"
                >
                  Install Metamask
                </Link>
              )}
            </div>
          </Col>
          <Col xs={32} md={6} lg={12}>
            <img
              style={{ marginTop: "80px" }}
              className="hero-image"
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
