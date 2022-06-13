import React from 'react'
import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Home from '../../components/Home/Home'
import Works from '../../components/Works/Works'
import './HomePageStyle.css'

export default function HomePage() {
    return (
        <div>
            <Header />
            <Home />
            <Works />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}
