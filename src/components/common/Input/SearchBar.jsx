import React, { useState } from 'react'
import Input from './Input';
import {Button} from '../Button/Button';

const SearchBar = ({ placeholder = "Search...", buttonText = "Search", onSearch, className = "", inputClass = "" }) => {

    const [query, setQuery] = useState("");
    return (
        <div className={`flex gap-2 items-center ${className}`}>
            <Input
                id="search"
                name="search"
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={`flex-1 ${inputClass}`}
            />

            <Button
                text={buttonText}
                onClick={() => onSearch(query)}
                className="bg-orange hover:bg-orange/80"

            />


        </div>
    )
}

export default SearchBar
