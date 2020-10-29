import React from 'react';
import Lines from './mainComp/Lines';
import Opener from './mainComp/Opener';

export default function Main() {

  const style = {
    backgroundImage: "url('./img/bg/Personal.jpg')"
  }

  return (
    <main id="home" className="masthead jarallax" style={style} role="main">

      {/* <!-- Lines --> */}
      <Lines />

      {/* <!-- Opener --> */}
      <Opener />

    </main>
  )
}
