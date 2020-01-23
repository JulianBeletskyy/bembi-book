import React from 'react'

const ArticleCard = ({article}) => {
	// const hasMultimedia = article.multimedia ? (article.multimedia.length > 0 ? true : false) : false

	// const largeImage = article.multimedia.find(element => element.crop_name === 'articleLarge')

	// const thumbImage = article.multimedia.find(element => element.crop_name === 'thumbStandard')

	const imageStyle = () => {
		if (window.innerWidth >= 450) {
      return {
        backgroundImage: `url(${article})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '400px',
        height: '286px'
      }
    } else {
      return {
        backgroundImage: `url(${article})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '75px',
        height: '75px'
      }
    }
	}
	console.log(article)
	return (
		<div className="article">
	    <img src={article} style={{maxWidth: '100%'}} />
	  </div>
	)
}

export default ArticleCard
