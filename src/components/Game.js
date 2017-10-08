import React from 'react';
import shuffle from 'lodash.shuffle';
import { connect } from 'react-redux';

import PlayNumber from './PlayNumber';
import { selectId } from '../store/actions';

class Game extends React.PureComponent {
  state = {
    remainingSeconds: 20,
  }
  gameStatus = 'PLAYING';

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.remainingSeconds === 0) {
          clearInterval(this.intervalId);
          return null;
        }
        return { remainingSeconds: prevState.remainingSeconds - 1 };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  calcGameStatus = (nextProps, nextState) => {
    const selectedSum = nextProps.selectedIds.reduce(
      (acc, curr) => acc + this.playNumbers[curr],
      0
    );
    if (nextState.remainingSeconds === 0 || selectedSum > this.target) {
      return 'LOST';
    }
    if (selectedSum < this.target) {
      return 'PLAYING';
    }
    if (selectedSum === this.target) {
      return 'WON';
    }
  };

  playNumbers = Array.from({ length: 6 }).map(
    () => 2 + Math.floor(12 * Math.random())
  );

  target = this.playNumbers.slice(0, 4).reduce((acc, curr) => acc + curr, 0);

  playNumbers = shuffle(this.playNumbers);

  componentWillUpdate(nextProps, nextState) {
    if (
      nextProps.selectedIds !== this.props.selectedIds ||
      nextState.remainingSeconds === 0
    ) {
      this.gameStatus = this.calcGameStatus(nextProps, nextState);
    }

    if (this.gameStatus !== 'PLAYING') {
      clearInterval(this.intervalId);
    }
  }

  render() {
    const gameStatus = this.gameStatus;
    return (
      <div>
        <div style={styles.target}>{this.target}</div>
        <div>
          <div>
            {this.playNumbers.map((playNumber, index) => (
              <PlayNumber
                key={index}
                number={playNumber}
                id={index}
                onClick={this.props.selectId}
                isDisabled={
                  gameStatus !== 'PLAYING' ||
                  this.props.selectedIds.indexOf(index) >= 0
                }
              />
            ))}
          </div>
        </div>
        {this.state.remainingSeconds}
        <br />
        {gameStatus}
        <br />
        {this.gameStatus !== 'PLAYING' && (
          <button onClick={this.props.reset}>Play Again</button>
        )}
      </div>
    );
  }
}

const styles = {
  target: {
    backgroundColor: '#888',
    margin: '10%',
    padding: '0.5rem',
    textAlign: 'center',
  },
};


const mapStateToProps = (state) => ({
  ...state.game
});

export default connect(mapStateToProps, { selectId })(Game);
