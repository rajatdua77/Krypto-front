import React, { useLayoutEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";
import NewsInfoCards from "../components/NewsInfoCards";
import "../styles/news.css";

const alanKey =
  "6e0a5be0f394529e169fca4665582c3f2e956eca572e1d8b807a3e2338fdd0dc/stage";
const News = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  useLayoutEffect(() => {
    function updateScreen(time) {
      alanBtn({
        key: alanKey,
        onCommand: ({ command, articles, number }) => {
          if (command === "newHeadlines") {
            setNewsArticles(articles);
            setActiveArticle(-1);
          } else if (command === "highlight") {
            setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
          } else if (command === "open") {
            const parsedNumber =
              number.length > 2
                ? wordsToNumbers(number, { fuzzy: true })
                : number;
            const article = articles[parsedNumber - 1];
            if (parsedNumber > 20) {
              alanBtn().playText("Please try that again...");
            } else if (article) {
              window.open(article.url, "_blank");
              alanBtn().playText("Opening...");
            } else {
              alanBtn().playText("Please try that again...");
            }
          }
        },
      });
    }
    requestAnimationFrame(updateScreen);
  }, []);

  return (
    <div>
      <div className="logo-container">
        <img
          src="https://i0.wp.com/synqqblog.wpcomstaging.com/wp-content/uploads/2019/11/preview.jpg?fit=1200%2C630&ssl=1"
          className="alan-logo"
          alt="logo"
          // style={{ height: "200px", width: "300px", borderRadius: "15%" }}
        />
      </div>

      <NewsInfoCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};

export default News;
