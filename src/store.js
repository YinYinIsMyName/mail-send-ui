import { createStore, applyMiddleware  } from 'redux'
import IndexReducer from './components/redux/reduer/indexReducer'
import thunk from 'redux-thunk';

export default createStore(IndexReducer, applyMiddleware(thunk))