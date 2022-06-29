import React from 'react'
import './HomeStyle.css'
import img from '../../assets/perfil-img.jpeg'
import { BsMouse } from 'react-icons/bs'

export default function Home() {
    return (
        <div className='container home-container'>
            <div className='logo'>
                <div className="main-img" onClick={activeCircle}>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
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


function activeCircle() {
    const toggle = document.querySelector('.main-img');
    toggle?.classList.toggle('active')
}