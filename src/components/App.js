import React from 'react';
import { connect } from 'react-redux';

import Game from './Game';
import { resetGame } from '../store/actions';

const App = (props) =>
  <Game reset={props.resetGame} key={props.gameId} />;

const mapStateToProps = (state) => ({
  gameId: state.gameId,
});

export default connect(mapStateToProps, { resetGame })(App);