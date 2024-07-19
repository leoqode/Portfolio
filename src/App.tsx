import Header from "./components/HeaderComponents/Header";
import LandingMain from "./components/LandingComponents/LandingMain";
import BlackHoleComp from "./components/AlwaysHatedLamePorfolios/BlackHoleLetterAnimation";
import AboutmeComponent from "./components/AlwaysHatedLamePorfolios/AboutmeComponent";
import "./App.css";

function App() {
  return (
    <div className='app'>
      <div className='background'>
        <BlackHoleComp />
      </div>
      <div className='content'>
        <Header style='header' />
        <LandingMain />
        <AboutmeComponent />
      </div>
    </div>
  );
}

export default App;
