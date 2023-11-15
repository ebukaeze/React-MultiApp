import React from "react";

const SearchBar = ({
  inStockOnly,
  filterText,
  onSetFilterText,
  onSetInStockOnly,
}) => {
  return (
    <form className="form">
      <input
        type="text"
        className="search"
        placeholder="search products"
        value={filterText}
        onChange={(e) => onSetFilterText(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onSetInStockOnly(e.target.checked)}
        />{" "}
        Only Show products in stock
      </label>
    </form>
  );
};

export default SearchBar;
