import React from "react";
import "./SortButon.scss";

function SortButton({ handleSortData }) {
  return (
    <div className="sort-btn">
      <button
        onClick={() => {
          handleSortData("az");
        }}
      >
        Sort A-Z
      </button>
      <button onClick={handleSortData}>Sort Z-A</button>
    </div>
  );
}

export default SortButton;
