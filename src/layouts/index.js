import React from 'react'
import { Header } from '../components/Header';
import { Messenger } from '../components/Messenger';

import './index.scss'

const Layout = ({ children }) => (
  <>
    <Messenger />
    <Header />
    <div className="spacer"></div>
    {children}
    
  </>
)

export default Layout
