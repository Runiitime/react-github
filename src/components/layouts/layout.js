import React from 'react'
import Header from './header'

const Layout = ({children}) => {

  return (
    <>
      <Header/>
      <div className="main">
        <div className="container">
          {children}
        </div>
      </div>
    </>  
  )
}

export default Layout