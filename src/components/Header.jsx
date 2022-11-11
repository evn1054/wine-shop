import React from "react";

const Header = (props) => (
  <header className="top">
    <div className="wrap">
      <div className="header-content">
        <h1>Wine</h1>
        <p className="header-tagline">Tasting & Pairing</p>
        <div className="header-divider"></div>
        <div className="header-rating">
          <div className="header-rating_tag">Рейтинг:</div>
          <div className="header-rating_icon">+++</div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
