import ArticleTeaser from './ArticleTeaser.jsx'
import { Link } from 'react-router-dom'

function ArticleList(props) {
 
  return (
    <div>
      {props.articles.map((article) => (
          <ArticleTeaser 
          key={article.id}
          article={article}
          />
      ))}
    </div>
  )
}

export default ArticleList;
