import Header from './components/Header.jsx'
import './App.css'
import articles from './data/articles.jsx'
import Article from './components/Article.jsx'

function App() {

  console.log(articles)
    
  return (
    <>
      <Header />
      {articles.map((article, index) =>{
        console.log(article)
        return (<Article articleData = {article} key={index} />)
      })}

      {/* <Footer /> */}
      
    </>
  )
}

export default App
