import React from 'react'
import './HomeStyle.css'
import img from '../../assets/perfil-img.jpeg'
import { BsMouse } from 'react-icons/bs'

export default function Home() {
    return (
        <div className='container home-container'>
            <div className='logo'>
                <div className="main-img active">
                    <span onClick={goToProjects} className="circle"></span>
                    <span onClick={goToProjects} className="circle"></span>
                    <span onClick={goToProjects} className="circle"></span>
                    <span onClick={goToProjects} className="circle"></span>
                    <span onClick={goToProjects} className="circle"></span>
                    <span onClick={goToProjects} className="circle"></span>
                    <span onClick={goToProjects} className="circle"></span>
                    <span onClick={goToProjects} className="circle"></span>
                </div>

                <img src={img} alt="Profile-img" />
            </div>

            <a href="#footer" className="scroll-down">
                <hr />
                <h5>scroll down</h5>
                <BsMouse className="scroll" />
                <hr />
            </a>
        </div>
    )
}

function goToProjects() {
    window.location.href = '#projects'
}

// function activeCircle() {
//     const toggle = document.querySelector('.main-img');
//     toggle?.classList.toggle('active')
// }