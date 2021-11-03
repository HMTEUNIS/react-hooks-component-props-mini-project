import Article from "./Article"

function ArticleList (props){
  
    console.log(props)
    return ( 
        <main>
            {props.articles.map(article =>
         <Article title={article.title} date={article.date} preview={article.preview}/>)}
        </main>
    )
   }
   
   export default ArticleList