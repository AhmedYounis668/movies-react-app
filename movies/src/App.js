import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Navbaar from "./components/Navbaar";
import axios from 'axios';
import Movieslist from "./components/Movieslist";
import {BrowserRouter,Routes,Route  } from "react-router-dom";
import Moviedetails from "./components/Moviedetails";
import{getallmovies}from './redux/action/Moviesaction'
import { useDispatch ,useSelector} from "react-redux";
function App() {

  return (

    <div className="body">
    
      <Navbaar />
      
          <Container className="px-2">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={      <Movieslist /> }/>
            <Route path="/movie/:id" element={<Moviedetails/>}/>
            </Routes>
          </BrowserRouter>
      </Container>
          
     
    </div>
  );
}

export default App;
