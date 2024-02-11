function Article(article) {
    console.log(article)
  return (
    <div className="article">
      <time>{article.articleData.date}</time>
      <h2>{article.articleData.title}</h2>
      <p>{article.articleData.content}</p>
    </div>
  )
}

export default Article;