import React from 'react'
import { Header } from '../components/Header';

import './index.scss'

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
)

export default Layout
