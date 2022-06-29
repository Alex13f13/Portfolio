import React from 'react'
import './ButtonStyle.css'

interface IButtonProps {
    text: string,
    onClick: () => void,
}

export default function Buttons({ text, onClick }: IButtonProps) {
    return (
        <button className='button' onClick={onClick}>{text}</button>
    )
}