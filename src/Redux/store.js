import {createStore} from 'redux'
import reducer from './reducer'

var store = {
  temp: 'temp'
}

export default createStore(reducer, store, window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
