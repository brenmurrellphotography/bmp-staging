import React from 'react'
import './header.scss'

import { Nav } from '../Nav';
import { Logo } from '../Logo';

const Header: React.FC = () => {
  return (
    <header>
      <Nav />
      <Logo />
    </header>
  )
}

export default Header