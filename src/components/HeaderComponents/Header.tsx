import DateComponent from "./DateComponent";
import LocationComponent from "./LocationComponent";
import NavBar from "./NavBar";
import "./Header.css";

export interface Props {
  style: string;
}
const Header = (props: Props) => {
  return (
    <div className={props.style}>
      <DateComponent id='header_date_cmp' headerStyle='header-cmps' />
      <LocationComponent
        weatherID='header_name_weather'
        headerStyle='header-cmps'
      />
      <NavBar navStyle="header-nav-bar" itemStyle="header-nav-items" />
    </div>
  );
};

export default Header;
