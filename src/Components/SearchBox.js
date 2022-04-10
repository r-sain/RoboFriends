import React from 'react';
import '../Containers/app.css';

const SearchBox =({searchfield, searchChange})=>{

	return(
		<div className='pa2'>
		<input 
		className='pa3 br3 bn bw0 bg-lightest-blue'
		type='search' 
		placeholder='Search Robots'
		onChange={searchChange} 
		/>
		</div>
		);
}

export default SearchBox;