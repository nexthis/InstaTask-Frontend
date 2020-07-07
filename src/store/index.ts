import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'sagas'
import {reducer  as PostReducer} from './posts/reducers'
import {reducer as toastrReducer} from 'react-redux-toastr'
import { reducer as AuthReducer } from './Auth/reducers'
// import { reducer as BluetoothReducer } from './Bluetooth/Reducers'

const rootReducer = combineReducers({
  /**
   * Register your reducers here.
   * @see https://redux.js.org/api-reference/combinereducers
   */
   posts: PostReducer,
   toastr: toastrReducer,
   auth: AuthReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default () => {
  return configureStore(rootReducer, rootSaga)
}

