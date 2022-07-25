import '../App.css'

function Article( { title, abstract, byline, image, created_date } ) {

  const getPropByLine = () => {
    if (byline === null) return ''
    return byline
  }
 
  return (
    <div className="mt-3">
      <div className="d-flex align-items-center">
        <div className="article-img me-3">
          { image ?
          <img src={image} className="rounded align-self-center"/>
          : '' }
        </div>
        <div className="">
          <h1 className="m-0 mb-2"><b>{title.replace('.','')}</b></h1>
          <p className="m-0 text-muted">Created: {created_date.substring(0,10)}</p>
          { byline ?
            <h3 className="m-0">{getPropByLine()}</h3>
            : ''
          }
          <p className="m-0">{abstract}</p>
        </div>
      </div>
    </div>
  )
}

export default Article;