import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
  return (
    <div className='search-bar'>
            <input className='search-input' placeholder='ابحث...' />
            <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon'/>
            
        </div>
  )
}

export default SearchBar