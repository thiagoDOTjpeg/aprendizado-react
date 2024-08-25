import React, { useEffect, useState } from "react";
import axios from "axios";

import "./styles/App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

import { ThreeDots } from "react-loader-spinner";

// Componente em classe é uma classe que herda a calsse Componente do React,
// e retorna HTML dentro do método render().

// Componente funcional é uma função que retorna um HTML

export function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await axios.get(
        "https://api.spaceflightnewsapi.net/v4/articles/"
      );
      const newsData = response.data.results;

      setNews(newsData);
      console.log(newsData);
    }

    loadNews();
  }, []);

  // Método responsável por renderizar o conteúdo HTML do nosso componentes
  return (
    <>
      {/* <Counter /> */}
      <Navbar />

      <section id="articles">
        {news.length === 0 ? (
          <div
            style={{
              height: "400px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="white"
              ariaLabel="loading"
            />
          </div>
        ) : (
          news.map((article) => {
            return (
              <Article
                title={article.title}
                provider={article.news_site}
                description={article.summary}
                image={article.image_url}
              />
            );
          })
        )}
      </section>
    </>
  );
}
