import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom'
import ArticleList from '../components/ArticleList.jsx'

function SectionPage( { articles } ) {

  let { sectionName } = useParams();
  const [ sectionArticles, setSectionArticles ] = useState()

  useEffect(() => {
    let article_list = articles.filter(article => article.section.toLowerCase() == sectionName.toLowerCase() );
    setSectionArticles(article_list)
  }, [sectionName])

  return (
	  <div className="container">
			{ sectionArticles
        ?
        <ArticleList articles={sectionArticles} />
        :
        null
        }
	  </div>
  )
}

export default SectionPage