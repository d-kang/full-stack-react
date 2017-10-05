import React, { Component } from 'react';
class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: '',
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault();
    console.log('You have selected:', this.state.selectedOption);
  }

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });

  }



  render() {
    console.log('You have selected:', this.state.selectedOption);
    const singleQuestion = this.props.singleQuestion;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          {singleQuestion.q}
          <div className="radio">
            <label>
              <input
                type="radio"
                value="a"
                checked={this.state.selectedOption === 'a'} onChange={this.handleOptionChange}/>
              {singleQuestion.a}
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="option2"
                checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange}/>
              {singleQuestion.b}
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="option3"
                checked={this.state.selectedOption === 'option3'} onChange={this.handleOptionChange}/>
              {singleQuestion.c}
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="option4"
                checked={this.state.selectedOption === 'option4'} onChange={this.handleOptionChange}/>
              {singleQuestion.d}
            </label>
          </div>
          <button className="btn btn-default" type="submit">Save</button>
        </form>
      </div>
    );
  }
}
// export default Quiz;
