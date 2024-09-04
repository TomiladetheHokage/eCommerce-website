import React from "react";
import './style/searchBar.css';

function searchBar(props) {
  return (
    <div className="input_container">
      <img className="input_image" src={props.image} alt="SearchIcon" />
      <input
        className="input_field"
        type={props.text}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default searchBar;
