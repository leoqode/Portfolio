import React from 'react';
import "./NavBar.css";

export interface Props {
  itemStyle: string;
  navStyle: string;
}

const navBarList: Array<string> = [
  "LinkedIn",
  "GitHub",
  "Projects",
  "Resume",
];

const NavBar: React.FC<Props> = ({ itemStyle, navStyle }) => {
  return (
    <nav className={navStyle}>
      {navBarList.map((page, index) => (
        <a key={`${index}_nav`} className={itemStyle} href={`#${page.toLowerCase()}`}>
          {page}
        </a>
      ))}
    </nav>
  );
};

export default NavBar;
