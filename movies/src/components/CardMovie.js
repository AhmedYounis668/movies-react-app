import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardMovie = ({mov}) => {
  return (
    <Card style={{ width: '18rem' ,marginLeft:'40px',marginTop:'15px' ,marginRight:'40px',background:'white'}} className='p' >
    <Link to={`/movie/${mov.id}`}>

    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/`+mov.poster_path} style={{ width: '100%', height:'200px' }} alt='hh' />
    <Card.Body>
      <Card.Title>Film Data</Card.Title>
      <Card.Text>
       <p>اسم الفيلم :{mov.original_title}</p>
       <p>تاريخ الاصدار :{mov.release_date}</p>
       <p>عدد المقيمين:{mov.vote_count}</p>
       <p>التقيم:{mov.vote_average}</p>

      </Card.Text>
    </Card.Body>
   
    </Link>

  </Card>

  )
}

export default CardMovie
