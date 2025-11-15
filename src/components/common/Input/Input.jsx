import React from 'react'

const Input = ({ label, name, type = "text", placeholder, value, onChange, className = "" }) => {
    return (
        <div className='flex flex-col gap-2 w-full'>
            {label && <label htmlFor={name}>{label}</label>}
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`border border-gray-300 px-4 py-2 rounded-md outline-none focus:border-orange transition-all ${className} `}
            />
        </div>
    )
}

export default Input
