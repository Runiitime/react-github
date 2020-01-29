import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <ul className="nav">
          <li><Link to="/">Мой профиль</Link></li>
          <li><Link to="/team">Моя команда</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header