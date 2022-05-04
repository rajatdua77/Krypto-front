import React from "react";
import NewsCard from "../NewsCard";
import { Row, Col, Typography } from "antd";
import styles from "./Styles.modules.css";

const infoCards = [
  {
    color: "#00838f",
    title: "Latest News",
    text: "Give me the latest news",
  },
  {
    color: "#1565c0",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
];

const NewsInfoCards = ({ articles, activeArticle }) => {
  if (!articles.length) {
    return (
      <Row>
        {infoCards.map((infocard) => {
          <Col xs={8} sm={16} md={24} lg={32} className={styles["infoCard"]}>
            <div
              className={styles["card"]}
              style={{ backgroundColor: infocard.color }}
            >
              <Typography variant="h5" className={styles["title"]}>
                {infocard.title}
              </Typography>
              {infocard.info ? (
                <Typography variant="h6">
                  <strong>{infocard.title.split(" "[2])}:</strong>
                  <br />
                  {infocard.info}
                </Typography>
              ) : null}
              <Typography variant="h6">
                Try Saying : <br />
                <i>{infocard.text}</i>
              </Typography>
            </div>
          </Col>;
        })}
      </Row>
    );
  }

  return (
    <Row>
      {articles.map((article, i) => (
        <Col xs={8} sm={16} md={24} lg={32}>
          <NewsCard
            article={article}
            activeArticle={activeArticle}
            i={i}
            style={{ display: "flex" }}
          />
        </Col>
      ))}
    </Row>
  );
};

export default NewsInfoCards;
