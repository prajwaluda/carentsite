import React,{useEffect,useState} from 'react';
import data from './components/cardata';
import Navigator from './components/nav';
import Cards from './components/infocards';
import { BrowserRouter } from 'react-router-dom';
import Pagination from './components/paginat';
import './App.css';

function App() {
  const coinsData=data;
  const [currentpage,setcurrpage]=useState(1);
  const [postsperpage,setperpage]=useState(6);

  const handleIncrement = (pag) => {
    setcurrpage(pag);
  };

  const lastpgindex= currentpage*postsperpage;
  const firstpgindex= lastpgindex-postsperpage;
  const currentpost=coinsData.slice(firstpgindex,lastpgindex)

  return (
    <div style={{backgroundColor:'rgb(218, 228, 236)'}}>
        <BrowserRouter>
            <Navigator />
            <Cards dat={currentpost}/>
            <Pagination totposts={coinsData.length} postperpg={postsperpage} setpage={handleIncrement}/>
        </BrowserRouter>  
      </div>
  );
}

export default App;
