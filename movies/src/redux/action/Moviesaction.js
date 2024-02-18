import {Allmovies} from '../type/Alltype'
import {moviesapi} from '../type/Alltype'
import axios from 'axios'
export const getallmovies=()=>
{
    
    return async(dispatch)=>
    {
        const res=await axios.get(moviesapi)
dispatch(   { type:Allmovies ,data:res.data.results,pages:res.data.total_pages}  )
    }

}

export const getmoviessearch=(word)=>{
return async(dispatch)=>{
    const res=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=872b6f6702d22707bd5586523dc92a11&query=${word}&language=ar&page=1&include_adult=false`)
dispatch( { type:Allmovies ,data:res.data.results,pages:res.data.total_pages})
}
}
export const getpage=(page)=>{
    return async(dispatch)=>{
        const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=872b6f6702d22707bd5586523dc92a11&language=ar-US&page=${page}`)
   dispatch({type:Allmovies,data:res.data.results,pages:res.data.totalpages})
    }
}