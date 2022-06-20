import React from 'react'
import './AboutStyle.css'
import Buttons from '../Button/Button'

export default function About() {
    return (
        <div id="about" className='container about-container'>
            <h2>
                <span>About Me</span> <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores consequuntur repudiandae eos amet quasi asperiores
                    eligendi fugit minima iure quibusdam qui molestiae
                    veritatis repellendus culpa eaque doloremque,
                    doloribus sequi sunt.</p>
            </h2>
            <Buttons />
            {/* <Technologies /> */}
        </div>
    )
}