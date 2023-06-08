import "./NavBar.css";

export interface Props {
  itemStyle: string;
  navStyle: string
}

const navBarList: Array<string> = [
  "About me",
  "Resume",
  "Projects",
  "Current task",
];

const NavBar = (props: Props) => {
  return (
    <div className={props.navStyle}>
    {navBarList.map((page,index) => <li key={`${index}_nav`} className={props.itemStyle}> {page} </li>)}
    </div>
    )
};

export default NavBar;
