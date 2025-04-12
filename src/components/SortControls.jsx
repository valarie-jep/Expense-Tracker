function SortControls({ sortBy, onSortChange }) {
    return (
        <div className="sort-controls">
            <label htmlFor="sort"><b>Sort by: </b></label>
            <select
                id="sort"
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
            >
                <option value="">-- None --</option>
                <option value="category">Category (A-Z)</option>
                <option value="description">Description (A-Z)</option>
            </select>
        </div>
    );
}

export default SortControls;
