import { combineReducers } from 'redux';

const global = (state = {}, action) => {
  switch (action.type) {
    case 'RESET_GAME':
      return {
        ...state,
        gameId: state.gameId + 1,
      };
    default:
      return state;
  }
};

const game = (state = {}, action) => {
  console.log('state', state)
  console.log('action', action);

  switch (action.type) {
    case 'SELECT_ID':
      return {
        ...state,
        selectedIds: [...state.selectedIds, action.id]
      };
    default:
      return state;
  }
};

export default combineReducers({ global, game });
