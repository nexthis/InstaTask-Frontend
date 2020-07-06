import React from 'react';
import Router from './routes/Router'
import ThemeProvider from 'style/ThemeProvider'

import { Provider } from 'react-redux'
import createStore from 'store'
const { store } = createStore()

function App() {
  return (
    <div id="App" className="App">
      <Provider store={store}>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
