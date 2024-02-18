import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap';
import {getallmovies,getmoviessearch}from '../redux/action/Moviesaction'
import  logo from "../images/logo512.png";
import { useDispatch } from 'react-redux';
const Navbaar = () => {
  const dispatch=useDispatch();
  const search=async(word)=>
  {
    if(word==="")
    {
    dispatch( getallmovies());

    }
    else
    {
      dispatch(getmoviessearch(word));
    

    }
  }
  const onsearch=(word)=>
  {
search(word);
  }
  return (
    
 
 <Navbar bg="" expand="lg" style={{background:'rgb(231, 41, 41)'}}>
    <Container >
    

    
      <Navbar.Brand href="/"><img className='logo' src={logo}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
           
       
   
    
          
        <Form className="d-flex w-100">
          <Form.Control
            type="text"
            placeholder="Search "
            className="me-2 se"
            aria-label="Search"
            onChange={(e)=>onsearch(e.target.value)}
          />
          
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  

  )
}

export default Navbaar
