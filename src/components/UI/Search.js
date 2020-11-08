import React, { useState } from 'react'

const Search = ({ getQuery }) => {
    
    const [text, setText] = useState('');

    const handleChange = (query) => {
        setText(query);
        // this getQuery function is passed from the parent component
        getQuery(query);
    }

    return (
        <section className='search'>
            <form>
                <input type='text' 
                className='form-control' 
                placeholder='Search Characters'
                value={text}
                onChange={(e) => handleChange(e.target.value)}
                autoFocus
                 />
            </form>
        </section>
    )
}

export default Search

