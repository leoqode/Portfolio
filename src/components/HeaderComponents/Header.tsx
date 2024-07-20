import React from 'react';
import DateComponent from "./DateComponent";
import LocationComponent from "./LocationComponent";
import NavBar from "./NavBar";
import "./Header.css";

export interface Props {
  style: string;
}

const Header: React.FC<Props> = ({ style }) => {
  const navItems = [
    { label: 'About', onClick: () => scrollToSection('about-me-section') },
    { label: 'Tech Stack', onClick: () => scrollToSection('tech-stack-section') },
    { label: 'Research', onClick: () => scrollToSection('research-section') },
    { label: 'Projects', onClick: () => scrollToSection('projects-section') },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/leonardojim', external: true },
    { label: 'GitHub', href: 'https://github.com/leoqode', external: true },
    { label: 'Resume', href: 'https://drive.google.com/file/d/1STxZnriVeWDljrH90uuJmDYFOt6HStko/view?usp=drive_link', external: true },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(`.${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center'  });
    }
  };

  return (
    <header className={`${style} cool-header`}>
      <div className="header-content">
        <div className="header-left">
          <LocationComponent weatherID='header_weather' />
        </div>
        <div className="header-center">
          <NavBar navStyle="header-nav" itemStyle="header-nav-item" items={navItems} />
        </div>
        <div className="header-right">
          <DateComponent id='header_date_cmp' headerStyle='header-cmps' />
        </div>
      </div>
    </header>
  );
};

export default Header;
