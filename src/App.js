import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from '@mui/icons-material';
import Typography from '@mui/material/Typography';

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

// itemDataのimport文を追加
import { itemData } from './ImageData.js';

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



    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Listitems</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    <ImageList sx={{ width: 800, height: 450 }}>
      <ImageListItem key="Subheader" cols={3}>
        <ListSubheader component="div">Listitems</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>


   


       

      </header>
        
    </div>
  );
}

export default App;
