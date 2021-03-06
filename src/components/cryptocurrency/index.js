import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import Cryptocard from "../cryptocard";
import Loader from "../Loader";
const { Title } = Typography;
const Cryptocurrency = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  console.log(data);
  const globalStats = data?.data?.stats;
  if (isFetching)
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader />
      </div>
    );
  return (
    <div>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row gutter={[0, 32]}>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={globalStats.totalCoins}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap:"
            value={`$${millify(globalStats.totalMarketCap)}`}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={`$${millify(globalStats.total24hVolume)}`}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={globalStats.totalCoins}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div style={{ marginTop: "40px" }}>
        <Title level={2} className="home-title">
          Top 10 Cryptos In The World
        </Title>
        {/* <Title level={3} className="show-more">
          <Link to="/Cryptocard">Show more</Link>
        </Title> */}
      </div>
      <Cryptocard simplified />
    </div>
  );
};

export default Cryptocurrency;
