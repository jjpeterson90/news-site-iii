import { useParams } from 'react-router-dom'
import Article from '../components/Article.jsx'

function ArticlePage({getArticleById}) {

  console.log(useParams)
  let { articleID } = useParams();

  const article = () => {
    return getArticleById(articleID)
  }

  // (lecture version):
  // const article = getArticleById(articleID-1)

  return (
    <div className="container">
      <Article {...article()}/>

      {/* (lecture version):
      <Article {...article} /> */}

    </div>
  )
}

export default ArticlePage;
