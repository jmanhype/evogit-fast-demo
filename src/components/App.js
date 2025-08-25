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

    // Fetch conversations from API or local storage
    this.fetchConversations();
  }

  fetchConversations = () => {
    // Replace with actual API call or local storage retrieval
    const conversations = [
      { id: 1, message: 'Hello', sender: 'User' },
      { id: 2, message: 'Hi', sender: 'Assistant' },
      // Add more conversations as needed
    ];
    this.setState({ conversations });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isDarkMode !== this.state.isDarkMode) {
      localStorage.setItem('darkMode', this.state.isDarkMode);
    }
  }

  render() {
    const { timestamp, isDarkMode, conversations } = this.state;
    const theme = isDarkMode ? 'dark' : 'light';

    return (
      <div className={`app ${theme}`}>
        <header>
          <h1>Chat App</h1>
          <button onClick={this.toggleDarkMode}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>
        <div className="sidebar">
          <h2>Conversations</h2>
          <ul>
            {conversations.map(conversation => (
              <li key={conversation.id}>
                {conversation.sender}: {conversation.message}
              </li>
            ))}
          </ul>
        </div>
        <main>
          <p>Current Time: {timestamp}</p>
          {/* Main content can be added here */}
        </main>
      </div>
    );
  }
}

export default App;