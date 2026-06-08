import React from 'react'

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="container">
        <div>© {new Date().getFullYear()} Burmese Recipe App</div>
        <div style={{marginTop:8}}>
          Built with care • <a href="/" style={{color:'var(--accent)'}}>Browse recipes</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
