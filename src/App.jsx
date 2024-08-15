import React from "react";

import "./styles/App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import { Counter } from "./components/Counter/counter";

import ArticleImg1 from "./assets/imgs/article-img.jpg";
import ArticleImg2 from "./assets/imgs/article-img-2.jpg";
import ArticleImg3 from "./assets/imgs/article-img-3.jpg";

// Componente em classe é uma classe que herda a calsse Componente do React,
// e retorna HTML dentro do método render().

class App extends React.Component {
  // Método responsável por renderizar o conteúdo HTML do nosso componentes
  render() {
    return (
      <>
        <Navbar />

        <Counter />

        {/*  <section id="articles">
          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rem
            temporibus consequatur provident corrupti fugiat, incidunt illo.
            Recusandae distinctio cumque quaerat, quasi labore fuga alias ullam,
            provident, esse quibusdam sequi!"
            image={ArticleImg1}
          />
          <Article
            title="Vibrant Portraits of 2020"
            provider="Space News"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rem
            temporibus consequatur provident corrupti fugiat, incidunt illo.
            Recusandae distinctio cumque quaerat, quasi labore fuga alias ullam,
            provident, esse quibusdam sequi!"
            image={ArticleImg2}
          />
          <Article
            title="36 Days of Malayalam Type"
            provider="Space Flight Now"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rem
            temporibus consequatur provident corrupti fugiat, incidunt illo.
            Recusandae distinctio cumque quaerat, quasi labore fuga alias ullam,
            provident, esse quibusdam sequi!"
            image={ArticleImg3}
          />
          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rem
            temporibus consequatur provident corrupti fugiat, incidunt illo.
            Recusandae distinctio cumque quaerat, quasi labore fuga alias ullam,
            provident, esse quibusdam sequi!"
            image={ArticleImg1}
          />
        </section> */}
      </>
    );
  }
}

export default App;
