import { createStore } from 'redux';
import mainReducer from './reducers';

export default () => {
  const store = createStore(mainReducer, {
    global: {
      gameId: Math.random(),
    },
    game: {
      selectedIds: [],
    },
  });
  return store;
};
