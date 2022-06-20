import React, { useEffect } from 'react'
import './Navbar.css'
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineProject } from 'react-icons/ai';
import { BiMessageRoundedDots } from 'react-icons/bi'
import { BsArrowDownCircle } from 'react-icons/bs'

export default function Navbar() {
    useEffect(() => {
        const icons = document.querySelectorAll('.navbar-container .icon')
        icons.forEach((icon: any) => {
            icon.addEventListener('click', () => {
                changeActive(icons);
                icon.classList.add('active-nav');
            });
        });
    }, [])

    const changeActive = (icons: any) => {
        icons.forEach((icon: any) => {
            icon.classList.remove('active-nav');
        });
    }


    return (
        <div className='navbar-container'>
            <a href='#home'>
                <AiOutlineHome className='icon active-nav' />
            </a>
            <a href='#about'>
                <AiOutlineUser className='icon' />
            </a>
            <a href='#projects'>
                <AiOutlineProject className='icon' />
            </a>
            <a href='#contact'>
                <BiMessageRoundedDots className='icon' />
            </a>
            <a href='#footer'>
                <BsArrowDownCircle className='icon' />
            </a>
        </div>
    )
}