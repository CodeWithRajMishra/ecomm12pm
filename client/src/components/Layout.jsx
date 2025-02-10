import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import TopHeader from './TopHeader'

const Layout = () => {
  return (
    <>
    <TopHeader/>
    <Header/>
    <Outlet/>

    <Footer/>
    </>
  )
}

export default Layout