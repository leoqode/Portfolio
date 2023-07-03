import Header from "./components/HeaderComponents/Header";
import LandingMain from "./components/LandingComponents/LandingMain";
import BlackHoleComp from "./components/AlwaysHatedLamePorfolios/BlackHoleLetterAnimation";
import AboutmeComponent from "./components/AlwaysHatedLamePorfolios/AboutmeComponent";
import TechStackComponent from "./components/AlwaysHatedLamePorfolios/TechStackComponent";
import "./App.css";

function App() {
  return (
    <div className='app'>
      <div>
        <Header style='header' />
      </div>
      <div className='intro'>
        <LandingMain></LandingMain>
      </div>
      <BlackHoleComp />
      <div className='mid-body-div'>
        <AboutmeComponent />
        <div className='tech-stack-visual-div'>
          <TechStackComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
