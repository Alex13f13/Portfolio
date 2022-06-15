import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Home from '../../components/Home/Home'
import Works from '../../components/Works/Works'
import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import './HomePageStyle.css'

export default function HomePage() {
    return (
        <>
            <div className="bg-circle1"></div>
            <div className="bg-circle2"></div>
            <Header />
            <Navbar />
            <Home />
            {/*
            <About/>
            <Works />
            <Contact/>
            <Footer/>*/}
        </>
    )
}

