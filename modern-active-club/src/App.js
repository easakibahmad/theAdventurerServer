import './App.css';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import Information from './components/Information/Information';

function App() {
  return (
    <div className="main-part">

      <div>
        <div>
          <Header></Header>
        </div>
        <div>
          <Cards></Cards>
        </div>
      </div>

      <div>
          <Information></Information>
      </div>

    </div>
  );
}

export default App;
