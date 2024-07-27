import "@babel/polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'

import Counter from './Counter'
import reducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import {watchIncrementAsync, test1, watchTakinLatest, rootSaga} from './saga'
import {composeWithDevTools} from 'redux-devtools-extension'

const sagaMiddleware =createSagaMiddleware()

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

const action = type => store.dispatch({type})

// sagaMiddleware.run(helloSaga)
// sagaMiddleware.run(mySaga)
//sagaMiddleware.run(watchIncrementAsync)  // activates this watcher saga
//sagaMiddleware.run(test1)
//sagaMiddleware.run(watchTakinLatest)
sagaMiddleware.run(rootSaga)


function render() {

  const storeData = store.getState()
  ReactDOM.render(
    <Counter
      value={storeData.count}
      loadData={storeData.loadData}
      // value={store.getState()}

      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')} 
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
      takinLatest={() => action('TAKING_LATEST')}
      getPostData = {() => action('GETPOSTDATA')}
      />,
      
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
