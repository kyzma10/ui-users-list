import React from 'react';

const Search = ({handleChange}) => {
  return (
    <div className='ui icon input'>
      <input type='text' placeholder='Search...' onChange={e => handleChange(e)}/>
      <i aria-hidden='true' className='search icon'/>
    </div>
  );
};

export default Search;
