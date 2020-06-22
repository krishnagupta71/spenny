import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {fetchData} from './src/utilities/networkUtils'
import { setData } from './src/actions'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
   try {
      const apiData = yield call(fetchUser);
      yield put(setData(apiData));
   } catch (e) {
      console.log("ERROR OCCURED")
   }
}

function* mySaga() {
  yield takeLatest("FETCH_DATA", fetchUser);
}

export default mySaga;