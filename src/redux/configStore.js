import { applyMiddleware, combineReducers, createStore } from 'redux';
import { FaceAppReducer } from './reducers/FaceAppReducer';
import { PhimReducer } from './reducers/PhimReducer';
import { ModalReducer } from './reducers/ModalReducer';

import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    //các reducer
    // FaceAppReducer:FaceAppReducer
    FaceAppReducer,
    PhimReducer,
    ModalReducer,
})

export const store = createStore(rootReducer,applyMiddleware(thunk));