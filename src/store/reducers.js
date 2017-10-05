export default (state, action) => {
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
