import React from 'react'

export const Button = ({ text, onClick, type = "button", className = "", children }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-4 py-2 rounded-md bg-orange text-white transition-all duration-300 hover:bg-orange/80 ${className}`}
        >
            {children|| text}
        </button>
    )
}


export const GradientButton=({text, onClick, type="button", children, className=""})=>{
    return(
        <button
        type={type}
        onClick={onClick}
        className={`px-4 py-2 rounded-sm bg-gradient-to-r from-white to-orange transition-all duration-300 shadow-2xl text-black hover:text-white hover:bg-orange hover:bg-none ${className}`}
        >
            {children|| text}
            
        </button>
    )
}