import './App.css';
import GKInterface from './Components';
import { GlobalStyle } from './GlobalElements'
import GlobalState from './Context/GKContextApi'

function App() {
  return (
    <div className="App">
      <GlobalState>
        <GKInterface />
        <GlobalStyle />
      </GlobalState>
    </div>
  );
}

export default App;
