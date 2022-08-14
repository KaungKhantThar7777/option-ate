import React from 'react';
import store from './store';
import Restaurants from './pages/Restaurants/Restaurants';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Restaurants />
    </Provider>
  );
};

export default App;
