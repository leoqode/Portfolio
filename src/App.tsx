import Header from "./components/HeaderComponents/Header";
import LandingMain from "./components/LandingComponents/LandingMain";
import HandleScrollBouy from "./components/AlwaysHatedLamePorfolios/HandleScrollBouy";
import "./App.css";

function App() {
  return (
    <div className="app" style={HandleScrollBouy()}>
      <div>
        <Header style="header" />
      </div>

      {/* here goes button component*/}
      <div className="intro">
        <LandingMain></LandingMain>
        <p>Student at Texas State University, pursuing a
        double major in Computer Science and Mathematics. I am dedicated to honing my
        skills and knowledge in this field. Furthermore, I am actively engaged
        in graduate level coursework, with a particular focus on gaining
        valuable experience in the realm of quantitative tradingStudent at Texas State University, pursuing a
        double major in Computer Science and Mathematics. I am dedicated to honing my
        skills and knowledge in this field. Furthermore, I am actively engaged
        in graduate level coursework, with a particular focus on gaining
        valuable experience in the realm of quantitative tradingStudent at Texas State University, pursuing a
        double major in Computer Science and Mathematics. I am dedicated to honing my
        skills and knowledge in this field. Furthermore, I am actively engaged
        in graduate level coursework, with a particular focus on gaining
        valuable experience in the realm of quantitative tradingStudent at Texas State University, pursuing a
        double major in Computer Science and Mathematics. I am dedicated to honing my
        skills and knowledge in this field. Furthermore, I am actively engaged
        in graduate level coursework, with a particular focus on gaining
        valuable experience in the realm of quantitative trading</p>
      </div>
    </div>
  );
}

export default App;
