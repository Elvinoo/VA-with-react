import React, { useState } from "react";
import "./ToursPageFilters.css";

const ToursPageFilters = () => {
  const [selectedOption, setSelectedOption] = useState("all"); // Set "all" as the default selected option

  const handleOptionClick = (option) => {
    setSelectedOption(option); // Update the selected option state
  };

  return (
    <div className="filter">
      <ul>
        <li
          className={selectedOption === "all" ? "selected" : ""}
          onClick={() => handleOptionClick("all")}
        >
          <span className="disc" />
          All Tours
        </li>
        {/* Rest of the options */}
        {/* ... */}
        <li
          className={selectedOption === "cultural" ? "selected" : ""}
          onClick={() => handleOptionClick("cultural")}
        >
          <span className="disc" />
          Cultural Tours
        </li>
        <li
          className={selectedOption === "eco" ? "selected" : ""}
          onClick={() => handleOptionClick("eco")}
        >
          <span className="disc" />
          Eco Tours
        </li>
        <li
          className={selectedOption === "event" ? "selected" : ""}
          onClick={() => handleOptionClick("event")}
        >
          <span className="disc" />
          Sport and Event
        </li>
        <li
          className={selectedOption === "health" ? "selected" : ""}
          onClick={() => handleOptionClick("health")}
        >
          <span className="disc" />
          Health & Wellness
        </li>
      </ul>
    </div>
  );
};

export default ToursPageFilters;
