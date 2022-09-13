import React from 'react';
import Input from "./Input/Input";

const Search = ({filter, setFilter}) => {
    return (
        <div className='search'>
            <img className='search__icon' src="../images/search.svg" alt="" />
            <Input
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск..."
            />
        </div>
    );
};

export default Search;