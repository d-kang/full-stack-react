import React, { PureComponent } from 'react';

class PlayNumber extends PureComponent {

  handleClick = () => {
    if (this.props.isDisabled) {
      return;
    }
    this.props.onClick(this.props.id);
  }
  render() {
    return (
      <div
        style={styles(this.props.isDisabled)}
        className="play-number"
        onClick={this.handleClick}
      >
        {this.props.number}
      </div>
    );
  }

}

const styles = (isDisabled) => ({
  border: 'thin solid #c8f7c8',
  width: '40%',
  display: 'inline-block',
  margin: '2.5%',
  backgroundColor: '#b8ceb8',
  textAlign: 'center',
  padding: '0.25rem',
  opacity: isDisabled ? 0.3 : 1
});



export default PlayNumber;
