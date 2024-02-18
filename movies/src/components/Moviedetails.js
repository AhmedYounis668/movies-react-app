import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link,useParams } from 'react-router-dom'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {  getallmovies} from "../redux/action/Moviesaction";
const Moviedetails = () => {
  const params=useParams();
  const [movie,setmovie]=useState([]);
  const dispatch=useDispatch();
const all=()=>
{
  dispatch(getallmovies());
}
  const  getmoviedata=async()=>
  {
const res=await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=872b6f6702d22707bd5586523dc92a11&language=ar-US`)
setmovie(res.data)
  }

   useEffect(()=>{
    getmoviedata();
  },[])
  return (
    <div class="form-style-4" >
     <Row  >
      <Col lg='3' >
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/`+movie.poster_path} style={{ width: '100%', height:'100%' }} alt='hh' />

      </Col>
    </Row>
    <div className='justify-content-center d-flex'>
  <Col  lg='9' className='justify-content-center  '>

  

<label for="field1">
<span>اسم الفيلم :{movie.title}</span>
</label>
<label for="field2">
<span>التاريخ :{movie.release_date}</span>
</label>
<label for="field3">
<span>التقيم :{movie.vote_average}</span>
</label>
<label for="field4">
<span>عدد المقيمين :{movie.vote_count}</span>
</label>
<label for="field4">
قصه الفيلم:{movie.overview}
</label>

</Col>
</div>
<Row className='justify-content-center  '>
  <Col  className='d-flex justify-content-center mt-2 '>
  <Link to={"/"}>
<button onClick={()=>all()} className='btn btn-danger'>عوده للرئيسيه</button>
</Link>
<a href={movie.homepage}>
<button className='btn btn-success'>مشاهده الفيلم</button>

</a>

  </Col>
</Row>
</div>

  )
}

export default Moviedetails
