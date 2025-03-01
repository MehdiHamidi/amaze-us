import React from 'react';
import PropTypes from 'prop-types';

import Input from './../../components/input'
import './searchBar.css';
/**
 * TODO: Fix the issue below 
 * 
 * @param key is used to surpress console warning while testing : 
 * "Each child in a list should have a unique "key" prop."
 * This is a workaround and should be dealt with while testing
 * 
 */
const SearchBar = (props) => {
    const { className, value, setKeyWord, launchSearch, onKeyPressed } = props;
    return (
        <div key={"SearchBar"} className={`searchBar-container ${className}`} >
            <div className="searchBar-form">
                <Input className="search-input" value={value} placeholder="Search for an artist" onChange={setKeyWord} onKeyPressed={onKeyPressed} />
            </div>

            <div className="search-button" onClick={launchSearch}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M 19.5 3 C 14.26514 3 10 7.2651394 10 12.5 C 10 14.749977 10.810825 16.807458 12.125 18.4375 L 3.28125 27.28125 L 4.71875 28.71875 L 13.5625 19.875 C 15.192542 21.189175 17.250023 22 19.5 22 C 24.73486 22 29 17.73486 29 12.5 C 29 7.2651394 24.73486 3 19.5 3 z M 19.5 5 C 23.65398 5 27 8.3460198 27 12.5 C 27 16.65398 23.65398 20 19.5 20 C 15.34602 20 12 16.65398 12 12.5 C 12 8.3460198 15.34602 5 19.5 5 z" />
                </svg>
            </div>
        </div>
    );
}

SearchBar.propTypes = {
    setKeyWord: PropTypes.func.isRequired,
    launchSearch: PropTypes.func.isRequired,
    onKeyPressed: PropTypes.func,
}

export default SearchBar;