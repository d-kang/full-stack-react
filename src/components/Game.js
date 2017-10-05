import React, { PureComponent } from 'react';
import PlayNumber from './PlayNumber';
class Game extends PureComponent {
  // after 10 seconds, game over
  state = {
    selectedIds: [],
    remainingSeconds: 10,
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.remainingSeconds === 0) {
          clearInterval(intervalId);
          return null;
        }
        return { remainingSeconds: prevState.remainingSeconds - 1 };
      });
    }, 1000);
  }

  // gameStatus = 'PLAYING'

  // gameState: PLAYING, WON, LOST

  gameStatus = () => {
    const selectedSum = this.state.selectedIds.reduce(
      (acc, curr) => acc + this.playNumbers[curr],
      0
    );
    if (this.state.remainingSeconds === 0) {
      return 'LOST';
    } else if (selectedSum < this.target) {
      return 'PLAYING';
    } else if (selectedSum === this.target) {
      return 'WON';
    } else if (selectedSum === this.target) {
      return 'LOST';
    }

  }


  selectId = (id) => {
    this.setState((prevState) => {
      return { selectedIds: [...prevState.selectedIds, id] };
    });
  }

  // target = 10 + Math.floor(50 * Math.random());
  // playNumbers = [1, 4, 5, 2, 6, 10];
  playNumbers = Array.from({ length: 6 }).map(() =>
    2 + Math.floor(12 * Math.random())
  );
  target = this.playNumbers.slice(0, 3).reduce((acc, curr) => acc + curr, 0);

  // TODO: SHUFFLE playNumbers

  componentWillUpdate(nextProps, nextState) {
    if (this.gameStatus() !== 'PLAYING') {
      clearInterval(this.intervalId);
    }
  }
  render() {
    const gameStatus = this.gameStatus();
    return (
      <div>
        <div style={styles.target}>{this.target}</div>
        <div>
          {this.playNumbers.map((num, i) =>
            <PlayNumber
              key={i}
              id={i}
              number={num}
              onClick={this.selectId}
              isDisabled={
                gameStatus !== 'PLAYING' || this.state.selectedIds.indexOf(i) >= 0}
            />
          )}
        </div>
        {this.state.remainingSeconds} <br/>
        {gameStatus}
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

export default Game;
