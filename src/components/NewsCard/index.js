import React, { useEffect, useState, createRef } from "react";
import { Card, Typography } from "antd";

const { Meta } = Card;

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  i,
  activeArticle,
}) => {
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);
  return (
    <Card
      style={{ width: 300 }}
      ref={elRefs[i]}
      className="newsCard"
      onClick={url ? () => window.open(url, "_blank") : null}
      cover={
        <img
          src={
            urlToImage ||
            "https://images.hindustantimes.com/img/2021/12/09/550x309/WhatsApp_Image_2021-09-18_at_09.42.18_1631944439782_1639027840783.jpeg"
          }
          alt="news-img"
        />
      }
    >
      <Meta title={title} description={description} />
      <div className="details">
        <Typography>
          <span>{source.name}</span>
          <span>{new Date(publishedAt).toDateString()}</span>
        </Typography>
      </div>
    </Card>
  );
};

export default NewsCard;
