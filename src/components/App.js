import React, { useState, useEffect } from 'react';

class App extends React.Component {
  state = {
    timestamp: new Date().toLocaleString(),
    isDarkMode: false,
    conversations: []
  };

  toggleDarkMode = () => {
    this.setState(prevState => ({ isDarkMode: !prevState.isDarkMode }));
  };

  componentDidMount() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
      this.setState({ isDarkMode: true });
    }

    // Fetch conversations from API or
    // None
  }

  deleteMessage = (index) => {
    const updatedConversations = [...this.state.conversations];
    updatedConversations.splice(index, 1);
    this.setState({ conversations: updatedConversations });
  };

  render() {
    return (
      <div className={this.state.isDarkMode ? 'dark-mode' : 'light-mode'}>
        <button onClick={this.toggleDarkMode}>
          {this.state.isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
        <ul>
          {this.state.conversations.map((conversation, index) => (
            <li key={index}>
              {conversation.message}
              <button onClick={() => this.deleteMessage(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;