import React, { useState } from 'react';
import '../css/DropdownList.css';

const DropdownList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTriangleInverted, setIsTriangleInverted] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
    setIsTriangleInverted(!isTriangleInverted);
  };

  return (
    <div className="dropdown">
      <div className={`dropdown-header ${isOpen ? 'open' : ''}`} onClick={handleDropdownClick}>
        <div className={`triangle ${isTriangleInverted ? 'inverted' : ''}`} />
        <p>Categories</p>
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>- Clinical Psychologists</li>
          <li>- Psychiatrists</li>
          <li>- Counseling Psychologists</li>
          <li>- Marriage and Family Therapists</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownList;
