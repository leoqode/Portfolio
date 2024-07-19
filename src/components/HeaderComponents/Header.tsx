import React from 'react';
import DateComponent from "./DateComponent";
import LocationComponent from "./LocationComponent";
import NavBar from "./NavBar";
import "./Header.css";

export interface Props {
  style: string;
}

const Header: React.FC<Props> = ({ style }) => {
  return (
    <header className={style}>
      <div className="header-left">
        <DateComponent id='header_date_cmp' headerStyle='header-cmps' />
        <LocationComponent weatherID='header_weather' headerStyle='header-cmps' />
      </div>
      <NavBar navStyle="header-nav" itemStyle="header-nav-item" />
    </header>
  );
};

export default Header;
