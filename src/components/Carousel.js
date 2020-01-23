import React from 'react'
import Page from './Page'
import ArticleCard from './ArticleCard'

const Carousel = ({articles, getMore, tales}) => {
	const [topArticle] = tales
	const pageArticles = articles.slice(1, articles.length - 1)
	const pageTales = tales.slice(1, tales.length - 1)
	// console.log(pageTales)
	const handlePageFlip = (index) => {
		if (index >= (articles.length - 6)) {
      getMore()
   	}
	}
	return (
		<div className="carousel">
	    <div className="first" >
	      <ArticleCard
	      	className="top"
	      	article={topArticle} />
	    </div>
	    <div className="pages" >
	    	{
	    		pageTales.map((page, key) => {
	    			if (key % 2 === 0) {
	    				return (
	    					<Page
	    						key={key}
	    						index={key}
	    						pageFlip={handlePageFlip}
	    						articles={pageTales} />
    					)
	    			} else {
	    				return null
	    			}
	    		})
	    	}
	    </div>
	    <div className="hidden">
	    	{
	    		// tales.map((article, i) => {
	    		// 	return (
	    		// 		<ArticleCard key={i} article={article} />
    			// 	)
	    		// })
	    	}
	    </div>
	  </div>
	)
}

export default Carousel
