import React from "react"
import { Link } from 'gatsby';
import './nav.scss';

const Nav: React.FC = () => {
  return (
    <nav>
      <Link className="nav--link" to="/">Home</Link>
      {/* <Link className="nav--link" to="/gallery">Gallery</Link>
      <Link className="nav--link" to="/contact">Contact</Link> */}
    </nav>
  )
}

export default Nav
