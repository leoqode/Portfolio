import Header from "./components/HeaderComponents/Header";
import LandingMain from "./components/LandingComponents/LandingMain";
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
    </div>
  );
}

export default App;
