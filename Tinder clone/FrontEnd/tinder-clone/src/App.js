import "./App.css";
import Header from "./components/Header/Header";
import TinderCards from "./components/TinderCards/TinderCards.js";
import SwipeButtons from "./components/SwipeButtons/SwipeButtons.js";

function App() {
  return (
    //BEM class naming convention
    <div className="App">
      <Header />

      <TinderCards />
      <SwipeButtons />
    
    
    </div>
  );
}

export default App;
