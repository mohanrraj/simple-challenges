import React from 'react'

const Search = ({searchInput, handleSearch}) => {
  return (
    <div>
        <input type='text' onChange={handleSearch} placeholder='Search Skill' value={searchInput} />
    </div>
  )
}

export default Search