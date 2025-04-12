function SearchBar({ searchQuery, onSearch }) {
    return (
        <div className="search-bar">
            <label><b>Search: </b></label>
            <input
                type="text"
                placeholder="Search by name or description..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;
