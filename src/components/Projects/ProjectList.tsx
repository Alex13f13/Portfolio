import React from 'react'
import ProjectCard from './ProjectCard'
import './ProjectStyle.css'

export default function ProjectList() {
    return (
        <div id='projects' className='projectList-container'>
            <h1>ProjectList</h1>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    )
}