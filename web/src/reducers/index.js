import { clickReducer } from './clickReducer'
import { clickReducerCorrect } from './clickReducerCorrect'
import { combineReducers } from 'redux'

export const Reducers = combineReducers({
    name: clickReducer,
    correct: clickReducerCorrect,
})