import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layouts = () => {
    return (
        <>
            <Header />
            <main className="container min-h-screen mx-auto my-10 ">
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}

export default Layouts
