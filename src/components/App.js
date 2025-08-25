import React from 'react';

class App extends React.Component {
  state = {
    timestamp: new Date().toLocaleString()
  };

  render() {
    return (
      <div>
        Working...
        <p>Timestamp: {this.state.timestamp}</p>
      </div>
    );
  }
}

export default App;