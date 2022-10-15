import React from 'react';
import Header from './components/Header.js';
import Main from './components//Main.js';
import Footer from './components//Footer.js';

function Page (){

  const [darkMode, setDarkMode] = React.useState(false)

  function toggle(){
    setDarkMode(prevMode => !prevMode)
    console.log(darkMode)
  }

  return(
  <div className="page">
      <Header darkMode={darkMode} toggle={toggle}/>
      <Main darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
  </div>
  
  )
}

export default Page;