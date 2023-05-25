import logo from './logo.svg';
import './App.css';

function App() {
  const heros = ['salman','Anwar','Razzak','alomgir']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1> My headding {(5+5)*10}</h1>
        <p> My first react App</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       <Person hero={heros[0]} heroine="opu"></Person>
       <Person hero="omorsani" heroine="mousumi"></Person>
       <Person hero="bapparaz" heroine="cheka"></Person>
       <Person hero="sharuk" heroine="kazol"></Person>
      </header>
    </div>
  
  );
}
function Person(props){
  const personStyle={
        border:"10px solid red",
        margin :"2px"
  }
return (
<div style={personStyle}>
  <h1>Name:{props.hero}</h1>
  <h3> heroine of:{props.heroine}</h3>
</div>
)
}
export default App;
