import React from 'react'
import { Header } from '../components/Header';

import './index.scss'

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="spacer"></div>
    {children}
  </>
)

export default Layout
