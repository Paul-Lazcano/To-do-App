import React, { useState } from 'react'
// ``
//< > =>
export function TodoSearch({ searchValue, setSearchValue }) {
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };


    return [
        <input 
            type="text"
            placeholder='Do homework'
            className='searcher'
            value={searchValue}
            onChange={onSearchValueChange}
        />,
    ];
}