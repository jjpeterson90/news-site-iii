import ArticleList from '../components/ArticleList.jsx'

function HomePage({articles}) {
  
  return (
    <div className="container">
      <ArticleList articles={articles} />
    </div>
  );
}

export default HomePage;
