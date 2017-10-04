import React, { PureComponent } from 'react';

class Game extends PureComponent {
  target = 10 + Math.floor(50 * Math.random());
  playNumbers = [1, 4, 5, 2, 6, 10];
  render() {
    return (
      <div>
        <div style={styles.target}>{this.target}</div>
        <div>
          {this.playNumbers.map((num, i) =>
            <div
              key={i}
              style={styles.playNumber} className="play-number">
              {num}
            </div>
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
  playNumber: {
    border: 'thin solid #c8f7c8',
    width: '40%',
    display: 'inline-block',
    margin: '2.5%',
    backgroundColor: '#b8ceb8',
    textAlign: 'center',
    padding: '0.25rem',
  }
};

export default Game;
