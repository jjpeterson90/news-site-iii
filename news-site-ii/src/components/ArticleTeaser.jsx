import { Link } from 'react-router-dom'

function ArticleTeaser(props) {
  
  return (
    <div>
      <hr />
      <div className="d-flex">
        <div>
          { props.article.image ?
            <img src={props.article.image} className="rounded portrait me-3 align-self-center"/>
            : '' }
        </div>
        <div>
          <h3 className="m-0 text-capitalize">
          <Link to={`/articles/${props.article.id}`}>
            {props.article.title.replace('.','')}
          </Link>
          </h3>
          <p className="m-0 text-muted">
            Created: {props.article.created_date.substring(0,10)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ArticleTeaser;