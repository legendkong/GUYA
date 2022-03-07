import { useAuth0 } from '@auth0/auth0-react';
import lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';

const LoginButton = () => {
   const { loginWithRedirect, isAuthenticated } = useAuth0();
   const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../loginanimation.json')
    })
  }, [])
  return (
     !isAuthenticated && (
         <main className="column">
      <h1 className="title"></h1>
      <div className="container" ref={container}></div>
      <h3>Start your financial journey today with GUYA</h3>
      <br></br>
      <p>The all-in-one money app that helps educate, budget, save and invest.
      </p><br></br>
 <p>GUYA helps you in achieving financial 
independence by advising you</p><p> on how to 
manage your money on a daily basis.</p>
      

      <button onClick={() => loginWithRedirect()}>
         GET STARTED
      </button>
      </main>
      
     )
  )
}

export default LoginButton