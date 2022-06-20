import React from "react";
import Data from "./Data";
 
const Buttons = ({ setItem, menuItems }) => {
    const filterItem = (curcat) => {
        const newItem = Data.filter((newVal) => {
          return newVal.category === curcat; 
                // comparing category for displaying data
        });
        setItem(newItem);
      };
  return (
    <>
      <div className="d-flex justify-content-center">
        {menuItems.map((Val, id) => {
          return (
            <button
              className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold" onClick={filterItem}
              key={id}
            >
              {Val}
            </button>
          );
        })}
        <button
          className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setItem(Data)}
        >
          All
        </button>
       </div>
    </>
  );
};
 
export default Buttons;