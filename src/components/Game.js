import React, { PureComponent } from 'react';

class Game extends PureComponent {
  constructor() {
    super();
    this.target = 10 + Math.floor(50 * Math.random());
  }
  render() {
    return (
      <div>
        <div style={styles.target}>{this.target}</div>
        <div>
          <div style={styles.playNumber} className="play-number">6</div>
          <div style={styles.playNumber} className="play-number">8</div>
          <div style={styles.playNumber} className="play-number">40</div>
          <div style={styles.playNumber} className="play-number">33</div>
          <div style={styles.playNumber} className="play-number">66</div>
          <div style={styles.playNumber} className="play-number">3</div>
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
