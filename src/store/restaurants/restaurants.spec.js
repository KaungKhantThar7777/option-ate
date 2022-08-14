import thunk from 'redux-thunk';
import {loadRestaurants} from './actions';
import restaurantsReducer from './reducers';
const {createStore, applyMiddleware} = require('redux');

describe('restaurants', () => {
  describe('loadRestaurants', () => {
    it('store the restaurants', async () => {
      const records = [
        {id: 1, name: 'Sushi Place'},
        {id: 2, name: 'Pizza Place'},
      ];

      const api = {
        loadRestaurants: () => Promise.resolve(records),
      };

      const initialState = {
        records: [],
      };

      const store = createStore(
        restaurantsReducer,
        initialState,
        applyMiddleware(thunk.withExtraArgument(api)),
      );

      await store.dispatch(loadRestaurants());

      expect(store.getState().records).toEqual(records);
    });
  });
});
