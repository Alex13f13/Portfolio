import React from 'react'
import './Navbar.css'
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
// import { AiOutlineWorks } from 'react-icons/ai';
import { BiMessageRoundedDots } from 'react-icons/bi'
import { BsArrowDownCircle } from 'react-icons/bs'

export default function Navbar() {
    return (
        <div className='navbar-container'>
            <a href='#home'>
                <AiOutlineHome className='icon active-nav' />
            </a>
            <a href='#about'>
                <AiOutlineUser className='icon' />
            </a>
            {/* <a href='#works'>
                <AiOutlineWorks className='icon' />
            </a> */}
            <a href='#contact'>
                <BiMessageRoundedDots className='icon' />
            </a>
            <a href='#footer'>
                <BsArrowDownCircle className='icon' />
            </a>
        </div>
    )
}


let Icons = document.querySelectorAll('.navbar-container .icon');
Icons.forEach((icon) => {
    icon.addEventListener('click', () => {
        changeactive();
        icon.classList.add('active-nav');
    });
});

function changeactive() {
    Icons.forEach((icon) => {
        icon.classList.remove('active-nav');
    });
}