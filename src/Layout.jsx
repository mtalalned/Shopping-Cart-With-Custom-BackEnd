import React from 'react'
import ResponsiveAppBar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
    </>
  )
}

export default Layout
