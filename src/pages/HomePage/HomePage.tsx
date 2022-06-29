import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Home from '../../components/Home/Home'
import About from '../../components/About/About'
import ProjectList from '../../components/Projects/ProjectList'
// import Contact from '../../components/Contact/Contact'
// import Footer from '../../components/Footer/Footer'
import './HomePageStyle.css'

export default function HomePage() {
    return (
        <>
            <div className="bg-circle1"></div>
            <div className="bg-circle2"></div>
            <Navbar />
            <div id='home'>
                <Header />
                <Home />
            </div>
            <About/>
            <ProjectList />
            {/*
            <Contact/>
            <Footer/>*/}
        </>
    )
}