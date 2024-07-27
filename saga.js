import { put, takeEvery,call, takeLatest, all, select } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

// ...

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield delay(5000)
  yield put({ type: 'INCREMENT' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}      //2nd parameter above passed is CALLBACK GENERATOR FUNCTION

const sumofno = () => {
  // const sum = 2+2
  // console.log({sum})
 
}

export function* test1() {
  yield call(sumofno)
}

export function* takinLat(){

  yield delay(2000)
  yield put({type: 'INCREMENT'})
  const p1 = yield select(state => state.name)
  const p2 = yield select(state => state.count)
  console.log(p1,p2);
  
}
export function* watchTakinLatest(){
  yield takeLatest('TAKING_LATEST', takinLat)
}

async function fetchUserData(){
  const data = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  const res = await data.json()
    return res;
    console.log("this is API response",res)
}

function* getPost(){
    try{
      yield put({type: 'FETCH_DATA_REQUEST'})
  console.log('t2')

      const response = yield call(fetchUserData)
  console.log('t3')

     yield put({type: 'DATA_REQUEST_SUCCESS', payload: response})
  console.log('t4')

    }
    catch(error) {
      yield put({type: 'DATA_REQUEST_ERROR', payload: error.message})
  console.log('t5')

    }
}

function* watchGetPostDataAync(){   
  yield takeLatest('GETPOSTDATA', getPost)
  console.log('t1')
}


export function* rootSaga(){
  yield all([
    watchTakinLatest(),
    watchIncrementAsync(),
    test1(),
    watchGetPostDataAync()

  ])
}





// export function * helloSaga() {
//     console.log('Hello Sagas!')
//   }

//   export function * mySaga() {
//     console.log("Yes this is also printing")
//   }