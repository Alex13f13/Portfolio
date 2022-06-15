import React from 'react'
import './HomeStyle.css'
import img from '../../props/perfil-img.jpeg'
import { BsMouse } from 'react-icons/bs'
import Buttons from '../Button/Button'

export default function Home() {
    return (
        <div id='home' className='container home-container'>
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

            <h2>
                <span>About Me</span> <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores consequuntur repudiandae eos amet quasi asperiores
                    eligendi fugit minima iure quibusdam qui molestiae
                    veritatis repellendus culpa eaque doloremque,
                    doloribus sequi sunt.</p>
            </h2>

            <Buttons />
        </div>
    )
}


function activeCircle() {
    const toggle = document.querySelector('.main-img');
    toggle?.classList.toggle('active')
    console.log(toggle);
}