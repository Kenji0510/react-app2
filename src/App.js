import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Hello !!</h1>
        <img src='https://some-anyone-data.s3.ap-northeast-3.amazonaws.com/public_image/fig03.jpeg' alt='image' />
      </header>
    </div>
  );
}

export default App;
