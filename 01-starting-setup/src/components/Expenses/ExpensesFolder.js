// import React from "react";
import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const [filterYear, setFilterYear] = useState(props.filterYear);
  

  const clickHandler = (filterYear) => {
    setFilterYear("filterYear");
    console.log(filterYear);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
        {/* <button onClick={clickHandler}>Change filterYear</button> */}
      </div>
    </div>
    
  );
};

export default ExpensesFilter;
