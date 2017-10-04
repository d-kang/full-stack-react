import React, { PureComponent } from 'react';

class Game extends PureComponent {

  render() {
    return (
      <div>
        <div style={styles.target}>42</div>
        <div>
          <div>6</div>
          <div>8</div>
          <div>40</div>
          <div>33</div>
          <div>66</div>
          <div>3</div>
        </div>
      </div>
    );
  }
}

const styles = {
  target: {
    backgroundColor: '#888',
  },
};

export default Game;
