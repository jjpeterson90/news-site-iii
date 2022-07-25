import ArticleTeaser from './ArticleTeaser.jsx'
import Article from './Article'

function ArticleGroup({article}) {

    return(
        <div>
            <hr className="container" />
            <ArticleTeaser
                id={article.id}
                title={article.title}
                created_date={article.created_date}
                handleTitleClick={handleTitleClick} 
            />
            <hr className="container"/>
            <Article {...article} />
        </div>
    )
}

export default ArticleGroup