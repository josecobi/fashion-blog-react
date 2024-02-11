function Article(article) {
    console.log(article)
  return (
    <div className="article">
      <time>{article.articleData.date}</time>
      <h2>{article.articleData.title}</h2>
      <img src={article.articleData.image} />
      <p className="first-paragraph">{article.articleData.content}</p>
      <details>
        <summary className="continues">Continues...</summary>
        <p>{article.articleData.continues}</p>
      </details>
      <hr />
    </div>
  )
}

export default Article;