import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers'
import saga from '../../saga'

const sagaMiddleware = createSagaMiddleware()
export default store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(saga)