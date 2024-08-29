import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
    <NavLink to="/home">HOME</NavLink>
    <NavLink to="/contact">contacts</NavLink>
    <NavLink to="/about">About</NavLink>
</div>

  )
}

export default Header