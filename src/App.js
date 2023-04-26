import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './containers/DashBoard/Dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <h1> Welcome To Real-State </h1>
        <Dashboard />
      </BrowserRouter>

    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
