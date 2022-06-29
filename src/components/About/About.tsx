import React from 'react'
import './AboutStyle.css'
import Buttons from '../Button/Button'

export default function About() {
    return (
        <div id="about" className='container about-container'>
            <h2 className='about-me'>
                <span>About Me</span> <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores consequuntur repudiandae eos amet quasi asperiores
                    eligendi fugit minima iure quibusdam qui molestiae
                    veritatis repellendus culpa eaque doloremque,
                    doloribus sequi sunt.</p>
                <div className='buttons-container'>
                    <Buttons text='Learn More' onClick={() => { console.log("Hi") }} />
                    <Buttons text='More info' onClick={() => { console.log("Hellow") }} />
                </div>
            </h2>
            {/* <Technologies /> */}
        </div>
    )
}