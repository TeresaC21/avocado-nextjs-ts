import React from 'react'

//Components
import Navbar from '../Navbar/Navbar'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

export default Layout
