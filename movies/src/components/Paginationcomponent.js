import React, { useEffect,useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getpage } from '../redux/action/Moviesaction';
const Paginationcomponent = () => {


  const[totalpagee,settotalpagee]=useState(0);
  const dispatch=useDispatch();


 const page=useSelector((state)=>state.totalpage);
 useEffect(()=>{
  settotalpagee(page);
 },[])
   

  

    const handlePageClick=(data)=>
    {
    dispatch(getpage(data.selected+1));
    }
  return (
    <ReactPaginate
    breakLabel="..."
    nextLabel="التالي >"
    onPageChange={handlePageClick}
    marginPagesDisplayed={2}
    pageRangeDisplayed={2}
    pageCount={totalpagee}
    previousLabel="< السابق"
brea
containerClassName={'pagination justify-content-center p-3'}
pageClassName={'page-item'}
pageLinkClassName={'page-link'}
breakClassName={'page-link'}
previousClassName={'page-item'}
nextClassName={'page-item'}
previousLinkClassName={'page-link'}
nextLinkClassName={'page-link'}
activeClassName={'active'}

  />
  )
}

export default Paginationcomponent
