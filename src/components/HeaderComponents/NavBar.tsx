import "./NavBar.css";

export interface Props {
  itemStyle: string;
  navStyle: string
}

const navBarList: Array<string> = [
  "Linked In",
  "Github",
  "Projects",
  "Resume",
];

const NavBar = (props: Props) => {
  return (
    <div className={props.navStyle}>
    {navBarList.map((page,index) => <h1 key={`${index}_nav`} className={props.itemStyle}> {page} </h1>)}
    </div>
    )
};

export default NavBar;
