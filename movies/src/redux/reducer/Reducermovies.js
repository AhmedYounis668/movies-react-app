import {Allmovies} from '../type/Alltype'
const intialvalue=({movies:[],pagecount:0})
export const reducermovies=(state=intialvalue,action)=>{

switch(action.type){
    case Allmovies:
        return{movies:action.data,totalpage:action.pages}
default:
    return state;
}
}