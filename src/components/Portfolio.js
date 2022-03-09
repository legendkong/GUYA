import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web';


function Portfolio() {

    const container = useRef(null);

    useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../Automatedportfolio.json')
    })
  }, [])

  return (
    <div>
      <h1 className='header'>
        You are an avid risk taker...we love it.
      </h1>
      <br></br>
      <h3>Here is our recommended portfolio:</h3>

      <div className="container2" ref={ container }></div>

      <h1 className='figure'><span classname='tag2'>30%</span> &nbsp;&nbsp;&nbsp;Savings</h1>
      <h1 className='figure'><span classname='tag2'>50%</span> &nbsp;&nbsp;&nbsp;Spendings</h1>
      <h1 className='figure'><span classname='tag2'>20%</span> &nbsp;&nbsp;&nbsp;Investments</h1>

    <button className='generate'>
        SYNC YOUR BANK
      </button>




    </div>
  )
}

export default Portfolio