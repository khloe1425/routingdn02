import { combineReducers, createStore } from 'redux';
import { FaceAppReducer } from './reducers/FaceAppReducer';


const rootReducer = combineReducers({
    //các reducer
    // FaceAppReducer:FaceAppReducer
    FaceAppReducer
})

export const store = createStore(rootReducer);