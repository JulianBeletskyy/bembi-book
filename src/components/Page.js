import React, {useState, useEffect} from 'react'
import ArticleCard from './ArticleCard'
import cn from 'classnames'

const Page = ({index, articles, pageFlip}) => {
	const [flippedIndex, setFlippedIndex] = useState(999 - index)
	const [flip, setFlip] = useState(false)
	const [ready, setReady] = useState(false)

	useEffect(() => {
		if (ready) {
			if (flip === true) {
      setTimeout(() => {
        setFlippedIndex(index + 1)
        pageFlip(index + 2)
      }, 600)
      } else if (flip === false) {
        setFlippedIndex(999 - index)
        pageFlip(index)
      }
		} else {
			setReady(true)
		}
	}, [flip])

	const flipCard = () => {
		setFlip(!flip)
	}

	return (
		<div className="page">
	    <div className={cn('flip-container', {flip})} style={{zIndex: flippedIndex}}>
	      <div className="flipper">
	        <div className="front" onClick={flipCard}>
	          <ArticleCard
	          	className="bottom"
	          	article={articles[index]} />
	        </div>
	        <div className="back" onClick={flipCard}>
	          <ArticleCard
	          	className="top"
	          	article={articles[index + 1]} />
	        </div>
	      </div>
	    </div>
	  </div>
	)
}

export default Page
