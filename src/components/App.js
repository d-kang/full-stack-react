import React from 'react';
import Game from './Game';
import { connect } from 'react-redux';

class App extends React.PureComponent {
  // state = {
  //   gameId: 1
  // };

  // resetGame = () => {
  //   this.setState((prevState) => {
  //     return { gameId: prevState.gameId + 1 };
  //   });
  // };

  render() {
    return (
      <Game reset={this.resetGame} key={this.props.gameId} />
    );
  }
}


const mapStateToProps = (state) => ({
  gameId: state.gameId,
});

export default connect(mapStateToProps)(App);
