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
        <p>Browse By</p>
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          <ul className='subcategory-header'>
            Categories
            <ul className="subcategory-menu">
              <li>Psychiatrists</li>
              <li>Counseling Psychologists</li>
              <li>Marriage and Family Therapists</li>
            </ul>
          </ul>
          <ul className='subcategory-header'>
            Location
            <ul className="subcategory-menu">
              <li>USA</li>
              <li>EUROPE</li>
              <li>ASIA</li>
            </ul>
          </ul>
          <ul className='subcategory-header'>
            Price
            <ul className="subcategory-menu">
              <li>Low to High</li>
              <li>High to Low</li>
            </ul>
          </ul>
        </ul>
      )}
    </div>
  );
};

export default DropdownList;
