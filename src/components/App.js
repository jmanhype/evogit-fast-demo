import React, { useState, useEffect } from 'react';

class App extends React.Component {
  state = {
    timestamp: new Date().toLocaleString(),
    isDarkMode: false
  };

  toggleDarkMode = () => {
    this.setState(prevState => ({ isDarkMode: !prevState.isDarkMode }));
  };

  componentDidMount() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
      this.setState({ isDarkMode: true });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isDarkMode !== this.state.isDarkMode) {
      localStorage.setItem('darkMode', this.state.isDarkMode);
    }
  }

  render() {
    const { timestamp, isDarkMode } = this.state;
    const modeClass = isDarkMode ? 'dark-mode' : 'light-mode';

    return (
      <div className={modeClass}>
        <button onClick={this.toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <p>Timestamp: {timestamp}</p>
      </div>
    );
  }
}

export default App;