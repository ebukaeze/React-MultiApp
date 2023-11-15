import React from "react";

const ProductCategoryRow = ({ category }) => {
  return (
    <tr aria-colspan={2} className="category">
      <th>{category}</th>
    </tr>
  );
};

export default ProductCategoryRow;
