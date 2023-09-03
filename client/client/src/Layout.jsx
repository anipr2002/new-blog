import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main className='p-[10px] max-w-[700px] my-0 mx-auto'>
        <Header />
        <Outlet />
    </main>
  )
}

export default Layout