import { takeLatest, all } from 'redux-saga/effects'

import { StartupTypes } from 'store/startup/actions'
import { PostTypes } from 'store/posts/actions'
import { AuthTypes } from 'store/Auth/actions'

import { startup } from './StartupSaga'
import { feachPost, addPost } from './PostsSaga'
import { login } from './AuthSaga'
// import { ExampleTypes } from 'App/Stores/Example/Actions'

// import {BluetoothTypes} from 'App/Stores/Bluetooth/Actions'
// import { fetchUser } from './ExampleSaga'
// import { startup } from './StartupSaga'
// import { connect } from './BluetoothSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(PostTypes.FETCH_POSTS, feachPost),
    takeLatest(PostTypes.ADD_POST_SEND, addPost),
    takeLatest(AuthTypes.AUTH_LOGIN, login),
    // // Call `fetchUser()` when a `FETCH_USER` action is triggered
    // takeLatest(ExampleTypes.FETCH_USER, fetchUser),
    
    // takeLatest(BluetoothTypes.CONNECT, connect),
  ])
}
