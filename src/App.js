// import logo from './logo.svg';
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
import CustomSeparator from './BreadList.js';
// 沿革情報
import History from './History.js';


// import CustomSeparator from './Bread.js';
// itemDataのimport
import { itemData } from './ItemData.js';
// videoのimport
import MediaCover from './MediaCover.js';
// imagesのimport
import ImageA from './ImageA.js';
// modalのimport
import BasicModal from './BasicModal.js';
// datafilterのimport
// import ClipboardCopy from './ClipboardCopy.js';
// productのimport
import Product01 from './productJS/Product01.js';
import Product02 from './productJS/Product02.js';


function App() {
  return (
    <div className="App">

      <MediaCover/>
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
      <CustomSeparator />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          リンク遷移
        </a>
        <div style={{ width: '100%', height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#232323' }}>
      <BasicModal />
    </div>
        <h1 style={{ width: "100%", height: "100px", color: "white", textAlign: "center", backgroundColor: "black", display: "flex", alignItems: "center", justifyContent: "center" }}>これはテストです</h1>
        <ul style={{ width: "100%", height: "300px", color: "pink", textAlign: "center", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <li style={{ width: "100%", color: "#232323" }}>List test01</li>
          <li style={{ width: "100%", color: "#232323" }}>List test02</li>
          <li style={{ width: "100%", color: "#232323" }}>List test03</li>
        </ul>
        <ImageA />
        {/* <ul className="ulstyle" style={{ width: "100%", height: "500px", color: "pink", textAlign: "center" }}>
          <li style={{ width: "100%", color: "#232323" }}>test01</li>
          これはテストです</ul> */}
        <Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<br></br>
<Chip icon={<FaceIcon />} label="With Icon" />
<Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
<br/>
<br/>




    <ImageList sx={{ width: '80%', height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div" >Listitems</ListSubheader>
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
    <br/>
    <br/>
    <ImageList sx={{ width: '80%', height: 450 }}>
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
   {/* 製品リストに使える */}
    {/* <ClipboardCopy /> */}
    <br></br>

    <Product01 />
    <br></br>
    <Product02 />
    <br></br>
    <History />

    {/* imagegallery */}
    
      </header>
        
    </div>
  );
}

export default App;
