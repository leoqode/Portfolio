import DateComponent from "./DateComponent";
import LocationComponent from "./LocationComponent";
import "./Header.css";

export interface Props {
  style: string;
}

const Header = (props: Props) => {
  return (
    <div className={props.style}>
      <DateComponent headerStyle='header-cmps' />
        <LocationComponent weatherID="header_name_weather" headerStyle='header-cmps' />
    </div>
  );
};

export default Header;
