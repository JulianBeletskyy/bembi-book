import React, { useState, useEffect } from 'react'
import './App.css'

let page = null
const $ = window.$

const options = {
  width: 'auto',
  height: '100vh',
  autoCenter: true,
  display: "double",
  acceleration: true,
  elevation: 50,
  gradients: !$.isTouch,
  when: {
    turned: function(e, page) {
      console.log("Current view: ", $(this).turn("view"));
    }
  }
}

const bembi = [...new Array(48)].map((item, i) => {
  return require(`./assets/images/Bembi/Bembi-${i+1}.jpg`)
})

const App = () => {
  useEffect(() => {
    const [src] = bembi
    var img = new Image();
    img.onload = function() {
      const ratio = img.width / img.height
      const pageWidth = window.innerHeight * ratio
      console.log(pageWidth)
      $(page).turn(Object.assign({}, options, {width: pageWidth*2}))
      document.addEventListener("keydown", handleKeyDown, false)
    }
    img.src = src
    
  }, [])
  const handleKeyDown = event => {
    if (event.keyCode === 37) {
      $(page).turn("previous")
    }
    if (event.keyCode === 39) {
      $(page).turn("next")
    }
  }
  console.log('render')
  return (
    <div className="App">
      <div
        className="magazine"
        ref={ref => page = ref} >
        {
          bembi.map((page, i) => (
            <div key={i} className="page">
              <img src={page} alt="" className="image" />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
