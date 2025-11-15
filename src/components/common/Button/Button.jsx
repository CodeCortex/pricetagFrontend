import React from 'react'

const Button = ({ text, onClick, type = "button", className = "", children }) => {
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

export default Button;
