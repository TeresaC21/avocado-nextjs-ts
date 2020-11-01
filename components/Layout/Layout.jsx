import React from 'react'
import Navbar from '../Navbar/Navbar'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer className="container">This is a footer</footer>
      <style jsx>{`
        .container {
          background: salmon;
        }
      `}</style>
    </div>
  )
}

export default Layout
