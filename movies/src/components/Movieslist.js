import React from 'react'
import { Row } from 'react-bootstrap'
import CardMovie from './CardMovie'
import Paginationcomponent from './Paginationcomponent'
import { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {getallmovies} from '../redux/action/Moviesaction'

const Movieslist = () => {
  const[movies,setMovies]=useState([]);
  const dispatch=useDispatch();

  const data=useSelector(state=>state.movies)
  useEffect(()=>{
    dispatch(getallmovies());
  },[])

 useEffect(()=>{
    setMovies(data);
  },[data])
  return (
    <Row>
    {
     movies.length>=1?(movies.map((mov)=>{
        return(
          <CardMovie key={mov.id} mov={mov}/>
        )
       })):<h2 className='text-center'>لايوجد افلام الان</h2>
    }
    {
movies.length>=1?( <Paginationcomponent />):null
    }
    </Row>
           
  )
}

export default Movieslist
