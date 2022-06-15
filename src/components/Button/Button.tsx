import React from 'react'
import './ButtonStyle.css'

export default function Buttons() {
    return (
        <div className='container button-container'>
            <a href="#about" className="btn pri">
                Learn More
            </a>
            <a href="#contact" className="btn sec">
                Get in Touch
            </a>
        </div>
    )
}