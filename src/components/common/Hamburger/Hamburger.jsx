import React, { useState } from 'react';
import './Hamburger.scss';

export function Hamburger({ toggleVisibility }) {
  const [isOpen, setIsOpen] = useState(false);
  const modificator = isOpen ? 'hamburger__line_open' : '';

  const handleClick = () => {
    toggleVisibility();
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger" onClick={handleClick}>
      <span className={`hamburger__line ${modificator}`}></span>
    </div>
  );
}
