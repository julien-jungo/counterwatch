import { useState } from "react";

const SearchBar = ({ onSearchTermChange }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const onChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearchTermChange(value);
    }

    return (
        <input
            className='px-2 py-4 rounded-lg text-slate-800 shadow-xl focus:outline focus:outline-4 focus:outline-slate-900'
            type='text'
            value={searchTerm}
            onChange={onChange}
            placeholder='Search for a hero to counter ...'
        />
    );
};

export default SearchBar;
