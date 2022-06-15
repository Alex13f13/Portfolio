import React from 'react'
import Work from './Work'
import './WorksStyle.css'

export default function Works() {
    return (
        <div className='works-container'>
            <h1>Works</h1>
            <Work />
            <Work />
            <Work />
        </div>
    )
}