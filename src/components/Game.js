import React, { PureComponent } from 'react';
import PlayNumber from './PlayNumber';
class Game extends PureComponent {
  state = {
    selectedIds: [],
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
  render() {
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
              isDisabled={this.state.selectedIds.indexOf(i) >= 0}
            />
          )}
        </div>
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
