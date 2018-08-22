import React from 'react';

const Search = ({handleSearch, isFetching}) => {
    return(
        <div className="search">
            <input data-id="search" disabled={isFetching} type="search" onKeyUp={handleSearch}  placeholder='digite aqui o nome do usuario' />
       </div>
    )
}
export default Search;