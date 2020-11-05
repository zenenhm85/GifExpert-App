import React, { useState } from "react";
import PropTypes from "prop-types";

export const CategoryAdd = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((categories) => {
        const find = categories.find((item) => item === inputValue);        
        if (!find) {
          setInputValue("");
          return [inputValue, ...categories];
          // setCategories([...categories,`Hunter ${categories.length}`]); This way is also good
        } else {            
            return categories;
        }
      });
      
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-categories"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Insert one category"
      />
    </form>
  );
};
CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired,
};