import ArticleList from '../components/ArticleList/ArticleList.js'
import News from '../data/news.json';

function HomePage() {
  return (
    <div>
      <ArticleList articles={News} handleTitleClick={(articleID) => console.log("TODO - use React Router\'s history.push() method to change the page to /article/${articleID}") } />
    </div>
  );
}

export default HomePage;
