import './App.css';
import { useState } from "react"
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
// data
import News from './data/news.json';
import navItemsData from './data/navItems.json';
// components
import AppNav from './components/AppNav.jsx';
// pages
import HomePage from './pages/HomePage.jsx'
import ArticlePage from './pages/ArticlePage.jsx'

// seed values
const randomArticleIndex = Math.floor(Math.random() * News.length);
const randomArticle = News[randomArticleIndex];

function App() {
  // states
  const [navItems, setNavItems] = useState(navItemsData)
  const [articles, setArticles] = useState(News.map((article, index) => {
    return {
      id: index,
      title: article.title,
      abstract: article.abstract,
      byline: article.byline,
      image: article.multimedia.length ? article.multimedia[0].url : null,
      created_date: article.created_date
    }})
  )

  const getArticleById = (articleID) => {
    return articles[articleID]
  }

  // renders
  return (
    <div>
      <AppNav navItems={navItems} />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage articles={articles} />} />
          <Route path="/articles/:articleID" element={<ArticlePage getArticleById={getArticleById}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
