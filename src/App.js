import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from '@mui/icons-material';
import Typography from '@mui/material/Typography';


 

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
<Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="/">
    MUI
  </Link>
  <Link
    underline="hover"
    color="inherit"
    href="/material-ui/getting-started/installation/"
  >
    Core
  </Link>
  <Typography color="text.primary">Breadcrumbs</Typography>
</Breadcrumbs>

       

      </header>
        
    </div>
  );
}

export default App;
