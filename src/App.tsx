import Header from "./components/HeaderComponents/Header";
import LandingMain from "./components/LandingComponents/LandingMain";
import BlackHoleComp from "./components/AlwaysHatedLamePorfolios/BlackHoleLetterAnimation";
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
      <BlackHoleComp/>
      <div style={{height:'400px'}}>
        <h1 style={{color:'white'}}>

        Hello
        </h1>
      </div>
    </div>
  );
}

export default App;
