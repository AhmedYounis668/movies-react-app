import {createStore} from 'redux'
import {reducermovies} from '../reducer/Reducermovies'
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
export const store=createStore(reducermovies,applyMiddleware(thunk));