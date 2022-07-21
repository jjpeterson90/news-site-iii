import ArticleList from '../components/ArticleList/ArticleList.jsx'
import News from '../data/news.json';

function HomePage() {
  const handleTitleClick = (articleID) => console.log("TODO - use React Router\'s history.push() method to change the page to /article/${articleID}");

  return (
    <div>
      <ArticleList 
        articles={News} 
        handleTitleClick={handleTitleClick} 
      />
    </div>
  );
}

export default HomePage;
