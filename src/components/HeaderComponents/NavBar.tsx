import React, { useState, useEffect } from "react";
import {
  BookOpenCheck,
  Linkedin,
  Github,
  FileText,
  Home,
  Code,
  User,
} from "lucide-react";
import "./NavBar.css";

export interface Props {
  itemStyle: string;
  navStyle: string;
  items: NavItem[];
}

interface NavItem {
  label: string;
  onClick?: () => void;
  href?: string;
  external?: boolean;
}

const NavBar: React.FC<Props> = ({ itemStyle, navStyle, items }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const getIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case "about":
        return <User size={18} />;
      case "tech stack":
        return <Code size={18} />;
      case "research":
        return <BookOpenCheck size={18} />;
      case "projects":
        return <Home size={18} />;
      case "linkedin":
        return <Linkedin size={18} />;
      case "github":
        return <Github size={18} />;
      case "resume":
        return <FileText size={18} />;
      default:
        return null;
    }
  };

  const handleItemClick = (item: NavItem) => {
    setActiveItem(item.label);
    if (item.onClick) {
      item.onClick();
    } else if (item.href) {
      if (item.external) {
        window.open(item.href, "_blank");
      } else {
        window.location.href = item.href;
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop - windowHeight / 2 &&
          scrollPosition < sectionTop + sectionHeight - windowHeight / 2
        ) {
          setActiveItem(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar-container ${navStyle}`}>
      <div className='navbar-background'></div>
      {items.map((item, index) => (
        <a
          key={`${index}_nav`}
          className={`${itemStyle} navbar-item ${
            activeItem === item.label ? "active" : ""
          }`}
          onClick={() => handleItemClick(item)}
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
        >
          <span className='navbar-icon'>{getIcon(item.label)}</span>
          <span className='navbar-text'>{item.label}</span>
          <div className='navbar-item-background'></div>
        </a>
      ))}
    </nav>
  );
};

export default NavBar;
