import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'sagas'
import {PostReducer } from './posts/reducers'
// import { reducer as ScriptReducer } from './Script/Reducers'
// import { reducer as BluetoothReducer } from './Bluetooth/Reducers'

const rootReducer = combineReducers({
  /**
   * Register your reducers here.
   * @see https://redux.js.org/api-reference/combinereducers
   */
   posts: PostReducer,
//   script: ScriptReducer,
//   bluetooth: BluetoothReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default () => {
  return configureStore(rootReducer, rootSaga)
}
