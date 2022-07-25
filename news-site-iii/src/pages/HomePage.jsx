
import ArticleList from '../components/ArticleList.jsx';

function HomePage( { articles } ) {

  console.log(articles)

  return (
    <div className="container">
      <ArticleList articles={ articles } />
    </div>
  );
}

export default HomePage;
