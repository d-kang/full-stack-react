import React, { PureComponent } from 'react';
import Game from './Game';
// import Quiz from './Quiz';

class App extends PureComponent {
  render() {
    return (
      <div>
        {/* {
          data.map((singleQuestion, i) =>
            <Quiz singleQuestion={singleQuestion} key={i} />
          )
        } */}

        <Game />
      </div>
    );
  }

}

export default App;
