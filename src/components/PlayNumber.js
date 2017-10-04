import React, { PureComponent } from 'react';

class PlayNumber extends PureComponent {
  handleClick = () => {
    console.log('PF', this.props.id, this.props.number)
  }
  render() {
    return (
      <div
        style={styles.playNumber} className="play-number"
        onClick={this.handleClick}
      >
        {this.props.number}
      </div>
    );
  }

}

const styles = {
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



export default PlayNumber;
