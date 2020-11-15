import './search-box.style.css';
import React from "react";

export const SearchBox = ({ placeholder, handleChange}) => {
    return (
        <input
            className='search'
            onChange={handleChange}
            type='search'
            placeholder={placeholder}
        />
)};