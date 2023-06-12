import Header from "./components/HeaderComponents/Header";
import LandingMain from "./components/LandingComponents/LandingMain";
import HandleScrollBouy from "./components/AlwaysHatedLamePorfolios/HandleScrollBouy";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div>
        <Header style="header" />
      </div>

      {/* here goes button component*/}
      <div className="intro">
        <LandingMain></LandingMain>
        <HandleScrollBouy /> 
      </div>
    </div>
  );
}

export default App;
