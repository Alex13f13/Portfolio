import React from 'react'
import Work from './Work'
import './WorksStyle.css'

export default function Works() {
    return (
        <div className='works-Container'>
            <h1>Works</h1>
            <Work />
            <Work />
            <Work />
        </div>
    )
}