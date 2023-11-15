import React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductsTable from "./ProductsTable";

const FilterableProductsTable = ({ products }) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className="filter-products-table">
      <SearchBar
        inStockOnly={inStockOnly}
        filterText={filterText}
        onSetFilterText={setFilterText}
        onSetInStockOnly={setInStockOnly}
      />
      <ProductsTable
        products={products}
        inStockOnly={inStockOnly}
        filterText={filterText}
      />
    </div>
  );
};

export default FilterableProductsTable;
