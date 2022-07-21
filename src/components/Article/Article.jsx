function Article(props) {
 
  return (
    <div>
      <h1>{ props.title }</h1>
      <p>{ props.created_date }</p>
      { props.byline && <h2>{ props.byline }</h2> }
      { props.image && <img src={ props.image }/> }
      <p>{ props.abstract }</p>
    </div>
  )
}

export default Article;

// // class-based component equivalent code:
// import React, { Component } from 'react';

// class Article extends Component {
//   render() {
//     const { title, created_date: createdDate, abstract, byline, image } = this.props;
//     return (
//       <div>
//         <h1>{ title }</h1>
//         <p>{ createdDate }</p>
//         { byline && <h2>{ byline }</h2> }
//         { image && <img src={ image }/> }
//         <p>{ abstract }</p>
//       </div>
//     )
//   }
// }

// export default Article;
