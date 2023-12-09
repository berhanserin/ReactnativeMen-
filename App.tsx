import React from 'react';
import RootApp from './src/rootApp';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
};

export default App;
