import search from '../Assets/search.svg';
const SearchBar = ({handleSearch, searchValue, enterToSearch, handleClick}) => {

    return(
        <div>
        <div className="search-bar">
            <div className="logo">
                <h2><span>Jp</span>Movies</h2>
            </div>
            <div className="input-div">
            <input
            type="text"
            onChange={handleSearch}
            onKeyDown={enterToSearch}
            placeholder="Search for a movie..."
            name="movie"
            />
            <div className='search' onClick={handleClick}>
                <img src={search} alt="search-icon" />
            </div>
            </div>
        </div>
        </div>
    )
}
export default SearchBar;