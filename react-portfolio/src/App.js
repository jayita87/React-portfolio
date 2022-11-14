import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';

function App() {




  return (
    <div className="App">
      <header className="App-header">
        <nav> 
          <ul>
            <li>Home</li>
            <li>Dashboard</li>
          </ul>
        </nav>
      </header>
      <Dashboard />
    </div>
  );
}

export default App;
