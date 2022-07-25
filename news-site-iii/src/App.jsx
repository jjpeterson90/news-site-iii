import './App.css';
import { useState, useEffect } from "react"
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { debounce } from "lodash";
// data
import News from './data/news.json';
// components
import AppNav from './components/AppNav.jsx';
// pages
import HomePage from './pages/HomePage.jsx'
import ArticlePage from './pages/ArticlePage.jsx'
import SectionPage from './pages/SectionPage.jsx'
// seed values
const randomArticleIndex = Math.floor(Math.random() * News.length);
const randomArticle = News[randomArticleIndex];

function App() {
  // states
  const [ searchTitle, setSearchTitle ] = useState('')
  const [ filteredArticles, setFilteredArticles ] = useState('')
  const [ articles, setArticles ] = useState(News.map(( article, index ) => {
    return {
      id: index,
      section: article.section,
      title: article.title,
      abstract: article.abstract,
      byline: article.byline,
      image: article.multimedia.length ? article.multimedia[0].url : null,
      created_date: article.created_date
    }})
  )

  const handleSearch = debounce((event) => {
    const value = event.target.value
    setSearchTitle(value)
  }, 500)

  useEffect(() => {
    let filtered = articles.filter(article => article.title.toLowerCase().includes(searchTitle.toLowerCase()))
    setFilteredArticles(filtered)
  }, [searchTitle])

  const getArticleById = ( articleID ) => {
    return articles[ articleID ]
  }

  // renders
  return (
    <div>
      
      <Router>
        <AppNav handleSearch={handleSearch}/>
        <Routes>
          <Route path="/" element={ <HomePage articles={ filteredArticles ? filteredArticles : articles } /> } />
          <Route path="/articles/:articleID" element={ <ArticlePage getArticleById={ getArticleById }/> } />
          <Route path="/sections/:sectionName" element={ <SectionPage articles={ filteredArticles ? filteredArticles : articles }/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
