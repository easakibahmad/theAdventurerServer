import './App.css';
import Sakib from './components/Sakib/Sakib';
import addNum from './components/Sani.js/Sani';

function App() {
  const sum = addNum(23,25)
  return (
    <div className="App">
      <Sakib></Sakib>
      <h2>Sum: {sum}</h2>
    </div>
  );
}

export default App;
