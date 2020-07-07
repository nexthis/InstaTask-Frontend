import React from 'react';
import Router from './routes/Router'
import ThemeProvider from 'style/ThemeProvider'

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import ReduxToastr from 'react-redux-toastr'
//React.lazy(() => import('react-redux-toastr/lib/css/react-redux-toastr.min.css'))

import { Provider } from 'react-redux'
import createStore from 'store'
const { store } = createStore()



function App() {
  return (
    <div id="App" className="App">
      <Provider store={store}>
        <ThemeProvider>
          <Router />
          <ReduxToastr/>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
