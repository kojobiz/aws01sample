import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';



 

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
        <h1 style={{ width: "100%", height: "500px", color: "pink", textAlign: "center" }}>これはテストです</h1>
        <ul style={{ width: "100%", height: "500px", color: "pink", textAlign: "center" }}>
          <li style={{ width: "100%", color: "#fff" }}>test01</li>
          これはテストです</ul>
        {/* <ul className="ulstyle" style={{ width: "100%", height: "500px", color: "pink", textAlign: "center" }}>
          <li style={{ width: "100%", color: "#232323" }}>test01</li>
          これはテストです</ul> */}
        <Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<br></br>
<Chip icon={<FaceIcon />} label="With Icon" />
<Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />

       

      </header>
        
    </div>
  );
}

export default App;
