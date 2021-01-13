import TicTac from './Components/TictacBox';
import './Components/Tictac.css';

function App() {
  return (
    <div className="App">
      <h2>The Tic Tac Toe Game App</h2>
      <TicTac />
      <p className="rule">
        <strong>Rule: </strong> 
        When a player gets three of their symbols in a row, He/She will be winner.
      </p>
    </div>
  );
}

export default App;
