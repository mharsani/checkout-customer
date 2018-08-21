import React from 'react';

const Search = ({handleSearch}) => {
    return(
        <div className="search">
            <input  type="search" onKeyUp={handleSearch} placeholder='digite aqui o nome do usuario' />
       </div>
    )
}
export default Search;