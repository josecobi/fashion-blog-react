import Header from './components/Header.jsx'
import './index.css'
import articles from './data/articles.jsx'
import Article from './components/Article.jsx'
import Footer from './components/Footer.jsx'

function App() {

  console.log(articles)
    
  return (
    <>
      <Header />
      {articles.map((article, index) =>{
        console.log(article)
        return (<Article articleData = {article} key={index} />)
      })}

      <Footer />
      
    </>
  )
}

export default App
