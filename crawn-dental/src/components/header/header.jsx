import React from "react";
import '../header/header.css';

const Header = () => {
  return (
    <header className="header-container">
       <div className="header-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="header-section-phone">
        <p className="header-label-phone">Call us now</p>
        <p className="header-info-phone">+ 389 70 555 666</p>
      </div>
      <div className="header-section">
        <p className="header-label">Address</p>
        <p className="header-info">
          Bulevar Gevgelija<br />
          Gevgelija, Republic of<br />
          North Macedonia
        </p>
      </div>
      <div className="header-section">
        <p className="header-label">Working hours:</p>
        <p className="header-info">
          Mon-Fri: 09:00 - 20:00<br />
          Saturday: 09:00 - 14:00<br />
          Sunday: Closed
        </p>
      </div>
    </header>
  );
};

export default Header;